window.roundedButtonTemplate = (function () {
  return `
    <div class="<%= classes %>" <% if (id) { %> id="<%= id %>" <% } %>>
      <span> <%= label %> </span>
    </div>
  `
})()