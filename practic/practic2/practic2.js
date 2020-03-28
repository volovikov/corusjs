

var windows = (function WindowsModule() {
  const MAIN_CLASS_NAME = 'popup-window';

  var private = {
  	getMainElementList: function() {
  		return Array.prototype.slice.call(document.getElementsByClassName(MAIN_CLASS_NAME));
  	},
  	setEventListener: function(domEl, execFn) {
      domEl.addEventListener('click', execFn);
  	},
    open: function() {
      alert('Окно открыто')
    },
    close: function() {
      console.log('close');
    }
  };
  var public = {
  	init: function() {
      var  p = private;

  		p.getMainElementList()
        .forEach(el => p.setEventListener(el, p.open))
  	}
  }

  // Обратите внимание!
  // Функция WindowsModule в данном случае, условно, является Констуктором
  // При этом этот конструктор имеет Приватные и Публичные методы
  // И при запуске конструктора, я сразу же, вызываю один из методов
  //
  public.init();

  return public;
})();
