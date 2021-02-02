window['userProfileTemplate'] = (function(): string {
  return `
  <div class="<%= classes.wrapper %>">
  <div class="<%= classes.avatarWrapper %>">
    <div class="<%= classes.avatar %>"></div>
    <span class="<%= classes.fullName %>"><%= contents.fullName %></span>
  </div>
  
  <div class="<%= classes.generalInfoWrapper %>">
    <% items.forEach(function(item) {%>
    <div class="<%- item.wrapperClass %>">
      <span class="<%- item.titleClass %>"><%- item.title %></span>
      <span class="<%- item.mailClass %>"><%- item.mail %></span>
    </div>
    <% }); %>
  </div>
  
  <div class="<%= classes.actionWrapper %>">
    <span class="<%= classes.button %>"><%= contents.actionChange %></span>
    <span class="<%= classes.link %>"><%= contents.actionExit %></span>
  </div>
</div>
  `;
})();