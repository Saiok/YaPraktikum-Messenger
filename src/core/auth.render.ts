import AuthComponent from '../components/auth.component';
import ButtonComponent from '../components/button.component';
import authTemplate from '../templates/authentication.tmpl';
import buttonTemplate from '../templates/button.tmpl';
import { hideElement, checkEmail, checkPassword } from '../utils/form-validation/form-validation';

const authData = {
  images: {
    headerIconSrc: '../../assets/icons/mail-white.svg',
    headerIconAlt: 'messenger-icon',
  },
  contents: {
    headerTitle: 'Вход',
    link: 'Нет аккаунта?',
    linkAddress: '../authentication/registration.html',
  },
  inputs: [
    {
      class: 'w-100 mb-16',
      type: 'email',
      id: 'email',
      placeholder: 'Почта',
      name: 'email',
      required: 'required',
      errors: [
        {
          id: 'emailErr',
          text: 'Введите правильную почту.',
        },
      ],
    },
    {
      class: 'w-100 mb-16',
      type: 'password',
      id: 'password',
      placeholder: 'Пароль',
      name: 'password',
      required: 'required',
      errors: [
        {
          id: 'passErr',
          text: 'Введите пароль',
        },
      ],
    },
  ],
  classes: {
    wrapper:
      'auth h-100 w-100 display-flex align-items-center justify-content-center',
    formWrapper:
      'form-wrapper border h-50 display-flex flex-direction-column justify-content-between align-items-center',
    formHeader:
      'title-wrapper bg-accent w-100 p-16 mb-16 display-flex align-items-center',
    headerIcon: 'icon mr-8',
    headerTitle: 'title text-white',
    inputWrapper:
      'inputs-wrapper w-75 display-flex flex-direction-column justify-content-around',
    actionWrapper: 'actions-wrapper pb-20 display-flex flex-direction-column',
    link: 'text-primary text-link',
  },
  styles: {
    formHeader: 'box-sizing: border-box',
  },
};

const auth = new AuthComponent(authTemplate, authData);
const button = new ButtonComponent(buttonTemplate, {
  classes: 'btn-accent mb-16',
  label: 'Войти',
});
auth.render();
button.render('.actions-wrapper > a.text-primary');

const email: HTMLInputElement = document.querySelector('#email');
const password: HTMLInputElement = document.querySelector('#password');
const emailErr: HTMLElement = document.querySelector('#emailErr');
const passErr: HTMLElement = document.querySelector('#passErr');

email.onfocus = (): void => {
  hideElement(emailErr);
};
password.onfocus = (): void => {
  hideElement(passErr);
};

email.onblur = (): void => {
  checkEmail(email, emailErr);
};
password.onblur = (): void => {
  checkPassword(password, passErr);
};

button.compiledElement.addEventListener('click', function (): void {
  const emailValid = checkEmail(email, emailErr);
  const passValid = checkPassword(password, passErr);

  if (emailValid && passValid) {
    console.log('[EMAIL] - ', email.value);
    console.log('[PASSWORD] - ', password.value);
    window.location.href = '../chat/chat.html';
  }
});
