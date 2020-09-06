window.createButton = (function () {
  const compiled = _.template(window.buttonTemplate);
  const compiledRounded = _.template(window.roundedButtonTemplate);

  function render(buttonProperties) {
    const {renderAfterSelector, position, classes, label, id, rounded} = buttonProperties;
    const renderAfter = document.querySelector(renderAfterSelector);
    let btn;
    if (!rounded) {
      btn = compiled({classes, label, id});
    } else {
      btn = compiledRounded({classes, label, id});
    }
    renderAfter.insertAdjacentHTML(position, btn);
  }

  return {
    render
  }
})()