
var button = document.querySelector('#callback');
var modal = document.querySelector('#call-massage');
var close = document.querySelector('#close');
var getCall = function(){
  modal.classList.add('modal_active')
};
var getClose = function(){
  modal.classList.remove('modal_active')
};
button.addEventListener('click', getCall);
close.addEventListener('click', getClose);
setInterval(getClose, 5000);