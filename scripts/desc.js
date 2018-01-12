(function () {

var descButton = document.querySelector(".descButton"),
    desc = document.querySelector(".personalDesc");

function revealDesc() {
  desc.classList.toggle("show");
};

descButton.addEventListener("click", revealDesc, false);

setTimeout(function(){
  document.getElementById('underNav').className = " ";
}, 300);

})();
