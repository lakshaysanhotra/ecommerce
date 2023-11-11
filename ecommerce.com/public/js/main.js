// Products Array
const products = [
    {
        id: 1,
        title: "Nike Jumpman",
        price: 264.9,
        image:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJmx9wj6ILk6sbU6lNu1fM_zsF64OnR0aQHsuDpicjrQmQUpegoA2g6MAoIUQQSGL36o8Ta_WSXZYQMj3f0dIM_6LbAy8WJHYGmnU5mV_izj4RsNRmRpTrNRIwZy65CevTGhmDuqvT32yFX1te9Q-VALdetJsHOp4bw9dTJqQQm9XvsJpasM5XKxTZ/s320/shoe1.webp",
    },
    {
        id: 2,
        title: "Nike Dunk High",
        price: 295,
        image:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjJvpx0YyAOjo80ZOe6yg7iHkR_R9wQqUW4onK_r_hKx546Gz0cQl6L21xICxgp3Mxaicfn6gZN59koDg85QJlqDJF3ad6FBQTEIPU5D6PZioKpqujYoREllUDjAV9IClh-5H9Xkr0tvgYcxo5PYUAWWXvxLrCBQT51L2xYxuhQ6l-gT9dTTNYINLby/s320/shoe2.webp",
    },
    {
        id: 3,
        title: "Nike Air Jordan",
        price: 74.9,
        image:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFQvZevXm-Oyld6eSob5-83_lyj0lhqiFn-l9OjGXFyMAk4fDcFuyjc9Yvy4V04HV5VCkNI82RyT9w0ePt2wEkBlIammvFMAilU_JOigKJEXcYWNwYcmrdoNR1H0b6VThiH1pK6PNb75byVEBX4gwfAU440zS2BZHm75D4nsu-NNkAJhf5SzmxN9tf/s320/shoe3.webp",
    },
    {
        id: 4,
        title: "Nike Air Max SYSTM",
        price: 80,
        image:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhTCToBc5mAQozH9BWpfdI-aNxKn4MGlDhz5gU3ImGbCcIMu1fxAYD-cHRN1WJvd-qey3Uu4SiQ-D1ni0hYW3RoH3o1wXRuIcKsc1DYVqm7PgqDUjjqp6msVdLV-EKLjxQRuPBrihxXvh54nKOEjfukWLKPQQepjnM34TcWbzuJo6oSU4cM-QeghbYd/s320/shoe4.webp",
    },
    {
        id: 5,
        title: "Nike Air Force",
        price: 48.99,
        image:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeGXR6jWsel2QFq3wZ9njOaw3q25-i2jhKl26Uwv6-_xdJGzVGMAXPuq7jpAmdqE22C3IMuOtJVM6SP5N4XOZlrQX6DIsg2K2rwXXetDlzKPhdkGkij4zLkRG0W-jHLuMArIO4hKhLrr8pL1S1SCUvRrBWe5Wbr-RRmCnZWAaNvtQ5qcTCeorOeE1Y/s320/shoe5.webp",
    },
    {
        id: 6,
        title: "Nike Vaporfly",
        price: 395,
        image:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0le0z-BJdvzEI7pU6tcrpYz8MG9VpSzQiW0117PO9g1nx9fBg7-6EMFRR_AgOMZUd2n1MptxMSbweTOwzyPrvo-badBHyBqmOj5zsmmXzLp2xuM53jZrI3q8-n1fFMYS9YQr1RtnNKFtwouXZ3bgvTjLCu1CNUHM6PRZiZq1gyZHEnBTN0Va2ip0qE/s320/shoe6.webp",
    },
    {
        id: 7,
        title: "Nike Zegama",
        price: 48.99,
        image:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEguJPgD3RrfozaOaThl0HW_2YFw8LmB9bWCPLuodcXNYWB4oYhKPZjnhS2EhG45lOlJAu4XCrcmSNjJZVq7XSUne27odG6KzcmTxm3gIINuDDtbbraPK8Lv9lWv7tiT7nk6sEXbNusWK-osZshqRBMKRDhEvDa8-URfLs6nELGJigI-IT4dQj1__JDq/s320/shoe7.webp",
    },
    {
        id: 8,
        title: "Nike Kiger 9",
        price: 79.99,
        image:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhf6s7e1roZhfmYaljrttFPtHKOnvCoAzDkBTqaurT7gxfggdAyMSKV4XB9OLiZ6ljNNR6BJNimtaYiE1wLh-baZdddQ1z4lLLK5saNUoltbDrkPylqGjGxSxEGhNHyFh9NFikt0YPwuRqpXv8H2mND9JX2BEwWnJKPNI25lxgEocAsfyhw-YeMVRTN/s320/shoe8.webp",
    },
];

// Get the products list and elements
const productList = document.querySelector("#productList");
const cartItemsElement = document.querySelector("#cartItems");
const cartTotalElement = document.querySelector("#cartTotal");

