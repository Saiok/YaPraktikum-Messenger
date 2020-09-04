/*
<div class="message-field p-8 border-bottom border-right border-top">
  <div class="message-empty w-100 h-100 text-center display-flex flex-direction-column justify-content-center">
    <span class="text-gray">Выберите чат чтобы отправить сообщение</span>
  </div>
</div>
*/

window.chatMainEmptyTemplate = (function () {
  return `
  <div class="<%= classes.messageFieldWrapper %>">
    <div class="<%= classes.messageField %>">
      <span class="<%= classes.text %>"><%= contents.text %></span>
    </div>
  </div>
`
})()