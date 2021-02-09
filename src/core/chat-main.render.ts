import BasePageComponent from '../components/base-page.component';
import chatMainTemplate from '../templates/chat-main.tmpl';
import chatMainEmptyTemplate from '../templates/chat-main-empty.tmpl';
import buttonTemplate from '../templates/button.tmpl';

const chatMainData = {
  contents: {
    chatUserName: 'User 3',
    chatUserActivity: 'Был 5 минут назад',
    chattingDay: 'Сегодня',
    sendButton: ' > ',
  },
  items: [
    {
      classes: {
        messageWrapper:
          'message-text-wrapper w-100 display-flex justify-content-start',
        message: 'message-text-1 p-8 pb-16 mb-8 text-left',
        messageTime: 'message-time text-secondary',
      },
      contents: {
        message: 'Lorem ipsum dolor sit amet.',
        time: '11:00',
      },
    },
    {
      classes: {
        messageWrapper:
          'message-text-wrapper w-100 display-flex justify-content-start',
        message: 'message-text-1 p-8 pb-16 mb-8 text-left',
        messageTime: 'message-time text-secondary',
      },
      contents: {
        message: 'Lorem ipsum dolor sit amet.',
        time: '11:30',
      },
    },
    {
      classes: {
        messageWrapper:
          'message-text-wrapper w-100 display-flex justify-content-start',
        message: 'message-text-1 p-8 pb-16 mb-8 text-left',
        messageTime: 'message-time text-secondary',
      },
      contents: {
        message: 'Lorem ipsum dolor sit amet.',
        time: '12:00',
      },
    },
    {
      classes: {
        messageWrapper:
          'message-text-wrapper w-100 display-flex justify-content-flex-end',
        message: 'message-text-2 p-8 pb-16 mb-8 text-left',
        messageTime: 'message-time text-primary',
      },
      contents: {
        message:
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis doloribus earum eum fugit illo, ipsum iusto magni molestiae necessitatibus nostrum praesentium, quia repudiandae voluptas!',
        time: '>> 13:00',
      },
    },
  ],
  classes: {
    messageFieldWrapper:
      'h-100 message-field p-8 border-bottom border-right border-top',
    messageField:
      'message-empty w-100 h-100 text-center display-flex flex-direction-column justify-content-start',
    chatInfoWrapper:
      'user-info-feed display-flex flex-direction-row pb-8 pt-8 mb-16 border-bottom w-100',
    avatar: 'avatar',
    chatInfo: 'chat-info pl-8 display-flex flex-direction-column text-left',
    chatUserName: 'text-bold mb-4',
    chatUserActivity: 'text-secondary',
    chatContentWrapper:
      'messages-feed display-flex flex-direction-column justify-content-flex-end h-100',
    chattingDay: 'text-secondary mb-12',
    messageWrapper:
      'message-text-wrapper w-100 display-flex justify-content-start',
    message: 'message-text-1 p-8 pb-16 mb-8 text-left',
    messageTime: 'message-time text-secondary',
    actionWrapper:
      'message-type display-flex flex-direction-row justify-content-between align-items-center p-12 border-top',
    sendButton:
      'send-button display-flex align-items-center justify-content-center',
  },
  settingsImg: {
    class: 'settings-icon p-4',
    src: '../../assets/icons/open-menu.svg',
    alt: 'feed settings icon',
  },
  actionImg: {
    class: 'icon',
    src: '../../assets/icons/file-upload.svg',
    alt: 'send file',
  },
  actionInput: {
    class: 'input pl-12 pr-12',
    id: 'message-input',
    type: 'text',
    placeholder: 'Сообщение',
  },
};

const chatMainEmptyData = {
  classes: {
    messageFieldWrapper:
      'h-100 message-field p-8 border-bottom border-right border-top',
    messageField:
      'message-empty w-100 h-100 text-center display-flex flex-direction-column justify-content-center',
    text: 'text-gray',
  },
  contents: {
    text: 'Выберите чат чтобы отправить сообщение',
  },
};

const btnData = {
  classes: 'send-button display-flex align-items-center justify-content-center',
  label: ' > ',
  rounded: true,
};

const chatSelected = false;
const chatMainEmpty = new BasePageComponent(
  chatMainEmptyTemplate,
  chatMainEmptyData
);
const chatMain = new BasePageComponent(chatMainTemplate, chatMainData);
const btn = new BasePageComponent(buttonTemplate, btnData);


if (chatSelected) {
  chatMain.render();
} else {
  chatMainEmpty.render();
}

btn.render('.message-type > input.input');

const input: HTMLInputElement = document.querySelector('#message-input');
const button: HTMLElement = document.querySelector(
  '.message-type > .send-button'
);
button.addEventListener('click', function () {
  const messageValid = checkMessage(input);

  if (messageValid) {
    console.log('Не допустимый символ');
  }
});

function checkMessage(input: HTMLInputElement): boolean {
  const MESSAGE_REGEXP = /^\s*$/gi;

  return MESSAGE_REGEXP.test(input.value);
}
