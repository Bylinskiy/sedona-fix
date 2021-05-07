
var form = document.querySelector('.form');
var toggle = document.querySelector('.booking__toggle');

form.classList.remove('form--nojs');

toggle.addEventListener('click', function () {
  if (form.classList.contains('form--closed')) {
    form.classList.remove('form--closed');
    form.classList.add('form--opened');
  } else {
    form.classList.add('form--closed');
    form.classList.remove('form--opened');
  }
});
