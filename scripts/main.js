(function () {

var homeLink = document.querySelector(".link1"),
    portfolioLink = document.querySelector(".link2"),
    educationLink = document.querySelector(".link3"),
    contactLink = document.querySelector(".link4");

function moveHome() {
    window.location = "index.html";
};

function movePortfolio() {
    window.location = "portfolio.html";
};

function moveEducation() {
    window.location = "education.html";
};

function moveContact() {
    window.location = "contact.html";
};

homeLink.addEventListener("click", moveHome, false);
portfolioLink.addEventListener("click", movePortfolio, false);
educationLink.addEventListener("click", moveEducation, false);
contactLink.addEventListener("click", moveContact, false);

//-------------------------------------------------------------------------
//-------------------------------------------------------------------------
//-------------------------------------------------------------------------

var theImages = document.querySelectorAll('.schoolImage');

    function popLightbox(currentIndex, currentObject) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";

      let lightbox = document.querySelector(".lightbox");
      lightbox.style.display = "block";

      let lightboxImg = lightbox.querySelector("img");
      let lightboxClose = lightbox.querySelector(".close-lightBox");
      let lightboxDesc = lightbox.querySelector("p");

      lightboxImg.src = "images/" + currentObject.images[currentIndex];
      lightboxDesc.innerHTML = currentObject.imageDescription[currentIndex];

      lightboxClose.addEventListener("click", closeLightbox, false);
    }

    function closeLightBox(){
      document.body.style.overflow = "auto";

      let lightbox = document.querySelector(".lightbox");
      lightbox.style.display = "none";

      let lightboxImg = lightbox.querySelector("img");
      let lightboxDesc = lightbox.querySelector("p");

      lightboxImg.src = " ";
      lightboxDesc.innerHTML = " ";
    }

    theImages.forEach(function(element, index) {
      element.addEventListener('click', 'click', function() {popLightbox(index, objectIndex); }, false);
    });

})();
