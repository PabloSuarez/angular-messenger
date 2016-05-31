function ChatService($http, AppSettings) {
  'ngInject';

  let apiUrl = AppSettings.apiUrl;

  this.get = () => {
    return $http.get(`${apiUrl}/chats`);
  };

  this.save = (message) => {
    return $http.post(`${apiUrl}/chats`, {
      chats: {
        message: message
      }
    });
  };
}

export default {
  name: 'ChatService',
  fn: ChatService
};
