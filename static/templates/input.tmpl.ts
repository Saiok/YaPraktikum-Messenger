window['inputTemplate'] = (function (): string {
  return `
    <input type="<%= type %>" id="<%= id %>" name="<%= name %>" placeholder="<%= placeholder %>" <%= required %>>
  `;
})();