//toggle class active

//const navbarNav = document.querySelector
//('.navbar-nav');

//hamburger-menu di klik

//document.querySelector('#hamburger-menu').
//onclick = () => {
//  navbarNav.classList.toggle('active');
// };

//Kirim Form

const scriptURL = 'https://script.google.com/macros/s/AKfycbz2WjJidUZR0gEtebMUu0wA3ZIA5LxQR7wtDfAIRZ6c_Q_9fxdSH0z0tYQ0H8k6C70R_w/exec';
const form = document.forms['form-master-piece'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => console.log('Success!', response))
    .catch((error) => console.error('Error!', error.message));
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
