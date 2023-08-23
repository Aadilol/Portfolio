const bannerContainer = document.querySelector('.banner-container');
const contentContainer = document.querySelector('.content-container');
const moveButton = document.querySelector('.move-button');
const modalLinkButton = document.getElementById('modalLinkButton');

const cards = document.querySelectorAll('.card');
const modalContainer = document.querySelector('.modal-container');
const modalContent = document.querySelector('.modal-content');

const cardLinks = [
  'https://www.etsy.com/ca/listing/1515282100/mohanlal-outta-kerala-tee?click_key=db06e83d3d788231616b0b38fdbe05c27d13b853%3A1515282100&click_sum=665306f7&ref=shop_home_active_11',
  'https://www.etsy.com/ca/listing/1541222545/straight-outta-kerala?click_key=65c23a885ce392c8b601d01d211b0a868f603ca9%3A1541222545&click_sum=ade0818c&ref=shop_home_active_4',
  'https://www.etsy.com/ca/listing/1516829858/tyler-the-creator-tee?click_key=dc4007745dfa2895147ad1277938745dcdc74b08%3A1516829858&click_sum=6c6c6a67&ref=shop_home_active_8',
  'https://www.etsy.com/ca/listing/1541222683/king-vamp?click_key=2e6e7ce4512971202b59302e03f4b4098db5ea10%3A1541222683&click_sum=f5372a46&ref=shop_home_active_3',
  'https://www.etsy.com/ca/listing/1527040298/are-you-not-afraid-of-wasting-your?click_key=0a59f80b5d7af5593b1858c4885625e693c75ae0%3A1527040298&click_sum=9eb19ded&ref=shop_home_active_6',
  'https://www.etsy.com/ca/listing/1527201736/no-drug?click_key=4d95a933e709d7097b8d35df00bcdc5752eae013%3A1527201736&click_sum=7a016294&ref=shop_home_active_1',
  'https://www.etsy.com/ca/listing/1527040900/mayakkam?click_key=503f12652a0da48f846e9bfd77dd93a9d5278d2d%3A1527040900&click_sum=31dc23c8&ref=shop_home_active_2',
  'https://www.etsy.com/ca/listing/1527201736/no-drug?click_key=ce18ce4ec0be01e23f6714bf5f456d29b57064f1%3A1527201736&click_sum=fc07d511&ref=shop_home_active_1',
  'https://www.etsy.com/ca/listing/1541221937/mahesh-uchiha?click_key=2aacb84b210c4330a333c943e1e13a712bd7972f%3A1541221937&click_sum=47087d8a&ref=shop_home_active_7',
  'https://www.etsy.com/ca/listing/1527040900/mayakkam?click_key=f3163e6aa5f5502d95d5be78f30eba60598db0a9%3A1527040900&click_sum=c67d7727&ref=shop_home_active_2',
  'https://www.etsy.com/ca/listing/1529468819/ayin?click_key=6ae82829e1afb473083cd2080a34f0b1d3cc3387%3A1529468819&click_sum=81fa4db4&ref=shop_home_active_9',
  'https://www.etsy.com/ca/listing/1541222407/bhanu-rekha?click_key=ac52f851534646e7b773db73a0d9368e63bd7197%3A1541222407&click_sum=ee18b4e7&ref=shop_home_active_5',
  'https://www.etsy.com/ca/listing/1529462033/mohanlal-cmiygl?click_key=bff86988553854c9fb3c12c7ab498dc9acf44090%3A1529462033&click_sum=1834970c&ref=shop_home_active_10'
  
  // Add more links as needed
];

moveButton.addEventListener('click', function() {
  bannerContainer.classList.toggle('move-to-top');
  contentContainer.classList.toggle('move-to-top');
  moveButton.classList.toggle('icon-down');
  moveButton.classList.toggle('icon-up');
});

document.addEventListener('DOMContentLoaded', function() {
  cards.forEach(function(card, index) {
    setTimeout(function() {
      card.classList.add('fade-in');
    }, 120 * index);
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

cards.forEach((card, index) => {
  card.addEventListener('click', function() {
    const imgUrl = this.style.backgroundImage.slice(4, -1).replace(/"/g, "");
    modalContent.style.backgroundImage = `url(${imgUrl})`;
    modalContainer.style.display = 'flex';

    // Update the link for the modal link button based on the index
    modalLinkButton.href = cardLinks[index];
    modalLinkButton.addEventListener('click', function() {
      console.log('Link button clicked');
    });
  });
});

modalContainer.addEventListener('click', function(event) {
  if (event.target === modalContainer) {
    modalContainer.style.display = 'none'; // Hide the modal when clicking outside the content
  }
});
