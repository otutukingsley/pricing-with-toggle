const checkBox = document.querySelector('#monthly');
const checkBoxBg = document.querySelector('#monthly-toggle');
const basic = document.querySelector('.basic-billing');
const professional = document.querySelector('.pro-billing');
const master = document.querySelector('.master-billing');

loadEvents();
function loadEvents() {
  checkBox.addEventListener('change', priceChange);
}

function priceChange() {
  if (this.checked) {
    basic.textContent = '$19.99';
    professional.textContent = '$24.99';
    master.textContent = '$39.99';
    this.parentElement.style.background = 'rgb(163, 168, 240)';
  } else {
    basic.textContent = '$199.99';
    professional.textContent = '$249.99';
    master.textContent = '$399.99';
    this.parentElement.style.background = 'hsl(234, 14%, 74%)';
  }
}
