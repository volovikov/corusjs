function getPanelPrimitive() {
  var Panel = function() {

  }
  Panel.prototype.render = function() {

  }
  return Panel;
};

function getTablePrimitive() {
  var Table = function() {

  }
  Table.prototype.render = function() {

  }
  return Table;
};


var fabric =  (function(u) {
  var mainFabricMixin = {
    pin: function() {
      console.log('pin');
    },
    unpin: function() {
      console.log('unpin');
    }
  };
  var primitiveKeyCollection = [
    'table',
    'panel'
  ];
  var loadedPrimitiveCollection = {

  };

  primitiveKeyCollection
    .forEach(key => u.loadComponent(key, componentPrimitive => {
      loadedPrimitiveCollection[key] = u.setMixin(componentPrimitive, mainFabricMixin);
    }));

  return {
    getMainPanel: function() {
      return loadedPrimitiveCollection['panel'] && new loadedPrimitiveCollection['panel'];
    },
    getMainTable: function() {
      return loadedPrimitiveCollection['table'] && new loadedPrimitiveCollection['table'];
    }
  }
})(window.utils)


// Очень плохо, но на момет
// Парктики4 мы другими не владеем методами
setTimeout(function() {
  console.log(fabric.getMainPanel());
  console.log(fabric.getMainTable());
}, 3);


console.log(fabric.getMainPanel());
