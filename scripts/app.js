'use strict';

var arts = [];
function Articles (opts) {
  for (key in opts) {
    this[key] = opts[key];
  }
};

Articles.prototype.toHtml = function() {
  // this.daysAgo = parseInt((new Date() - new Date(this.dateCreated))/60/60/24/1000) + ' days ago.';
  // this.publishStatus = this.dateCreated ? 'created ' + this.daysAgo: '(draft)';
  var $source = $('#project-template').html();
  var templateRender = Handlebars.compile($source);
  return templateRender(this);
};

// sourceData.sort(function(currentObject, nextObject) {
//   return(new Date(nextObject.dateCreated)) - (new Date(currentObject.dateCreated));
// });

sourceData.forEach(function(artObj){
  arts.push(new Articles(artObj));
});

arts.forEach(function(a) {
  $('#portfolio').append(a.toHtml());
});

sourceData.handleNav = function () {
  $('.navMain').on('click' , '.nav' , function() {
    $('.navContent').hide();
    $('#' + $(this).attr('data-content')).fadeIn(700);
  });
  $('.navMain .nav:first').click();
};

sourceData.handleNav();
