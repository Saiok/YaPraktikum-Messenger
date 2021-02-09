// import * as _ from 'lodash';
declare const _: {
  template: (template: string) => (obj: PlainObject) => string;
};
type PlainObject<T = unknown> = {
  [k in string]: T;
};

class BasePageComponent {
  public template: string;
  public templateData: PlainObject;
  public compiled: (obj: PlainObject) => string;
  public compiledElement: Element;

  constructor(template: string, templateData: PlainObject) {
    this.template = template;
    this.templateData = templateData;
    this.compiled = _.template(this.template);
  }

  public render(selector = 'main', position: InsertPosition = 'beforeend'): void {
    const element: HTMLElement = document.querySelector(selector);
    const compiledText: string = this.compiled(this.templateData);
    this.compiledElement = document.createElement(null);
    this.compiledElement.innerHTML = compiledText;

    element.insertAdjacentElement(position, this.compiledElement);
  }
}

export default BasePageComponent;