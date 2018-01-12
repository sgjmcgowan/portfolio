(function(){

  function fetchAllPieces() {
    console.log("Fired Fetch");
    let url = './admin/scripts/functions.php?getAllPieces=true';

      fetch(url)
        .then((resp) => resp.json())
        .then((data) => { loadAllPieces(data); })
        .catch(function(error) {
          console.log(error);
        });
    }

  function loadAllPieces(data) {

      console.log("Fired Load");

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

      let piece = lightbox.querySelector(".lightbox-image");
      let name = lightbox.querySelector(".img-descButton");
      let desc = lightbox.querySelector(".lbstory");
      let lightboxClose = lightbox.querySelector(".close-lightbox");

      piece.src = "images/portfolio/" + data.img_path;
      name.innerHTML += data.img_name;
      desc.innerHTML += data.img_desc;

      lightboxClose.addEventListener('click', closeLightbox, false);
  }

  function closeLightbox() {

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

window.addEventListener("load", fetchAllPieces, false);

})();
