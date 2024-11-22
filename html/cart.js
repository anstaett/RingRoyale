let cart = [];

console.log("Working")


function addToCart(productName, price, quantityInputId, sizeSelectId, imageUrl) {
    console.log("Adding to cart:", productName, price, quantityInputId, sizeSelectId, imageUrl);

    const quantityInput = document.getElementById(quantityInputId);
    const sizeSelect = document.getElementById(sizeSelectId);
    
    if (quantityInput && sizeSelect) {
        const quantity = parseInt(quantityInput.value, 10);

        const existingItem = cart.find(item => item.name === productName && item.size === sizeSelect.value);

        if (existingItem) {
            existingItem.quantity += quantity;
            console.log("Updated item quantity:", existingItem);
        } else {
            const item = {
                name: productName,
                price: price,
                quantity: quantity,
                size: sizeSelect.value,
                image: imageUrl
            };
            cart.push(item);
            console.log("Item added to cart:", item);
        }

        updateCart();
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}


function updateCart() {
    const cartItemsElement = document.getElementById("cart-items");
    const cartTotalElement = document.getElementById("cart-total");

    console.log(cart.length)

    if (cartItemsElement && cartTotalElement) {
        cartItemsElement.innerHTML = "";

        let total = 0;

        cart.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("cart-item");
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <p>${item.name} <br> Size: ${item.size} <br> Quantity: ${item.quantity} <br> Price: $${(item.price * item.quantity).toFixed(2)}</p>
                <button onclick="removeFromCart('${item.name}')">X</button>
            `;
            cartItemsElement.appendChild(itemElement);

            total += item.price * item.quantity;
        });

        cartTotalElement.textContent = total.toFixed(2);
    }
}

function removeFromCart(productName) {
    const productToRemove = cart.find(item => item.name === productName);

    //alert(productToRemove.quantity);

    
    cart = cart.filter(item => item.name !== productName);
    localStorage.setItem('cart', JSON.stringify(cart));
    location.reload();

}

document.addEventListener('DOMContentLoaded', function() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCart();
    }
});


