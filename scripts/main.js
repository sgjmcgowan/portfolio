(function () {

var theLinks = document.querySelectorAll(".link");

function movePage () {
  if (this.id == "contact") {
    window.location = "contactform.php";
  } else {
    window.location = [this.id] + ".html";
  }
}

theLinks.forEach (function (element) {
  element.addEventListener('click', movePage, false);
} )

})();
