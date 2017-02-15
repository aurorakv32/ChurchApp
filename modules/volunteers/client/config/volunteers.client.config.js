(function () {
  'use strict';

  angular
    .module('volunteers')
    .run(menuConfig);

  menuConfig.$inject = ['Menus'];

  function menuConfig(Menus) {
    // Set top bar menu items
    Menus.addMenuItem('topbar', {
      title: 'Events',
      state: 'volunteers',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'volunteers', {
      title: 'List Events',
      state: 'volunteers.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'volunteers', {
      title: 'Create Event',
      state: 'volunteers.create',
      roles: ['user']
    });
  }
}());
