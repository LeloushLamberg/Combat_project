
// start modal call
$(document).ready (function(){
  var button = $('#callback');
  var modal = $('#call-massage');
  var close = $('#close');
  var getCall = function(){
    modal.addClass('modal_active')
  };
  var getClose = function(){
    modal.removeClass('modal_active')
  };
  button.on('click', getCall);
  close.on('click', getClose);
  setInterval(getClose, 5000);
  // end modal call

  // start sliders
  $('.portfolio-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    prevArrow: $('.arrow__left'),
    nextArrow: $('.arrow__right'),
    responsive: [
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  });
  // end sliders
});
// start wow
new WOW().init();
  

