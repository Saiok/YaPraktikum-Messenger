(function (buttonParams) {
  const compiled = _.template(window.chatAsideTemplate);
  const asideElement = document.querySelector('aside');
  asideElement.innerHTML = compiled(asideData);
})(buttonParams)