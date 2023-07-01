const bannerContainer = document.querySelector('.banner-container');
const moveButton = document.querySelector('.move-button');


moveButton.addEventListener('click', function() {
  bannerContainer.classList.toggle('move-to-top');
});
