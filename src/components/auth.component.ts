import BaseComponent from './base-page.component';

type PlainObject<T = unknown> = {
  [k in string]: T
}

class AuthComponent extends BaseComponent {
  constructor(template: string, templateData: PlainObject) {
    super(template, templateData);
  }

  render(selector = 'main', position: InsertPosition = 'beforeend'): void {
    super.render(selector, position);
  }
}

export default AuthComponent;