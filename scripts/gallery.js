(function(){

var buttons = document.querySelectorAll(".galleryButton");

function imageCycle () {
  console.log("FIRED");
}

buttons.forEach (function (element){
  element.addEventListener("click", imageCycle, false);
});

})();
