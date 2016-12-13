var projects = [];

function Project(opts) {
  for (key in opts) {
    this[key] = opts[key];
  }
};

Project.prototype.toHtml = function() {
  var $source = $('#portfolio-template').html();
  var templateRender = Handlebars.compile($source);
  return templateRender(this);
};




Project.fetchAll = function() {
  if (localStorage.project) {
    articleView.renderIndexPage();
  } else {
    $.getJSON('data/portfolioData.json', function(data) {
      localStorage.project = JSON.stringify(data);
      Article.loadAll(JSON.parse(localStorage.project));
      articleView.renderIndexPage();
    })
  }
};
