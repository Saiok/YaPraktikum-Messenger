window.formValidation = (function () {
  function checkEmail(email, err) {
    const EMAIL_REGEXP = new RegExp(/^[a-zA-Z][a-zA-Z0-9\.\-]{3,}\@[a-zA-Z0-9]{1,}\.[a-zA-Z]{1,}$/, 'gi');
    const emailValid = EMAIL_REGEXP.test(email.value);

    if (!email || !emailValid) {
      showElement(err);
    }

    return emailValid;
  }

  function checkPassword(pass, err, passConfirm) {
    if (pass && !pass.value && pass.id === 'password') {
      showElement(err);
    }

    return pass.value.length !== 0;
  }

  function checkPasswordConfirm(pass, err1, err2, value) {
    if ((pass && !pass.value && pass.id === 'password-confirm') || (pass.value !== value)) {
      if (!pass.value) showElement(err1);
      if (pass.value && pass.value !== value) showElement(err2);
    }

    return pass.value.length !== 0;
  }

  function checkName(name, err) {
    const NAME_REGEXP = new RegExp(/^[A-Zaz]$/, 'gi');
    const nameValid = NAME_REGEXP.test(name.value);

    if (!nameValid && name.id === 'first-name') {
      showElement(err);
    }

    if (!nameValid && name.id === 'last-name') {
      showElement(err);
    }

    return name.value.length !== 0;
  }

  function hideElement(element) {
    const checkHide = element.classList.contains('display-none');
    const checkShow = element.classList.contains('display-none');

    if (!checkHide) {
      element.classList.add('display-none');
    }
    if (checkShow) {
      element.classList.remove('display-block');
    }
  }

  function showElement(element) {
    const checkHide = element.classList.contains('display-none');
    const checkShow = element.classList.contains('display-none');

    if (!checkShow) {
      element.classList.add('display-block');
    }
    if (checkHide) {
      element.classList.remove('display-none');
    }
  }

  return {
    checkEmail,
    checkPassword,
    checkName,
    showElement,
    hideElement,
    checkPasswordConfirm
  }
})()