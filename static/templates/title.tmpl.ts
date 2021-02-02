window['titleTemplate'] = (function (): string {
  return `
    <div class="<%= classes.formHeader %>" style="<%= styles.formHeader %>">
        <img class="<%= classes.headerIcon %>" src="<%= images.headerIconSrc %>" alt="<%= images.headerIconAlt %>">
        <span class="<%= classes.headerTitle %>"><%= contents.headerTitle %></span>
    </div>
  `;
})();