window.authenticationTemplate = (function() {
  return `
  <div class="<%= classes.wrapper %>">
      <div class="<%= classes.formWrapper %>">
          <div class="<%= classes.formHeader %>" style="<%= styles.formHeader %>">
              <img class="<%= classes.headerIcon %>" src="<%= images.headerIconSrc %>" alt="<%= images.headerIconAlt %>">
              <span class="<%= classes.headerTitle %>"><%= contents.headerTitle %></span>
          </div>

          <form class="<%= classes.inputWrapper %>">
              <% inputs.forEach(function(input) { %>
              <input class="<%- input.class %>" type="<%- input.type %>" id="<%- input.id %>" placeholder="<%- input.placeholder %>" name="<%- input.name %>" <%= input.required %>>
                <% input.errors.forEach(function(error) { %>
                <span id="<%- error.id%>" class="font-size-14 text-danger display-none"><%- error.text %></span>
                <% }); %>
              <% }); %>
          </form>
          
          <div class="<%= classes.actionWrapper %>">
              <a class="<%= classes.link%>" href="<%= contents.linkAddress %>"><%= contents.link %></a>
          </div>
      </div>
  </div>
`
})();