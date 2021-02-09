import BasePageComponent from '../components/base-page.component';
import authenticationTemplate from '../templates/authentication.tmpl';
import buttonTemplate from '../templates/button.tmpl';
import * as FormValidation from '../utils/form-validation/form-validation';

const registrationData = {
  images: {
    headerIconSrc: '../../assets/icons/mail-white.svg',
    headerIconAlt: 'messenger-icon'
  },
  contents: {
    headerTitle: 'Регистрация',
    link: 'Войти',
    linkAddress: '../authentication/auth.html'
  },
  inputs: [
    {
      class: 'w-100 mb-16',
      type: 'text',
      id: 'first-name',
      placeholder: 'Имя',
      name: 'first-name',
      required: 'required',
      errors: [
        {
          id: 'firstNameErr',
          text: 'Введите имя.'
        }
      ]
    },
    {
      class: 'w-100 mb-16',
      type: 'text',
      id: 'last-name',
      placeholder: 'Фамилия',
      name: 'last-name',
      required: 'required',
      errors: [
        {
          id: 'lastNameErr',
          text: 'Введите фамилию.'
        }
      ]
    },
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
          text: 'Введите правильную почту.'
        }
      ]
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
          text: 'Введите пароль.'
        }
      ]
    },
    {
      class: 'w-100 mb-16',
      type: 'password',
      id: 'password-confirm',
      placeholder: 'Подтвердите пароль',
      name: 'password-confirm',
      required: 'required',
      errors: [
        {
          id: 'passConfirmErr1',
          text: 'Введите подтверждения пароля.'
        },
        {
          id: 'passConfirmErr2',
          text: 'Пароль не совпадает.'
        }
      ]
    }
  ],
  classes: {
    wrapper: 'auth h-100 w-100 display-flex align-items-center justify-content-center',
    formWrapper: 'form-wrapper border h-75 display-flex flex-direction-column justify-content-between align-items-center',
    formHeader: 'title-wrapper bg-accent w-100 p-16 mb-16 display-flex align-items-center',
    headerIcon: 'icon mr-8',
    headerTitle: 'title text-white',
    inputWrapper: 'inputs-wrapper w-75 h-50 display-flex flex-direction-column justify-content-around',
    actionWrapper: 'actions-wrapper pb-20 display-flex flex-direction-column align-items-center',
    link: 'text-primary text-link'
  },
  styles: {
    formHeader: 'box-sizing: border-box'
  }
};
const btnData = {
  classes: 'btn-accent mb-16',
  label: 'Зарегистрироваться'
};

const auth = new BasePageComponent(authenticationTemplate, registrationData);
auth.render();
const btn = new BasePageComponent(buttonTemplate, btnData);
btn.render('.actions-wrapper > a.text-primary');

const firstName: HTMLInputElement = document.querySelector('#first-name');
const lastName: HTMLInputElement = document.querySelector('#last-name');
const email: HTMLInputElement = document.querySelector('#email');
const password: HTMLInputElement = document.querySelector('#password');
const passwordConfirm: HTMLInputElement = document.querySelector('#password-confirm');

const firstNameErr: HTMLElement = document.querySelector('#firstNameErr');
const lastNameErr: HTMLElement = document.querySelector('#lastNameErr');
const emailErr: HTMLElement = document.querySelector('#emailErr');
const passErr: HTMLElement = document.querySelector('#passErr');
const passConfirmErr1: HTMLElement = document.querySelector('#passConfirmErr1');
const passConfirmErr2: HTMLElement = document.querySelector('#passConfirmErr2');

firstName.onfocus = (): void => {
  FormValidation.hideElement(firstNameErr);
};
lastName.onfocus = (): void => {
  FormValidation.hideElement(lastNameErr);
};
passwordConfirm.onfocus = (): void => {
  FormValidation.hideElement(passConfirmErr1);
  FormValidation.hideElement(passConfirmErr2);
};
email.onfocus = (): void => {
  FormValidation.hideElement(emailErr);
};
password.onfocus = (): void => {
  FormValidation.hideElement(passErr);
};

firstName.onblur = (): void => {
  FormValidation.checkName(firstName, firstNameErr);
};
lastName.onblur = (): void => {
  FormValidation.checkName(lastName, lastNameErr);
};
email.onblur = (): void => {
  FormValidation.checkEmail(email, emailErr);
};
passwordConfirm.onblur = (): void => {
  FormValidation.checkPasswordConfirm(passwordConfirm, passConfirmErr1, passConfirmErr2, password.value);
};
password.onblur = (): void => {
  FormValidation.checkPassword(password, passErr);
  if (password.value && passwordConfirm.value) {
    FormValidation.checkPasswordConfirm(passwordConfirm, passConfirmErr1, passConfirmErr2, password.value);
  }
};

const button: HTMLElement = document.querySelector('.actions-wrapper > .btn-accent');
button.addEventListener('click', function (): void {
  const emailValid: boolean = FormValidation.checkEmail(email, emailErr);
  const passValid: boolean = FormValidation.checkPassword(password, passErr);
  const firstNameValid: boolean = FormValidation.checkName(firstName, firstNameErr);
  const lastNameValid: boolean = FormValidation.checkName(lastName, lastNameErr);
  const passConfirmValid: boolean = FormValidation.checkPasswordConfirm(passwordConfirm, passConfirmErr1, passConfirmErr2, password.value);

  if (emailValid && passValid && firstNameValid && lastNameValid && passConfirmValid) {
    console.log('[FIRSTNAME] - ', firstName.value);
    console.log('[LASTNAME] - ', lastName.value);
    console.log('[EMAIL] - ', email.value);
    console.log('[PASSWORD] - ', password.value);
    window.location.href = '../chat/chat.html';
  }
});