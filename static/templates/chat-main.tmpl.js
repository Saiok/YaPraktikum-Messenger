/*
<div class="h-100 message-field p-8 border-bottom border-right border-top">
  <div class="message-empty w-100 h-100 text-center display-flex flex-direction-column justify-content-start">
    <div class="user-info-feed display-flex flex-direction-row pb-8 pt-8 mb-16 border-bottom w-100">
      <div class="avatar"></div>
      <div class="chat-info pl-8 display-flex flex-direction-column text-left">
        <span class="text-bold mb-4">User 3</span>
        <span class="text-secondary">Был 5 минут назад</span>
      </div>
      <img class="settings-icon p-4" src="../assets/icons/open-menu.svg" alt="feed settings icon">
    </div>
    <div class="messages-feed display-flex flex-direction-column justify-content-end h-100">
      <span class="text-secondary mb-12">Сегодня</span>

      <div class="message-text-wrapper w-100 display-flex justify-content-start">
        <div class="message-text-1 p-8 pb-16 mb-8 text-left">
          <span>Lorem ipsum dolor sit amet.</span>
          <span class="message-time text-secondary">11:00</span>
        </div>
      </div>

      <div class="message-text-wrapper w-100 display-flex justify-content-start">
        <div class="message-text-1 p-8 pb-16 mb-8 text-left">
          <span>Lorem ipsum dolor sit amet.</span>
          <span class="message-time text-secondary">11:30</span>
        </div>
      </div>

      <div class="message-text-wrapper w-100 display-flex justify-content-start">
        <div class="message-text-1 p-8 pb-16 mb-8 text-left">
          <span>Lorem ipsum dolor sit amet.</span>
          <span class="message-time text-secondary">12:00</span>
        </div>
      </div>

      <div class="message-text-wrapper w-100 display-flex justify-content-end">
        <div class="message-text-2 p-8 pb-16 mb-8 text-left">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis doloribus earum
            eum fugit illo, ipsum iusto magni molestiae necessitatibus nostrum praesentium, quia repudiandae
            voluptas!
          </span>
          <span class="message-time text-primary">>> 13:00</span>
        </div>
      </div>

    </div>
    <div class="message-type display-flex flex-direction-row justify-content-between align-items-center p-12 border-top">
      <img class="icon" src="../assets/icons/file-upload.svg" alt="send file">
        <input class="input pl-12 pr-12" type="text" placeholder="Сообщение">
          <div class="send-button display-flex align-items-center justify-content-center">
            <span> > </span>
          </div>
    </div>
  </div>
</div>
*/

window.chatMainTemplate = (function() {
  return `
  <div class="<%= classes.messageFieldWrapper %>">
    <div class="<%= classes.messageField %>">
      <div class="<%= classes.chatInfoWrapper %>">
        <div class="<%= classes.avatar %>"></div>
        <div class="<%= classes.chatInfo %>">
          <span class="<%= classes.chatUserName %>"><%= contents.chatUserName %></span>
          <span class="<%= classes.chatUserActivity %>"><%= contents.chatUserActivity %></span>
        </div>
        <img class="<%= settingsImg.class %>" src="<%= settingsImg.src %>" alt="<%= settingsImg.alt %>">
      </div>
      
      <div class="<%= classes.chatContentWrapper %>">
        
        <span class="<%= classes.chattingDay %>"><%= contents.chattingDay %></span>
        
        <% items.forEach(function(item) {%>
        <div class="<%- item.classes.messageWrapper %>">
          <div class="<%- item.classes.message %>">
            <span><%- item.contents.message %></span>
            <span class="<%- item.classes.messageTime %>"><%- item.contents.time %></span>
          </div>
        </div>
        <% }); %>

      </div>
      
      <div class="<%= classes.actionWrapper %>">
        <img class="<%= actionImg.class %>" src="<%= actionImg.src %>" alt="<%= actionImg.alt %>">
        <input class="<%= actionInput.class %>" type="<%= actionInput.type %>" id="<%= actionInput.id %>" placeholder="<%= actionInput.placeholder %>">
      </div>
    </div>
  </div>
  `
})()