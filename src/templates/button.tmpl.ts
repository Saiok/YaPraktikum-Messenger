export default `
<button class="<%= classes %>" <% if (id) { %> id="<%= id %>" <% } %>>
    <%= label %>
</button>
`;
