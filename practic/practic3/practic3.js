
var app = (function(u) {
  const MAIN_COMPONENT_CLASS_NAME = 'main-component';

  var getMainComponentCollection = function(callback) {
    callback && callback(Array.from(document.getElementsByClassName(MAIN_COMPONENT_CLASS_NAME)))
  };
  getMainComponentCollection(componentDomElementCollection => {
    componentDomElementCollection.forEach(componentDomEl => {
      u.loadModule({
        key: componentDomEl.getAttribute('key'),
        domEl: componentDomEl
      })
    })
  })
})(window.utils);



var mainPanel = (function Panel() {
    const MAIN_CLASS_NAME = 'main-panel';

    var insertStyle = window.u && window.u.insertStyle || function() {

    };
    function Panel() {}

    Panel.prototype.getTemplate = function(headerText, contentText) {
      return `
        <div class="${MAIN_CLASS_NAME}">
          <div class="title">${headerText}</div>
          <div class="content">${contentText}</div>
        </div>
      `
    };
    Panel.prototype.draw = function(domEl, headerText, contentText) {
      document.getElementById(domEl).innerHTML = this.getTemplate(headerText, contentText);
    }
    return new Panel();
})();


var mainSuperPanel = (function SuperPanel(mainPanel) {
  const MAIN_CLASS_NAME = 'main-super-panel';

  function SuperPanel() {
    this.getTemplate = function(headerText, contentText) {
      return `
        <div class="${MAIN_CLASS_NAME}">
          <div class="main-title">${headerText}</div>
          <div class="main-content">${contentText}</div>
        </div>
      `
    }
  }
  SuperPanel.prototype = mainPanel;

  return new SuperPanel();
})(window.mainPanel)

window.mainPanel.draw('main-panel-wrapper', 'some header', 'some content');
window.mainSuperPanel.draw('main-supper-panel-wrapper', 'some super header', 'some super content')

var loadJS = function(url, implementationCode, location){
	var scriptTag = document.createElement('script');
	scriptTag.src = url;
	scriptTag.onload = implementationCode;
	scriptTag.onreadystatechange = implementationCode;     location.appendChild(scriptTag);
};
var yourCodeToBeCalled = function(){ //your code goes here }
loadJS('yourcode.js', yourCodeToBeCalled, document.body);
