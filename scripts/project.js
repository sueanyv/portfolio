function Article(opts) {
  for (var keys in opts) {
    this[keys] = opts[keys];
  }
}

Article.allArticles = [];

Article.prototype.toHtml = function(scriptTemplateId) {
  var template = Handlebars.compile($(scriptTemplateId).text());
  this.daysAgo = parseInt((new Date() - new Date(this.publishedOn)) / 60 / 60 / 24 / 1000);
  this.publishStatus = this.publishedOn ? 'published ' + this.daysAgo + ' days ago' : '(draft)';
  this.body = marked(this.body);
  return template(this);
};
Article.loadAll = function(inputData) {
  inputData.sort(function(a, b) {
      return (new Date(b.publishedOn)) - (new Date(a.publishedOn));
    })
    .forEach(function(ele) {
      Article.allArticles.push(new Article(ele));
    });
};
Article.fetchAll = function() {
  if (localStorage.blogArticles) {
    var parseData = JSON.parse(localStorage.blogArticles)
    Article.loadAll(parseData)
    articleView.renderIndexPage();
    /* When our data is already in localStorage:
    1. We can process and load it,
    2. Then we can render the index page.  */
  } else {
    $.getJSON('data/blogArticles.json', function(data) {
      var storedData = JSON.stringify(data);

      localStorage.setItem('blogArticles', storedData);
      Article.loadAll(storedData)
      articleView.renderIndexPage();
