const btn = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

btn.addEventListener('click', function () {
  //console.log('working');
  links.classList.toggle('show-links');
});
