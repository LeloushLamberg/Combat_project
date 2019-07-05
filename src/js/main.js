
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
  // start validation form
  $("#brif-form").validate({
    rules: {
      username: {
        required: true,
        minlength: 2
      },
      userphone: {
        required: true,
        minlength: 10
      }
    },
    messages: {
      username: {
        required: "Введите своё имя",
        minlength: "Введите полное имя"
      },
      userghone: {
        required: "Введите свой телефон",
        minlength: "Мало цифр. Добавьте код города"
      }
    }
  
  });
  // end validation form
});

// start wow
new WOW().init();

  

