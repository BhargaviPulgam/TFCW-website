// slider code
  const swiper = new Swiper('.home-slider', {
    loop: true,
    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  const aboutSwiper = new Swiper('.about-slider', {
    loop: true,
    autoplay: {
      delay: 6000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });




let menu = document.querySelector('#menu');
let navMenu = document.querySelector('.navMenu');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navMenu.classList.toggle('active')
}

// suggestion box

document.addEventListener('DOMContentLoaded', () => {
  const suggestionForm = document.querySelector('.suggestion-box form');
  const suggestionInput = document.querySelector('#suggestion-input');
  const confirmationMessage = document.querySelector('#confirmation-message');

  if (suggestionForm && suggestionInput && confirmationMessage) {
    suggestionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const suggestion = suggestionInput.value;
      console.log(`Suggestion: ${suggestion}`)
      suggestionInput.value = '';
      confirmationMessage.textContent = 'Thank you for your suggestion!';
    });
  }
});

// recipecollection code
const recipes = document.querySelectorAll('.recipe');
recipes.forEach(recipe => {
  const link = recipe.querySelector('.recipe-link');
  const img = recipe.querySelector('.recipe-link img');
  recipe.addEventListener('dblclick', (event) => {
    event.preventDefault();
    const file = recipe.dataset.file;
    const folder = recipe.dataset.folder;
    window.location.href = `${folder}/${file}`;
  });
  link.addEventListener('click', (event) => {
    event.stopPropagation();
  });
  img.addEventListener('click', (event) => {
    event.stopPropagation();
    const file = recipe.dataset.file;
    const folder = recipe.dataset.folder;
    window.location.href = `${folder}/${file}`;
  });
});











