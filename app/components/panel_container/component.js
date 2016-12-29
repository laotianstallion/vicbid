"use strict";

var ctrl = [ function () {
  var vm = this;
  vm.services = ['Plumbing', 'Siding', 'Tiles', 'Electrical', 'Roofing', 'Plumbing1', 'Siding1', 'Tiles1', 'Electrical1', 'Roofing1', 'Plumbing2', 'Siding2', 'Tiles2', 'Electrical2', 'Roofing2', ];
  return;

}];

angular.module('app.component').component('panelContainer', {
  controller: ctrl,
  templateUrl: "components/panel_container/index.html"
});
