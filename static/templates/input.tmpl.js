window.inputTemplate = (function () {
  return `
    <input type="<%= type %>" id="<%= id %>" name="<%= name %>" placeholder="<%= placeholder %>" <%= required %>>
  `
})()