$(function() {
  function getQuote() {
    $.ajax({
      cache: false,
      headers: {
        "X-Mashape-Key": "0cvqKB8Hw3mshE9Hl8cfB0axH3S8p1kzjw6jsnIeSuOC7hLDDH",
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded"
      },
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
      success: function(response) {
        $("#quote_text").replaceWith("<span id='quote_text'>" + response.quote + "</span>");
        $("#author").replaceWith("<span id='author'>" + response.author + "</span>");
        $('#tweet').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='
        + encodeURIComponent('"' + response.quote + '" ' + response.author));    

      }
    });
  }

function checkSize(){
  if ($(".sampleClass").css("float") == "none" ){
    $("#tweet_img").replaceWith("tweet");
  }
}  
  
  checkSize();
  getQuote();

  $(document).on('click','#new',function() {
    getQuote();
  });
});

function hover(element) {
    element.setAttribute('src', 'img/twitter_color.png');
}
function unhover(element) {
    element.setAttribute('src', 'img/twitter.png');
}

