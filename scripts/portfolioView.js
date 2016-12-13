var portfolioView = {};
portfolioView.renderIndexPage = function() {
  projectData.forEach(function(projectObject) {
    projects.push(new Project(projectObject));
  });
  projects.forEach(function(NewProjectObject) {
    $('#projects').append(NewProjectObject.toHtml());
  });
};
portfolioView.handleMainNav = function() {
  $('.topnav').on('click', '.tab', function(e) {
    $('.tab-content').hide();
    $('#' + $(this).data('content')).fadeIn();
  });
  $('.topnav .tab:first').click();
};
portfolioView.handleMainNav();
portfolioView.renderIndexPage();
