const userProfileData = {
  contents: {
    fullName: 'User Full Name',
    actionChange: 'Изменить данные',
    actionExit: 'Выход',
  },
  items: [
    {
      wrapperClass: 'general-info-inner display-flex flex-direction-row align-items-center justify-content-between pt-16 pb-12 border-bottom',
      titleClass: 'text-bold',
      mailClass: 'text-secondary',
      title: 'Почта',
      mail: 'user@mail.ru'
    },
    {
      wrapperClass: 'general-info-inner display-flex flex-direction-row align-items-center justify-content-between pt-16 pb-12',
      titleClass: 'text-bold',
      mailClass: 'text-secondary',
      title: 'Логин',
      mail: 'Username'
    }
  ],
  classes: {
    wrapper: 'user-profile w-100 h-100 display-flex flex-direction-column align-items-center justify-content-center',
    avatarWrapper: 'short-info w-50 display-flex flex-direction-column align-items-center',
    avatar: 'avatar mb-16',
    fullName: 'full-name text-bold',
    generalInfoWrapper: 'general-info w-50',
    actionWrapper: 'general-info w-50 actions display-flex flex-direction-column',
    button: 'text-primary text-link border-bottom pt-16 pb-12',
    link: 'text-danger text-link pt-16 pb-12'
  }
};
const compiled = _.template(window['userProfileTemplate']);
const mainElement = document.querySelector('main');
mainElement.innerHTML = compiled(userProfileData);