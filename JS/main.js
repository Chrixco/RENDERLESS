const images = document.querySelectorAll('.expanded');

images.forEach((image) => {
  image.addEventListener('click', () => {
    image.classList.toggle('expanded');
  });
});




