window.buttonTemplate = (function () {
  return `
    <button class="<%= classes %>" id="<%= id %>">
        <=% label %>
    </button>
  `
})()