const bannerContainer = document.querySelector('.banner-container');
const moveButton = document.querySelector('.move-button');

const cards = document.querySelectorAll('.card');
const modalContainer = document.querySelector('.modal-container');
const modalContent = document.querySelector('.modal-content');

moveButton.addEventListener('click', function() {
  bannerContainer.classList.toggle('move-to-top');
  moveButton.classList.toggle('icon-down');
  moveButton.classList.toggle('icon-up');
  contentContainer.classList.toggle('move-to-top');
});

document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');
  
  // Add the fade-in class to each card after a small delay
  cards.forEach(function(card, index) {
    setTimeout(function() {
      card.classList.add('fade-in');
    }, 100 * index); // Adjust the delay as desired
  });
});

cards.forEach((card) => {
  card.addEventListener('click', function() {
    const cardContent = card.innerHTML; // Get the HTML content of the clicked card
    const backgroundImage = card.style.backgroundImage; // Get the background image of the clicked card
    modalContent.innerHTML = cardContent; // Update the modal content with the card content
    modalContent.style.backgroundImage = backgroundImage; // Set the background image of the modal content
    modalContainer.style.display = 'flex'; // Show the modal
  });
});

modalContainer.addEventListener('click', function(event) {
  if (event.target === modalContainer) {
    modalContainer.style.display = 'none'; // Hide the modal when clicking outside the content
  }
});
