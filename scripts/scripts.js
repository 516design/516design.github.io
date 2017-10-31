// // Get the modal
// var modalSticker = document.getElementById('modal--sticker');
//
// // Get the button that opens the modal
// var btnSticker = document.getElementById("button--sticker");
//
// // Get the <span> element that closes the modal
// var spanSticker = document.getElementsByClassName("modal-sticker-close")[0];
//
// // When the user clicks on the button, open the modal
// btnSticker.onclick = function() { modalSticker.style.display = "block"; }
//
// // When the user clicks on <span> (x), close the modal
// spanSticker.onclick = function() { modalSticker.style.display = "none"; }
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modalSticker) {
//       modalSticker.style.display = "none";
//   }
// }
//
// $(function() { $('#modal-content--sticker').load('sticker.html'); });


//paddles modal
var modalPaddle = document.getElementById('modal--paddle');
var btnPaddle = document.getElementById("button--paddle");
var spanPaddle = document.getElementById("close--paddle");
btnPaddle.onclick = function() {
  modalPaddle.style.display = "block";
  $('body').addClass('prevent-scrolling');
}
spanPaddle.onclick = function() {
  modalPaddle.style.display = "none";
  $('body.prevent-scrolling').removeClass('prevent-scrolling');
}
modalPaddle.onclick = function(event) {
  if (event.target == modalPaddle) {
    modalPaddle.style.display = "none";
    $('body.prevent-scrolling').removeClass('prevent-scrolling');
  }
}
$(function() { $('#modal-content--paddle').load('templates/shop/paddle.html'); });

//love all modal
var modalLoveAll = document.getElementById('modal--love-all');
var btnLoveAll = document.getElementById("button--love-all");
var spanLoveAll = document.getElementById("close--love-all");
btnLoveAll.onclick = function() {
  modalLoveAll.style.display = "block";
  $('body').addClass('prevent-scrolling');
}
spanLoveAll.onclick = function() {
  modalLoveAll.style.display = "none";
  $('body.prevent-scrolling').removeClass('prevent-scrolling');
}
modalLoveAll.onclick = function(event) {
  if (event.target == modalLoveAll) {
    modalLoveAll.style.display = "none";
    $('body.prevent-scrolling').removeClass('prevent-scrolling');
  }
}
$(function() { $('#modal-content--love-all').load('templates/shop/love-all.html'); });
//
// //new
// $('.button').click(function(){
//   var buttonId = $(this).attr('id');
//   $('#modal-container').removeAttr('class').addClass(buttonId);
//   $('body').addClass('modal-active');
// })
//
// $('#modal-container').click(function(){
//   $(this).addClass('out');
//   $('body').removeClass('modal-active');
// });