console.log(productList, cartItemsElement, cartTotalElement);


// Store Cart Items in local storage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// function Product on Page
function renderProducts() {
    productList.innerHTML = products
        .map(
            (product) => `
        <div class="col-md-3 col-6 col-sm-6 my-2">
                    <div class="products card" style="width: 100%">
                        <img class="product-img card-img-top" src="${product.image}" alt="${product.title}">
                        <div class="card-body d-flex justify-content-between align-items-center">
                          <div class="product_info">
                            <h5 class="product-title card-title">${product.title}</h5>
                          <p class="product-price card-text h5">₹${product.price.toFixed(2)}</p>
                          </div>
                          <a class="add-to-cart btn btn-success h3" data-id="${product.id}">ADD</a>
                        </div>
                      </div>
                </div>`
        )
        .join("");
    // Add to Cart
    const addToCartButtons = document.getElementsByClassName('add-to-cart');
    for (let i = 0; i < addToCartButtons.length; i++) {
        const addToCartButton = addToCartButtons[i];
        addToCartButton.addEventListener("click", addToCart);
    }
}

// Render product on Cart Page after add to cart function
// add to cart 
function addToCart(event) {
    const productID = parseInt(event.target.dataset.id);
    const product = products.find((product) => product.id === productID);

    if (product) {
        // if product already in cart
        const exixtingItem = cart.find((item) => item.id === productID);

        if (exixtingItem) {
            exixtingItem.quantity++;
        } else {
            const cartItem = {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: 1,
            };
            cart.push(cartItem);
        }
        // change add to cart text to added
        event.target.textContent = "Added";
        updateCartIcon();
        renderCartItems();
        saveToLocalStorage();
        calculateCartTotal();
    }
}
// remove from cart
function removeFromCart(event) {
    const productID = parseInt(event.target.dataset.id);
    cart = cart.filter((item) => item.id !== productID);
    saveToLocalStorage();
    renderCartItems();
    calculateCartTotal();
    updateCartIcon();
}

// quantity Change
function changeQuantity(event) {
    const productID = parseInt(event.target.dataset.id);
    const quantity = parseInt(event.target.value);

    if (quantity > 0) {
        const cartItem = cart.find((item) => item.id === productID);
        if (cartItem) {
            cartItem.quantity = quantity;
            saveToLocalStorage();
            calculateCartTotal();
            updateCartIcon();
        }
    }
}

// saveToLOcalStorage
function saveToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Render product on Cart Page
function renderCartItems() {
    cartItemsElement.innerHTML = cart.map(
        (item) => `
        <div class="cart-item col-md-12 card-body border cart-box d-flex justify-content-between align-items-center">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex flex-row align-items-center">
                                <div>
                                    <img src="${item.image}" class="img-fluid rounded-3" alt="${item.title}"
                                        style="width: 65px;">
                                </div>
                                <div class="ms-3">
                                    <h5 class="cart-item-title">${item.title}</h5>
                                    <!-- <h5 class="fw-normal mb-0">2</h5> -->
                                    <input class="text-center cart-item-quantity" data-id="${item.id}" type="number"
                                        min="1" value="${item.quantity}" style="width: 45px;">
                                    <span style="width: 45px;" class="cart-item-price mb-0 h5">₹${item.price}</span>
                                </div>
                            </div>
                        </div>
                        <i class="fas fa-trash-alt text-danger remove-from-cart h3" data-id="${item.id}"></i>
                    </div>
                    `
    )
        .join("");
    // remove From Cart
    const removeButtons = document.getElementsByClassName('remove-from-cart');
    for (let i = 0; i < removeButtons.length; i++) {
        const removeButton = removeButtons[i];
        removeButton.addEventListener("click", removeFromCart);
    }
    // quantity Change
    const quantityInputs = document.querySelectorAll('.cart-item-quantity');
    quantityInputs.forEach((input) => {
        input.addEventListener("change", changeQuantity);
    });
}

// calculate Total
function calculateCartTotal() {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    cartTotalElement.textContent = `Total: ₹${total.toFixed(2)}`;
}

//  check if on cart
if (window.location.pathname.includes('index.html')) {
    renderCartItems();
    calculateCartTotal();
} else {
    renderProducts();
}

// cart icon quantity
const cartIcon = document.getElementById('cart-icon');

function updateCartIcon(){
    const totalquantity = cart.reduce((sum, item) => sum + item.quantity,0);
    cartIcon.setAttribute('data-quantity', totalquantity)
}
updateCartIcon();

function updateCartIconOnCartChange(){
    updateCartIcon();
}

window.addEventListener('storage', updateCartIconOnCartChange);

function updateCartIcon(){
    const totalquantity = cart.reduce((sum, item) => sum + item.quantity,0);
    const cartIcon = document.getElementById('cart-icon');
    cartIcon.textContent = totalquantity;
}






renderProducts();
renderCartItems();
calculateCartTotal();

