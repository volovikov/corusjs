
// Функция
// Она све возгла возращает

getSomeValue() {
  retunr ''
}


getSomeValueList() {
  return [];
}

setSomeValue(f) {
  this.value = v;
}

createDomElement() {
  create
}

installSome() ;

pluginSone() {

}
deleteSomeValue();

renderSome() {

}
drawSome() {}



function App() {
  var private = {
    getAllMainComponentKeyList() {
      return [
        'list',
        'panel'
      ]
    },
    loadComponent(componentListKey) {
      var queue = ['', '']
      var getNextLoad() = {

      }

      function(getNextLoad)
      componentListKey.forEach(key => u.loadComponent(key, getNextLoad));
    },
    render(componentListKey) {
      componentListKey.forEach(key => window[key].render())
    }
  }
  var public = {
    run() {
      var componentKeyList = private.getAllMainComponentKeyList();

      private.loadComponent(componentKeyList);
      private.render(componentKeyList);

    }
  }
}
