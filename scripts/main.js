(function () {

var theLinks = document.querySelectorAll(".link");

function movePage () {
  window.location = [this.id] + ".html";
}

theLinks.forEach (function (element) {
  element.addEventListener('click', movePage, false);
} )

})();
