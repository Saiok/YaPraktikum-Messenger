window.errorTemplate = (function() {
  return `
  <div class="<%= classes.wrapper %>">
    <span class="<%=classes.span1%>" style="<%= styles.span1 %>"><%= error.code %></span>
    <span class="<%= classes.span2 %>"><%= error.text %></span>
    <a href="<%= links.texts.text1 %>" class="<%= classes.a %>"><%= links.texts.text %></a>
  </div>
`
})();