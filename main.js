const proxyurl = "https://cors-anywhere.herokuapp.com/";
const api = 'https://api.myglamapp.pl/api/categories?language=EN';

$.getJSON(proxyurl + api, function (result) {
    console.log(result);
    var text = `<div class="container"><div class="row">`;
    for (let i = 0; i < result.data.length; i++) {
        text += `<div class="col-md-4"><div class="card">`;
        text += '<p>' + `<img src= 'http://` + result.data[i].imagePath + `'>` + '</p>';
        text += '<p>' + result.data[i].label + '<br>' + result.data[i].description + '<br>' + result.data[i].id + '</p>';
        text += `</div></div>`;
        document.getElementById("msg").innerHTML = text;
    }
    text += `</div></div>`;
});


/*
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="Card1">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="Card2">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="Card3">
    </div>
     <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="Card4">
    </div>
     <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="Card5">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
*/



$.getJSON(proxyurl + api, function (res) {
    console.log(res);
    var text = ``;

    text += `<div class="carousel-item col-xs-4 active"><div class="card"><img src='http://` + res.data[0].imagePath + `'class="d-block w-100 img-responsive" alt="Card1"><br>`
        + res.data[0].label + '<br>' + res.data[0].description + '<br>' + res.data[0].id + `</div></div>`;

    text += `<div class="carousel-item col-xs-4"><div class="card"><img src='http://` + res.data[1].imagePath + `'class="d-block w-100 img-responsive" alt="Card2"><br>`
        + res.data[1].label + '<br>' + res.data[1].description + '<br>' + res.data[1].id + `</div></div>`;

    text += `<div class="carousel-item col-xs-4"><div class="card"><img src='http://` + res.data[2].imagePath + `'class="d-block w-100 img-responsive" alt="Card3"><br>`
        + res.data[2].label + '<br>' + res.data[2].description + '<br>' + res.data[2].id + `</div></div>`;

    text += `<div class="carousel-item col-xs-4"><div class="card"><img src='http://` + res.data[3].imagePath + `'class="d-block w-100 img-responsive" alt="Card4"><br>`
        + res.data[3].label + '<br>' + res.data[3].description + '<br>' + res.data[3].id + `</div></div>`;

    text += `<div class="carousel-item col-xs-4"><div class="card"><img src='http://` + res.data[4].imagePath + `'class="d-block w-100 img-responsive" alt="Card5"><br>`
        + res.data[4].label + '<br>' + res.data[4].description + '<br>' + res.data[4].id + `</div></div>`;

    showCard.innerHTML = text;
});



/*
git clone https://github.com/Rob--W/cors-anywhere.git
cd cors-anywhere/
npm install
heroku create
git push heroku master
*/

// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
    interval: false
  });
  
  // for every slide in carousel, copy the next slide's item in the slide.
  // Do the same for the next, next item.
  $('.multi-item-carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    if (next.next().length>0) {
      next.next().children(':first-child').clone().appendTo($(this));
    } else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
  });


