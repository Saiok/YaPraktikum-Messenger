const authData = {
  images: {
    headerIconSrc: '../../assets/icons/mail-white.svg',
    headerIconAlt: 'messenger-icon'
  },
  contents: {
    headerTitle: 'Вход',
    link: 'Нет аккаунта?',
    linkAddress: '../authentication/registration.html'
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
        text: 'Введите пароль'
        }
      ]
    }
  ],
  classes: {
    wrapper: 'auth h-100 w-100 display-flex align-items-center justify-content-center',
    formWrapper: 'form-wrapper border h-50 display-flex flex-direction-column justify-content-between align-items-center',
    formHeader: 'title-wrapper bg-accent w-100 p-16 mb-16 display-flex align-items-center',
    headerIcon: 'icon mr-8',
    headerTitle: 'title text-white',
    inputWrapper: 'inputs-wrapper w-75 display-flex flex-direction-column justify-content-around',
    actionWrapper: 'actions-wrapper pb-20 display-flex flex-direction-column',
    link: 'text-primary text-link'
  },
  styles: {
    formHeader: 'box-sizing: border-box'
  }
};

(function () {
  const compiled = _.template(window.authenticationTemplate);
  const mainElement = document.querySelector('main');
  mainElement.innerHTML = compiled(authData);

  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  let emailErr = document.querySelector('#emailErr');
  let passErr = document.querySelector('#passErr');

  window.createButton.render({
    renderAfterSelector: '.actions-wrapper > a.text-primary',
    position: 'beforebegin',
    classes: 'btn-accent mb-16',
    label: 'Войти'
  });

  email.onfocus = () => {
    window.formValidation.hideElement(emailErr);
  }
  password.onfocus = () => {
    window.formValidation.hideElement(passErr);
  }

  email.onblur = () => {
    window.formValidation.checkEmail(email, emailErr);
  }
  password.onblur = () => {
    window.formValidation.checkPassword(password, passErr);
  }

  const button = document.querySelector('.actions-wrapper > .btn-accent');
  button.addEventListener('click', function ($event) {
    let emailValid = window.formValidation.checkEmail(email, emailErr);
    let passValid = window.formValidation.checkPassword(password, passErr);

    if (emailValid && passValid) {
      console.log('[EMAIL] - ', email.value);
      console.log('[PASSWORD] - ', password.value);
      window.location.href = '../chat/chat.html';
    }
  });
})()