(function () {

var windsor = document.querySelector(".windsorContainer");
var fanshawe = document.querySelector(".fanshaweContainer");

function popLightboxWindsor() {

  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";

  let lightbox = document.querySelector(".lightbox");
  lightbox.style.display = "block";

  let lightboxImg = lightbox.querySelector("img");
  let lightboxClose = lightbox.querySelector(".close-lightbox");
  let lightboxDesc = lightbox.querySelector(".img-desc");
  let lightboxStory = lightbox.querySelector(".lbStory");

    lightboxImg.src = "images/uwindsor_logo.png";
    lightboxDesc.innerHTML = "ENGLISH and Creative Writing";
    lightboxStory.innerHTML = "In-between poetry nights, writing competitions, and running the English Undergraduate Student Association, I learned to analyze the artifacts of popular culture and find where and how a work comes to resonate with its audience. I had the room to experiment and learn how an audience’s ingrained learning morphs perspective and creates a more complete meaning the designer or artist may never have intended."

  lightboxClose.addEventListener('click', closeLightboxWindsor, false);
}

function closeLightboxWindsor () {

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

function popLightboxWindsor() {

  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";

  let lightbox = document.querySelector(".lightbox");
  lightbox.style.display = "block";

  let lightboxImg = lightbox.querySelector("img");
  let lightboxClose = lightbox.querySelector(".close-lightbox");
  let lightboxDesc = lightbox.querySelector(".img-desc");
  let lightboxStory = lightbox.querySelector(".lbStory");

    lightboxImg.src = "images/uwindsor_logo.png";
    lightboxDesc.innerHTML = "ENGLISH and Creative Writing";
    lightboxStory.innerHTML = "In-between poetry nights, writing competitions, and running the English Undergraduate Student Association, I learned to analyze the artifacts of popular culture and find where and how a work comes to resonate with its audience. I had the room to experiment and learn how an audience’s ingrained learning morphs perspective and creates a more complete meaning the designer or artist may never have intended."

  lightboxClose.addEventListener('click', closeLightboxWindsor, false);
}

function closeLightboxWindsor () {

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

function popLightboxFanshawe() {

  window.scrollTo(0, 0);
  document.body.style.overflow = "hidden";

  let lightbox = document.querySelector(".lightbox");
  lightbox.style.display = "block";

  let lightboxImg = lightbox.querySelector("img");
  let lightboxClose = lightbox.querySelector(".close-lightbox");
  let lightboxDesc = lightbox.querySelector(".img-desc");
  let lightboxStory = lightbox.querySelector(".lbStory");

    lightboxImg.src = "images/fanshawe_logo.png";
    lightboxDesc.innerHTML = "Interactive Media Design";
    lightboxStory.innerHTML = "I attended Fanshawe to cement my more theoretical learning with a wide variety of skills including web coding, image design, marketing, UI/UX design, and motion design. My natural curiosities led me to explore more and more of visual design, and how its impact extends throughout the experience of the client or end-user. Designing a good experience is my passion."

  lightboxClose.addEventListener('click', closeLightboxFanshawe, false);
}

function closeLightboxFanshawe () {

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

windsor.addEventListener("click", popLightboxWindsor, false);
fanshawe.addEventListener("click", popLightboxFanshawe, false);

})();
