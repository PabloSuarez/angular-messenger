function Sidebar() {

  return {
    restrict: 'E',
    templateUrl: 'directives/messenger/sidebar.html',
    scope: {
      data: '@'
    }
  };
}

export default {
  name: 'sidebar',
  fn: Sidebar
};
