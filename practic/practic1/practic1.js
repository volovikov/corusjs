var utils = {
  strToInt: function() {

  },
  isNan: function() {

  },
  loadComponent: function(key, callback) {
    const componentOffset = './components/';
    var script = document.createElement('script');

    script.onload = () => callback && callback(
      window[key]()
    );

    script.src = `${componentOffset}${key}.js`;
    document.head.appendChild(script);
  },
  setMixin: function(sourceObject, mixin) {
    for (var key in mixin) {
      sourceObject.prototype[key] = mixin[key];
    }
    return sourceObject;
  }
};
