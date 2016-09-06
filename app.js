
  var things;
  var search = function(query){
    console.log(query);
    if(!query){
      query = "sheep";
    }
    $('.giphyPlacement').empty();
    $.ajax({
      method: "GET",
      url: "http://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=dc6zaTOxFJmzC"
    }).then(function(res){
      console.log(res.data);
      things = res.data;
      $('.giphyPlacement').append(function(){
        return things.map(function(a){
          return '<div><img src=' + a.images.original.url +'></div>';
        })
      });
    });
  };
  search();
