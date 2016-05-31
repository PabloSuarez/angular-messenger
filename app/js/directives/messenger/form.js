function ChatForm() {

  return {
    restrict: 'E',
    templateUrl: 'directives/messenger/form.html',
    scope: {
      data: '@'
    }
  };
}

export default {
  name: 'chatForm',
  fn: ChatForm
};
