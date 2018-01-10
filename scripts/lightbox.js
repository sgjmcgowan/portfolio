(function () {

var schoolImage = document.querySelectorAll(".lightboxImage");

function popLightbox(currentObject, currentIndex) {
  console.log("Fired");

  let objectIndex = dynamicContent[this.id];

  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";

  let lightbox = document.querySelector(".lightbox");
  lightbox.style.display = "block";

  let lightboxImg = lightbox.querySelector("img");
  let lightboxClose = lightbox.querySelector(".close-lightbox");
  let lightboxDesc = lightbox.querySelector(".img-desc");
  let lightboxStory = lightbox.querySelector(".lbStory");

  lightboxImg.src = "images/uwindsor_logo.png";
  lightboxDesc.innerHTML = "ENGLISH and CREATIVE WRITING";
  lightboxStory.innerHTML = "In-between poetry nights, writing competitions, and running the English Undergraduate Student Association, I learned to analyze the artifacts of popular culture and find where and how a work comes to resonate with its audience. I had the room to experiment and learn how an audience’s ingrained learning morphs perspective and creates a more complete meaning the designer or artist may never have intended."

  // lightboxImg.src = "images/" + currentObject.images[currentIndex];
  // lightboxDesc.innerHTML = currentObject.imageDescription[currentIndex];
  // lightboxStory.innerHTML = currentObject.imageStory[currentIndex];

  lightboxClose.addEventListener('click', closeLightbox, false);
}

function closeLightbox () {

  document.body.style.overflow = "auto";

  let lightbox = document.querySelector('.lightbox');
  lightbox.style.display = 'none';

  let lightboxImg = lightbox.querySelector("img");
  let lightboxClose = lightbox.querySelector(".close-lightbox");
  let lightboxDesc = lightbox.querySelector(".img-desc");
  let lightboxStory = lightbox.querySelector(".lbStory");

  lightboxImg.src = " ";
  lightboxDesc.innerHTML = " ";
}

schoolImage.forEach(function(element, index) {
  element.dataset.index = index;
  element.addEventListener('click', popLightbox, false);
})



})();
