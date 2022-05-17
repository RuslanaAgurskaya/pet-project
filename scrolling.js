const windowInnerHeight = window.innerHeight
let upButton = document.querySelector('.up-button');
let footerpx = document.querySelector('footer').offsetHeight;
let pagepx = document.querySelector('html').offsetHeight;
let footerpeak = windowInnerHeight - footerpx;
console.log(windowInnerHeight);
console.log(footerpx);
console.log(footerpeak);

window.onscroll = function () {
  if ((window.pageYOffset > 200)&&(window.pageYOffset < (footerpeak + 720))) {
    upButton.classList.add('shown'); }
  else {
      upButton.classList.remove('shown');}
};

upButton.onclick = function () {
  window.scrollTo(0, 0);
};
