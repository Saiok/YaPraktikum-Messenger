window.buttonTemplate = (function () {
  return `
    <button class="<%= classes %>" <% if (id) { %> id="<%= id %>" <% } %>>
        <%= label %>
    </button>
  `
})()