const authData = {
  images: {
    headerIconSrc: '../../assets/icons/mail-white.svg',
    headerIconAlt: 'messenger-icon'
  },
  contents: {
    headerTitle: 'Вход',
    button: 'Войти',
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
      required: 'required'
    },
    {
      class: 'w-100 mb-16',
      type: 'password',
      id: 'password',
      placeholder: 'Пароль',
      name: 'password',
      required: 'required'
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
    button: 'btn-accent mb-16',
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

  email.onfocus = () => {
    if (emailErr) removeChild(emailErr.parentNode, emailErr);
  }
  password.onfocus = () => {
    if (passErr) removeChild(passErr.parentNode, passErr);
  }

  email.onblur = () => {
    checkEmail(email);
  }
  password.onblur = () => {
    checkPassword(password);
  }

  const button = document.querySelector('.actions-wrapper > .btn-accent');
  button.addEventListener('click', function ($event) {
    if (emailErr) removeChild(emailErr.parentNode, emailErr);
    if (passErr) removeChild(passErr.parentNode, passErr);

    let emailValid = checkEmail(email);
    let passValid = checkPassword(password);

    if (emailValid && passValid) {
      console.log('[EMAIL] - ', email.value);
      console.log('[PASSWORD] - ', password.value);
      window.location.href = '../chat/chat.html';
    }
  });

  function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  function removeChild(parentNode, child) {
    if (!parentNode) return;
    parentNode.removeChild(child);
  }

  function checkEmail(email) {
    const EMAIL_REGEXP = new RegExp(/[\w\.\-]{3,}\@\w{1,}\.\w{1,}/, 'gi');
    const emailValid = EMAIL_REGEXP.test(email.value);

    if (!email || !emailValid) {
      emailErr = document.createElement('span');
      emailErr.id = 'emailErr';
      emailErr.classList.add('font-size-14');
      emailErr.classList.add('text-danger');
      emailErr.textContent = 'Введите правильный email.';
      insertAfter(email, emailErr);
    }

    return emailValid;
  }

  function checkPassword(pass) {
    if (pass && !pass.value) {
      passErr = document.createElement('span');
      passErr.id = 'passErr';
      passErr.classList.add('font-size-14');
      passErr.classList.add('text-danger');
      passErr.textContent = 'Введите пароль';
      insertAfter(password, passErr);
    }

    return pass.value.length !== 0;
  }
})()