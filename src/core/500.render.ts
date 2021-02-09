import template from '../templates/error-page.tmpl';
import BasePageComponent from '../components/base-page.component';

const errorData = {
  error: {
    code: 500,
    text: 'Internal Server Error.'
  },
  classes: {
    wrapper: 'w-100 h-100 display-flex flex-direction-column align-items-center justify-content-center',
    span1: 'mb-16',
    span2: 'mb-12',
    a: 'text-link text-primary'
  },
  styles: {
    span1: 'font-size: 196px'
  },
  links: {
    texts: {
      text: 'Назад'
    },
    hrefs: {
      href: './chat.html'
    }
  }
};

const errorPage = new BasePageComponent(template, errorData);
errorPage.render();