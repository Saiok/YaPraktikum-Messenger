function checkEmail(email: HTMLInputElement, err: HTMLElement): boolean {
  const EMAIL_REGEXP = /^[a-zA-Z][a-zA-Z0-9.-]{3,}@[a-zA-Z0-9]{1,}\.[a-zA-Z]{1,}$/gi;
  const emailValid: boolean = EMAIL_REGEXP.test(email.value);

  if (!email || !emailValid) {
    showElement(err);
  }

  return emailValid;
}

function checkPassword(pass: HTMLInputElement, err: HTMLElement): boolean {
  if (pass && !pass.value && pass.id === 'password') {
    showElement(err);
  }

  return pass.value.length !== 0;
}

function checkPasswordConfirm(pass: HTMLInputElement, err1: HTMLElement, err2: HTMLElement, value: string): boolean {
  if ((pass && !pass.value && pass.id === 'password-confirm') || (pass.value !== value)) {
    if (!pass.value) {
      showElement(err1);
    }
    if (pass.value && pass.value !== value) {
      showElement(err2);
    }
  }

  return pass.value.length !== 0;
}

function checkName(name: HTMLInputElement, err: HTMLElement): boolean {
  const NAME_REGEXP = /^[A-Za-z]$/gi;
  const nameValid: boolean = NAME_REGEXP.test(name.value);

  if (!nameValid && name.id === 'first-name') {
    showElement(err);
  }

  if (!nameValid && name.id === 'last-name') {
    showElement(err);
  }

  return name.value.length !== 0;
}

function hideElement(element: HTMLElement): void {
  if (!classContains(element, 'display-none')) {
    element.classList.add('display-none');
  }
  if (classContains(element, 'display-none')) {
    element.classList.remove('display-block');
  }
}

function showElement(element: HTMLElement): void {
  if (!classContains(element, 'display-none')) {
    element.classList.add('display-block');
  }
  if (classContains(element, 'display-none')) {
    element.classList.remove('display-none');
  }
}

function classContains(element: HTMLElement, className: string): boolean {
  return element.classList.contains(className);
}

export {
  checkEmail,
  checkPassword,
  checkName,
  showElement,
  hideElement,
  checkPasswordConfirm
};