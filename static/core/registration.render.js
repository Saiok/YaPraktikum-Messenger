const authData = {
  images: {
    headerIconSrc: '../../assets/icons/mail-white.svg',
    headerIconAlt: 'messenger-icon'
  },
  contents: {
    headerTitle: 'Регистрация',
    button: 'Зарегистрироваться',
    link: 'Войти',
  },
  inputs: [
    {
      class: 'w-100 mb-16',
      type: 'text',
      id: 'first-name',
      placeholder: 'Имя',
      name: 'first-name',
      required: 'required'
    },
    {
      class: 'w-100 mb-16',
      type: 'text',
      id: 'last-name',
      placeholder: 'Фамилия',
      name: 'last-name',
      required: 'required'
    },
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
    },
    {
      class: 'w-100 mb-16',
      type: 'password',
      id: 'password-confirm',
      placeholder: 'Подтвердите пароль',
      name: 'password-confirm',
      required: 'required'
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

  const firstName = document.querySelector('#first-name');
  const lastName = document.querySelector('#last-name');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const passwordConfirm = document.querySelector('#password-confirm');

  let firstNameErr = document.querySelector('#firstNameErr');
  let lastNameErr = document.querySelector('#lastNameErr');
  let emailErr = document.querySelector('#emailErr');
  let passErr = document.querySelector('#passErr');
  let passConfirmErr = document.querySelector('#passConfirmErr');

  firstName.onfocus = () => {
    if (firstNameErr) removeChild(firstNameErr.parentNode, firstNameErr);
  }
  lastName.onfocus = () => {
    if (lastNameErr) removeChild(lastNameErr.parentNode, lastNameErr);
  }
  passwordConfirm.onfocus = () => {
    if (passConfirmErr) removeChild(passConfirmErr.parentNode, passConfirmErr);
  }
  email.onfocus = () => {
    if (emailErr) removeChild(emailErr.parentNode, emailErr);
  }
  password.onfocus = () => {
    if (passErr) removeChild(passErr.parentNode, passErr);
  }

  firstName.onblur = () => {
    checkName(firstName);
  }
  lastName.onblur = () => {
    checkName(lastName);
  }
  email.onblur = () => {
    checkEmail(email);
  }
  passwordConfirm.onblur = () => {
    checkPassword(passwordConfirm);
  }
  password.onblur = () => {
    checkPassword(password);
  }

  const button = document.querySelector('.actions-wrapper > .btn-accent');
  button.addEventListener('click', function ($event) {
    if (emailErr) removeChild(emailErr.parentNode, emailErr);
    if (passErr) removeChild(passErr.parentNode, passErr);
    if (firstNameErr) removeChild(firstNameErr.parentNode, firstNameErr);
    if (lastNameErr) removeChild(lastNameErr.parentNode, lastNameErr);
    if (passConfirmErr) removeChild(passConfirmErr.parentNode, passConfirmErr);

    let emailValid = checkEmail(email);
    let passValid = checkPassword(password);
    let firstNameValid = checkName(firstName);
    let lastNameValid = checkName(lastName);
    let passConfirmValid = checkPassword(passwordConfirm);

    if (emailValid && passValid && firstNameValid && lastNameValid && passConfirmValid) {
      console.log('[FIRSTNAME] - ', firstName.value);
      console.log('[LASTNAME] - ', lastName.value);
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
    if (pass && !pass.value && pass.id === 'password') {
      passErr = document.createElement('span');
      passErr.id = 'passErr';
      passErr.classList.add('font-size-14');
      passErr.classList.add('text-danger');
      passErr.textContent = 'Введите пароль';
      insertAfter(password, passErr);
    }

    if ((pass && !pass.value && pass.id === 'password-confirm') || (pass.value !== password.value)) {
      passConfirmErr = document.createElement('span');
      passConfirmErr.id = 'passConfirmErr';
      passConfirmErr.classList.add('font-size-14');
      passConfirmErr.classList.add('text-danger');
      passConfirmErr.textContent = !pass.value ? 'Введите пароль' : '';
      passConfirmErr.textContent = !pass.value !== password.value ? 'Пароль не совпадает.' : '';
      insertAfter(passwordConfirm, passConfirmErr);
    }

    return pass.value.length !== 0;
  }

  function checkName(name) {
    const NAME_REGEXP = new RegExp(/[A-Zaz]/, 'gi');
    const nameValid = NAME_REGEXP.test(name.value);

    if (!nameValid && name.id === 'first-name') {
      firstNameErr = document.createElement('span');
      firstNameErr.id = 'firstNameErr';
      firstNameErr.classList.add('font-size-14');
      firstNameErr.classList.add('text-danger');
      firstNameErr.textContent = 'Введите правильное имя.';
      insertAfter(firstName, firstNameErr);
    }

    if (!nameValid && name.id === 'last-name') {
      lastNameErr = document.createElement('span');
      lastNameErr.id = 'lastNameErr';
      lastNameErr.classList.add('font-size-14');
      lastNameErr.classList.add('text-danger');
      lastNameErr.textContent = 'Введите правильное фамилию.';
      insertAfter(lastName, lastNameErr);
    }

    return name.value.length !== 0;
  }
})()