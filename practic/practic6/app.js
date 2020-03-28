var app = (function Application(rootDomEl) {
  var u = window.utils,
      applicationInstance = null;

  var getApplicationInstance = function() {
   if (!applicationInstance) {
     applicationInstance = new App;
   }
   return applicationInstance;
  }

  class App {
    init(rootDomEl, callback) {
      var core = [
        {
          url: 'core/bus.js',
          key: 'bus'
        },
        {
          url: 'core/fabric.js',
          key: 'fabric'
        },
        {
          url: 'core/router.js',
          key: 'router'
        }
      ];
      this.load(core, () => callback && callback())
    }

    getBus() {
      return this.bus;
    }

    getRouter() {
      return this.router;
    }

    getFabric() {
      return this.fabric;
    }

    run() {
      console.log(this);
    }

    load(componentList, callback) {
      var chain = [];

      componentList.forEach(v => {
        var {key, url} = v;

        chain.push((firstFn, lastFn, nextFn) => {
          u.loadComponent(url, key, (component) => {
            this[key] = component;
            nextFn && nextFn();
          })
        });
      });
      u.chain.afterLastFunctonRun(callback);
      u.chain.setChainList(chain);
      u.chain.run();
    }
  }
  return getApplicationInstance();
})()

app.init('#root', () => {
  app.run();
});
