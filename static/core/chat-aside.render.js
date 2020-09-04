const asideData = {
  contents: {
    profileLink: 'Профиль >',
    profileLinkAddress: '../chat/user-profile.html'
  },
  inputs: [
    {
      classes: {
        input: 'mb-8 pt-8 pb-8 w-100 pl-20 search-input',
        inputWrapper: 'w-100 input-wrapper'
      },
      type: 'text',
      name: 'search',
      placeholder: 'Поиск',
      required: '',
      icon: {
        class: 'search-icon',
        src: '../../assets/icons/search.svg',
        alt: 'search icon',
      }
    }
  ],
  items: [
    {
      time: '',
      classes: {
        list: 'user-info display-flex flex-direction-row pb-8 pt-8 border-bottom w-100',
        avatar: 'avatar',
        chatInfoWrapper: 'chat-info pl-8 display-flex flex-direction-column',
        chatUserName: 'text-bold mb-4',
        chatText: 'text-secondary',
        timeWrapper: 'time',
        time: 'text-secondary',
        badge: 'badge-accent',
      },
      contents: {
        chatUserName: 'User 1',
        chatText: 'Chat text preview',
        time: '11:00',
        badge: '2',
      }
    },
    {
      time: '',
      classes: {
        list: 'user-info display-flex flex-direction-row pb-8 pt-8 border-bottom w-100',
        avatar: 'avatar',
        chatInfoWrapper: 'chat-info pl-8 display-flex flex-direction-column',
        chatUserName: 'text-bold mb-4',
        chatText: 'text-secondary',
        timeWrapper: 'time',
        time: 'text-secondary',
        badge: 'badge-accent',
      },
      contents: {
        chatUserName: 'User 2',
        chatText: 'Chat text preview',
        time: '11:00'
      }
    },
    {
      time: '',
      classes: {
        list: 'user-info display-flex flex-direction-row pb-8 pt-8 border-bottom w-100',
        avatar: 'avatar',
        chatInfoWrapper: 'chat-info pl-8 display-flex flex-direction-column',
        chatUserName: 'text-bold mb-4',
        chatText: 'text-secondary',
        timeWrapper: 'time',
        time: 'text-secondary',
        badge: 'badge-accent',
      },
      contents: {
        chatUserName: 'User 3',
        chatText: 'Chat text preview',
        time: '11:00',
        badge: '5',
      }
    }
  ],
  classes: {
    wrapper: 'aside-panel h-100 border p-8',
    asideHeader: 'aside-header display-flex flex-direction-column align-items-center justify-content-center border-bottom pb-12',
    profileLinkWrapper: 'w-100 text-right mt-16 mb-16',
    profileLink: 'text-link text-gray',
    asideBody: 'aside-body display-flex flex-direction-column align-items-center justify-content-center p-0'
  }
};

(function (){
  const compiled = _.template(window.chatAsideTemplate);
  const asideElement = document.querySelector('aside');
  asideElement.innerHTML = compiled(asideData);
})()