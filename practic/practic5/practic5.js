
function getPanelPrimitive() {
  class Panel {
      render() {

      }
  }
  return Panel;
};

function getTablePrimitive() {
  class Table {
    render() {

    }
  }
  return Panel;
};

function getSuperTablePrimitive(Table) {
  if (!Table) {
    u.loadComponent()
  }
  u.loadStyle();

  class SuperTable extends Table {
    constructor() {
      super();
    }
  }
  return SuperTable;
}

var fabric =  function(u) {

  class Fabric {
    #mainFabricMixin =  {
      pin: function() {
        console.log('pin');
      },
      unpin: function() {
        console.log('unpin');
      }
    }
    primitiveKeyCollection = [
      'table',
      //'panel',
      //'superTable'
    ];
    #loadedPrimitiveCollection = {};

    constructor() {

    }

    getTotalPrimitiveLoaded() {
      return this.primitiveKeyCollection.length - 1;
    }

    ready(finalLoadedCallback) {
      this.primitiveKeyCollection
        .forEach((key, index) => u.loadComponent(key, componentPrimitive => {
          this.#loadedPrimitiveCollection[key] = u.setMixin(
            componentPrimitive,
            this.#mainFabricMixin
          );
          if (index == this.getTotalPrimitiveLoaded()) {
            finalLoadedCallback(this);
          }
        }));
    }

    getMainPanel() {

    }

    getMainTable() {
      return new this.#loadedPrimitiveCollection['table'];
    }

    getSuperTable() {

    }

  }
  return new Fabric();
}

fabric(window.utils).ready((f) => {
  console.log(f, f.getMainTable());
})
