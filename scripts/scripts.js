// Get the modal
var modalVinyl = document.getElementById('modal--vinyl');
var modalSticker = document.getElementById('modal--sticker');

// Get the button that opens the modal
var btnVinyl = document.getElementById("button--vinyl");
var btnSticker = document.getElementById("button--sticker");

// Get the <span> element that closes the modal
var spanVinyl = document.getElementsByClassName("modal-vinyl-close")[0];
var spanSticker = document.getElementsByClassName("modal-sticker-close")[0];

// When the user clicks on the button, open the modal
btnVinyl.onclick = function() { modalVinyl.style.display = "block"; }
btnSticker.onclick = function() { modalSticker.style.display = "block"; }

// When the user clicks on <span> (x), close the modal
spanVinyl.onclick = function() { modalVinyl.style.display = "none"; }
spanSticker.onclick = function() { modalSticker.style.display = "none"; }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalVinyl) {
      modalVinyl.style.display = "none";
  }
}

window.onclick = function(event) {
  if (event.target == modalSticker) {
      modalSticker.style.display = "none";
  }
}

$(function() { $('#modal-content--vinyl').load('vinyl.html'); });
$(function() { $('#modal-content--sticker').load('sticker.html'); });

var modalPaddle = document.getElementById('modal--paddle');
var btnPaddle = document.getElementById("button--paddle");
var spanPaddle = document.getElementById("close--paddle");
btnPaddle.onclick = function() { modalPaddle.style.display = "block"; }
spanPaddle.onclick = function() { modalPaddle.style.display = "none"; }
window.onclick = function(event) {
  if (event.target == modalPaddle) {
    modalPaddle.style.display = "none";
  }
}
$(function() { $('#modal-content--paddle').load('templates/shop/paddle.html'); });
