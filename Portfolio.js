var Portproj = [];

function Project(opts) {
  for (var keys in opts) {
    this[keys] = opts[keys];
  }
};






Project.fetchAll = function() {
  if (localStorage.portfolio) {
    Project.loadAll(JSON.parse(localStorage.portfolio));
    projectView.renderIndexPage();

  } else {
    $.getJSON('data/portfolioData.json', function(data) {
      localStorage.portfolio = JSON.stringify(data);
      Porject.loadAll(JSON.parse(localStorage.portfolio));
      projectView.renderIndexPage(); {}
    });
  }
};

projectData.handleNav = function () {
  $('.navMain').on('click' , '.nav' , function() {
    $('.navContent').hide();
    $('#' + $(this).attr('tab-content')).fadeIn(700);
  });
  $('.navMain .nav:first').click();
};

projectData.handleNav();
Projects.fetchAll();
