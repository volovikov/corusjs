
class Chain {
    #chainList = [];

    static setChainList(chainFunctionList) {
        this.chainList = chainFunctionList.map((f, i) => {
             return f.bind(this, this.getFirstFunction, this.getLastFunction, this.getFunctonAt.bind(this, ++i))
        });
    }

    static getTotalFunction() {
      return this.chainList.length;
    }

    static getLastFunction() {
        return this.chainList[this.chainList.length-1];
    }

    static getFirstFunction() {
        return this.chainList[0];
    }

    static getFunctonAt(index) {
      this.chainList[index] && this.chainList[index]();

      if (this.getTotalFunction() == index) {
        this.afterLastFunctonRun && this.afterLastFunctonRun();
      }
    }

    static getChainList() {
        return this.chainList;
    }

    static run(){
        this.chainList[0]();
    }

    static afterLastFunctonRun(fn) {
      this.afterLastFunctonRun = fn;
    }
}

var utils = {
  strToInt: function() {

  },
  isNan: function() {

  },
  loadComponent: function(url, key) {
    return new Promise((resolve, reject) => {
      var script = document.createElement('script');
      script.onload = () => resolve(window[key]());      
      script.src = url;
      document.head.appendChild(script);
    })    
  },
  setMixin: function(sourceObject, mixin) {
    for (var key in mixin) {
      sourceObject.prototype[key] = mixin[key];
    }
    return sourceObject;
  },
  chain: function(params) {
    params.items && Chain.setChainList(params.items);
    params.listeners && params.listeners.afterLastFunctonRun && Chain.afterLastFunctonRun(params.listeners.afterLastFunctonRun);
    return Chain;
  }
};
