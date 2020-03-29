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
    ready(rootDomEl, callback) {
      var core = [
        {
          url: 'core/bus.js',
          key: 'bus'
        },
        {
          url: 'core/router.js',
          key: 'router'
        },
        {
          url: './components/layout.js',
          key: 'layout'
        },        
        {
          url: './components/panel.js',
          key: 'panel'
        },
        {
          url: './components/table.js',
          key: 'table'
        },
        {
          url: './components/menu.js',
          key: 'menu'
        },
      ];
      this.load(core, () => callback && callback())
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
      u.chain({
        items: chain,
        listeners: {
          afterLastFunctonRun: callback
        }
      }).run();
    }
  }
  return getApplicationInstance();
})()

app.ready('#root', () => {
  app.run();
});
