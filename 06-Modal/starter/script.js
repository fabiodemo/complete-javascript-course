'use strict';

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  //   console.log(`Button ${btnsOpenModal[i].textContent} Clicked!`);
  //do not use .dot for classlist, only for the selector
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//event can be called "e", "event" or "x" inside the function, and this will pass the event object as an argument
document.addEventListener('keydown', function (e) {
  //   console.log(e);
  if (e.key === 'Escape') if (!modal.classList.contains('hidden')) closeModal();
});
