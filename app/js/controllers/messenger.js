function MessengerCtrl(ChatService) {
  'ngInject';

  // ViewModel
  this.init = () => {
    this.totalOnline = 13;
    this.newMessage = '';
  };

  this.init();


  // ACTIONS
  this.send = () => {
    ChatService
      .save(this.newMessage || 'rrr rrr rrrr')
      .then(() => this.newMessage = '');
  };

}

export default {
  name: 'MessengerCtrl',
  fn: MessengerCtrl
};
