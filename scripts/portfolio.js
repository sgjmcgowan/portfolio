(function(){

  function fetchAllPieces() {

    let url = './admin/scripts/functions.php?getAllPieces=true';

      fetch(url)
        .then((resp) => resp.json())
        .then((data) => { loadAllPieces(data); })
        .catch(function(error) {
          console.log(error);
        });
    }

  function loadAllPieces(data) {

      let artHolder = document.querySelector('.portfolioPreview');

      data.forEach(art => {
      let docFrag = `<img src="images/previews/${art.img_preview_small}" id="${art.img_id}" alt="Porfolio preview image" class="previewImage hiddenLarge">
                   <img src="images/previews/${art.img_preview}" id="${art.img_id}" alt="Porfolio preview image small" class="previewImage hiddenSmall showLarge">`
      artHolder.innerHTML += docFrag;

    });

      artHolder.querySelectorAll('img').forEach((art) => art.addEventListener("click", fetchSinglePiece, false));
  }

  function fetchSinglePiece() {

      let url = "./admin/scripts/functions.php?getSingleImage=" + this.id;

        fetch(url)
          .then((resp) => resp.json())
          .then((data) => { portfolioLightbox(data); })
          .catch(function(error){
            console.log(error);
          });

  }

  function portfolioLightbox(data) {

      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";

      let lightbox = document.querySelector(".lightbox");
      lightbox.style.display = "block";

      let lightboxClose = lightbox.querySelector("span");
      lightboxClose.addEventListener('click', closeLightbox, false);

      let piece = lightbox.querySelector("img");
      let name = lightbox.querySelector("h5");
      let desc = lightbox.querySelector("h6");

      piece.src = "images/portfolio/" + data.img_path;
      name.innerHTML += data.img_name;
      desc.innerHTML += data.img_desc;

  }

  function closeLightbox() {

    document.body.style.overflow = "auto";

    let lightbox = document.querySelector('.lightbox');
    lightbox.style.display = 'none';

    let lightboxImg = lightbox.querySelector("img");
    let lightboxClose = lightbox.querySelector(".close-lightbox");
    let lightboxDesc = lightbox.querySelector(".img-desc");
    let lightboxStory = lightbox.querySelector("h6");

    lightboxImg.src = " ";
    lightboxDesc.innerHTML = " ";
    lightboxStory.innerHTML = " ";
  }

window.addEventListener("load", fetchAllPieces, false);

})();
