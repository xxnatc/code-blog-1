$('#article-preview').on('click', function(event) {
  event.preventDefault();

  var prop = {};

  // read values from form
  prop.title = $('#article-title').val();
  prop.author = $('#article-author').val();
  prop.authorUrl = $('#article-author-url').val();
  prop.category = $('#article-category').val();
  prop.publishedOn = new Date();

  $articleBody = $('#article-body').val();  
  prop.body = marked($articleBody);

  // display preview on page
  var newArticle = new Article(prop);
  newArticle.toHTML();

  // write JSON string
  $('#article-json').val(JSON.stringify(prop));
  
});

