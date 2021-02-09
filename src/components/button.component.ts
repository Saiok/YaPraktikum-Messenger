import BasePageComponent from './base-page.component';

type PlainObject<T = unknown> = {
  [k in string]: T;
};

class ButtonComponent extends BasePageComponent {
  constructor(template: string, templateData: PlainObject) {
    super(template, templateData);
  }

  public render(selector = 'main', position: InsertPosition = 'beforeend'): void {
    super.render(selector, position);
  }
}

export default ButtonComponent;