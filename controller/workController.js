(function(module) {
  var workController = {};

  workController.reveal = function() {
    $('.tab-content').hide();
    $('#work').fadeIn();
  };

  module.workController = workController;
})(window);
