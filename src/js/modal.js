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
});