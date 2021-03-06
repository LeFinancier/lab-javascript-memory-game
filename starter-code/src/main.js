var cards = [
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' },
  { name: 'aquaman',         img: 'aquaman.jpg' },
  { name: 'batman',          img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four',  img: 'fantastic-four.jpg' },
  { name: 'flash',           img: 'flash.jpg' },
  { name: 'green arrow',     img: 'green-arrow.jpg' },
  { name: 'green lantern',   img: 'green-lantern.jpg' },
  { name: 'ironman',         img: 'ironman.jpg' },
  { name: 'spiderman',       img: 'spiderman.jpg' },
  { name: 'superman',        img: 'superman.jpg' },
  { name: 'the avengers',    img: 'the-avengers.jpg' },
  { name: 'thor',            img: 'thor.jpg' }
];

var timesClick = 0;
var card1 = '';
var card2 = '';

$(document).ready(function(){
  var memoryGame = new MemoryGame(cards);
  var html = '';
  memoryGame.cards.forEach(function (pic) {
    html += '<div class="card" data-card-name="'+ pic.name +'">';
    html += '  <div class="back" name="'+ pic.img +'"></div>';
    html += '  <div class="front" style="background: url(img/'+ pic.img +') no-repeat"></div>';
    html += '</div>';
  });

  // Add all the div's to the HTML
  $('#memory_board').html(html);

  // Bind the click event of each element to a function
  

  $('.back').click(function (event) {
    timesClick = timesClick + 1;

    if (timesClick === 1) {
  
    $(this).toggleClass('back');
    $(this).toggleClass('front');

    $(this).siblings().toggleClass('back');
    $(this).siblings().toggleClass('front');

    card1 = $(this).attr('name');
    card1 = card1.substr(0, card1.indexOf('.'))
  }

  else if (timesClick === 2) {
    $(this).toggleClass('back');
    $(this).toggleClass('front');

    $(this).siblings().toggleClass('back');
    $(this).siblings().toggleClass('front');

    card2 = $(this).attr('name');
    card2 = card2.substr(0, card2.indexOf('.'))
  }

  else if (timesClick === 3) {
    timesClick = 0;
    memoryGame.checkIfPair(card1,card2);
    if (memoryGame.checkIfPair(card1,card2) === true) {
      $("div[data-card-name|='green lantern']").remove();
    }
  }
  });

  
});


