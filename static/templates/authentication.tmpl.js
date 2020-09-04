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
                    <% }); %>
                </form>
                
                <div class="<%= classes.actionWrapper %>">
                    <button class="<%= classes.button %>">
                        <%= contents.button %>
                    </button>

                    <a class="<%= classes.link%>" href="<%= contents.linkAddress %>"><%= contents.link %></a>
                </div>
            </div>
        </div>
`
})();