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
      ready(rootDomEl) {
        return this.loadFabric()
            .then((fabric) => {
                fabric.ready()
                    .then((fabric) => {
                        console.log(fabric)
                    })
            })
      }

      loadFabric() {
        return u.loadComponent('fabric.js', 'fabric')
      }  

      
    }
    return getApplicationInstance();
  })()
  
  app.ready()
    .then(() => {
        console.log(app)
    })
  