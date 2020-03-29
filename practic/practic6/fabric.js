var fabric =  function() {
    const u = window.utils;
    
    class Fabric {
      primitiveCollection = [
        {
          key: 'menu',
          url: './components/menu.js'
        },
        {
          key: 'panel',
          url: './components/panel.js'
        },
        {
          key: 'table',
          url: './components/table.js'
        },
        {
          key: 'superPanel',
          url: './components/superPanel.js'
        }
      ];
      #loadedPrimitiveCollection = {};
   
      getTotalPrimitiveLoaded() {
        return this.primitiveKeyCollection.length - 1;
      }
  
      ready() {
        return new Promise((resolve, reject) => {
          var promiseCollection = [];

          this.primitiveCollection
            .forEach(el => {
              promiseCollection.push(u.loadComponent(el.url, el.key))
            });

          Promise.all(promiseCollection)
            .then(result => {
              this.#loadedPrimitiveCollection = result;
              resolve(this);
            })
        });
      }
  
      getComponent(componentKey) {
        return this.#loadedPrimitiveCollection[componentKey] 
          ? new this.#loadedPrimitiveCollection[componentKey] 
          : null;      
      }

      getPanel() {
        return new this.#loadedPrimitiveCollection['panel'];
      }
  
      getTable() {
        return new this.#loadedPrimitiveCollection['table'];
      }
  
      getSuperTable() {
        return new this.#loadedPrimitiveCollection['superTable'];
      }
  
      getMenu() {
        return new this.#loadedPrimitiveCollection['superTable'];
      }

    }
    return new Fabric();
  }