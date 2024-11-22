

document.addEventListener('DOMContentLoaded', () => {
  // Get the cart count from localStorage or set to 0 if it doesn't exist
  let cartCount = localStorage.getItem('cartCount') ? parseInt(localStorage.getItem('cartCount')) : 0;

  // Update the cart count display
  updateCartCount();

  // Query all buttons with class 'atc'
  const atcbuttons = document.querySelectorAll('.atc');

  // Add a click event listener to each button
  atcbuttons.forEach(button => {
      button.addEventListener('click', () => {
        const quantityInputValue = document.getElementById('quantity1').value;
        const quantity = parseInt(quantityInputValue, 10); // Parse it to an integer

        if (!isNaN(quantity) && quantity > 0) {
            cartCount += quantity;  // Add the quantity to the cart count
            localStorage.setItem('cartCount', cartCount);  // Store the updated count in localStorage
            updateCartCount(); // Update the cart display
        }
      });
  });


  function updateCartCount() {
      const cartCountElement = document.getElementById('cart-count');
      if (cartCount > 0) {
          cartCountElement.textContent = cartCount;
          cartCountElement.style.display = 'inline'; // Show the count when > 0
      } else {
          cartCountElement.style.display = 'none'; // Hide the count if 0
      }
  }
});



const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}


let cube = document.querySelector(".image-cube");
let btnNext = document.getElementById("next");
let btnPrev = document.getElementById("prev");

let pos = 0;

btnNext.addEventListener("click", () => {
  pos += 90;
  cube.style.transform = `rotateY(${pos}deg)`;
});
btnPrev.addEventListener("click", () => {
  pos -= 90;
  cube.style.transform = `rotateY(${pos}deg)`;
});


function newsLetterSubmit() {
  alert('Thank you for signing up!');
  document.getElementById("emailInput").value = '';

}



