/*
<div class="aside-panel h-100 border p-8">
  <div class="aside-header display-flex flex-direction-column align-items-center justify-content-center border-bottom pb-12">
    <div class="w-100 text-right mt-16 mb-16">
      <span class="text-link text-gray">Профиль ></span>
    </div>
    <div class="w-100 input-wrapper">
      <input class="mb-8 pt-8 pb-8 w-100 pl-20 search-input" type="text" name="search"
             placeholder="Поиск">
        <img class="search-icon" src="../assets/icons/search.svg" alt="search icon">
    </div>
  </div>
  <ul class="aside-body display-flex flex-direction-column align-items-center justify-content-center p-0">
    <li class="user-info display-flex flex-direction-row pb-8 pt-8 border-bottom w-100">
      <div class="avatar"></div>
      <div class="chat-info pl-8 display-flex flex-direction-column">
        <span class="text-bold mb-4">User 1</span>
        <span class="text-secondary">Chat text preview</span>
      </div>
      <div class="time">
        <span class="text-secondary">11:00</span>
      </div>
      <div class="badge-accent">
        <span>2</span>
      </div>
    </li>
  </ul>
</div>
*/

export default `
<div class="<%= classes.wrapper %>">
  <div class="<%= classes.asideHeader %>">
    <div class="<%= classes.profileLinkWrapper %>">
      <a href="<%= contents.profileLinkAddress %>" class="<%= classes.profileLink %>"><%= contents.profileLink %></a>
    </div>
    
    <% inputs.forEach(function(input) { %>
    <div class="<%- input.classes.inputWrapper %>">
      <input class="<%- input.classes.input %>" type="<%- input.type %>" name="<%- input.name %>"
             placeholder="<%- input.placeHolder %>">
      <img class="<%- input.icon.class %>" src="<%- input.icon.src %>" alt="<%- input.icon.alt %>">
    </div>
    <% }); %>
  </div>
  
  <ul class="<%= classes.asideBody %>">
    <% items.forEach(function(item) { %>
    <li class="<%- item.classes.list %>">
      <div class="<%- item.classes.avatar %>"></div>
      <div class="<%- item.classes.chatInfoWrapper %>">
        <span class="<%- item.classes.chatUserName %>"><%- item.contents.chatUserName %></span>
        <span class="<%- item.classes.chatText %>"><%- item.contents.chatText %></span>
      </div>
      <div class="<%- item.classes.timeWrapper %>">
        <span class="<%- item.classes.time %>"><%- item.contents.time %></span>
      </div>
      <% if(item.contents.badge) { %>
      <div class="<%- item.classes.badge %>">
        <span><%- item.contents.badge %></span>
      </div>
      <% } else { %>
      <div>
      </div>
      <% } %>
    </li>
    <% }); %>
  </ul>
</div>
`;

