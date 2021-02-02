window['buttonTemplate'] = (function (): string {
  return `
    <button class="<%= classes %>" <% if (id) { %> id="<%= id %>" <% } %>>
        <%= label %>
    </button>
  `;
})();