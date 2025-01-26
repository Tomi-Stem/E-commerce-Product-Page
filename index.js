// DESKTOP VIEW

const openTab = document.querySelector(".open");
const closeTab = document.querySelector(".fa-xmark");
const modal = document.querySelector(".sneakers-div2");

openTab.addEventListener('click', () => {
 if (window.innerWidth<=425) {
    modal.style.display = "none";
    overflow.style.display = "none";
    body.style.overflow = "visible";}

  else {
    modal.style.display = "block";
    overflow.style.display = "block";
    body.style.overflow = "visible";
  }
})

closeTab.addEventListener('click', () => {
  modal.style.display = "none";
  overflow.style.display = "none";
  body.style.overflow = "auto";
})


// CART QUANTITY
var cartQuantity = document.querySelector(".cart-quantity");
var plusBtn = document.querySelector(".plus-btn");
var minusBtn = document.querySelector(".minus-btn");




// OPEN AND CLOSE CART
const openCart = document.querySelector(".fa-cart-shopping");
const cartItems = document.querySelector(".cart-items");
const emptyCart = document.querySelector(".empty-cart");
const closeCart = document.querySelector("main");

openCart.addEventListener('click', () => {
  if(valueCount > 0) {cartItems.style.display = "block";
  emptyCart.style.display = "none";
  }

  else { emptyCart.style.display = "block";
    cartItems.style.display = "none";
    openCart.classList.remove('cart-items');
  }

})

closeCart.addEventListener('click', () => {
  cartItems.style.display = "none";
  emptyCart.style.display = "none";
  })
  




// console.log(openCart.addEventListener());




// setting default attribute to disabled of minus button
document.querySelector(".minus-btn").setAttribute("disabled", "disabled");

// taking value to increment decrement input value
var valueCount = 0;

// Ttoal price
var price = document.getElementById("price").innerText;

// price calculation
function priceTotal() {
  var total = valueCount * price;
  document.getElementById("price").innerText = total
  document.querySelector(".cart-span2").innerText = valueCount
}

// plus btn
plusBtn.addEventListener('click', () => {
// getting value of input
  quantity = document.getElementById("quantity");

  // input increment by 1
  valueCount++;

  // setting increment input value
  quantity.value = valueCount;
  cartQuantity.innerHTML = valueCount;
  if(valueCount > 0) {cartQuantity.style.display = "block";}

  if (valueCount > 0) {
    document.querySelector(".minus-btn").removeAttribute("disabled");
    document.querySelector(".minus-btn").classList.remove("disabled");
  }

    // calling price function
    priceTotal();
});

// minus btn
minusBtn.addEventListener("click", () => {
  // getting value of input
  valueCount = document.getElementById("quantity").value;

  // input increment by 1
  valueCount--;

  // setting increment input value
  quantity.value = valueCount
  cartQuantity.innerHTML = valueCount;
  if(valueCount < 1) {cartQuantity.style.display = "none";}

  if (valueCount == 0) {
    minusBtn.setAttribute("disabled", "disabled")
  }

    // calling price function
    priceTotal()
})

// MOBILE VIEW

const hamburger = document.querySelector(".hamburger");
const closeMenuBtn = document.querySelector('.close-btn');
const navTabs = document.querySelector("#nav-tabs");
const body = document.querySelector("body");
const overflow = document.querySelector(".overflow")

hamburger.addEventListener('click', () => {
  navTabs.style.display = "block";
  overflow.style.display = "block";
  navTabs.classList.toggle("open");
  body.style.overflow = "hidden";
  body.classList.toggle("blur");
})

closeMenuBtn.addEventListener('click', () => {
  navTabs.style.display = "none";
  overflow.style.display = "none";
  body.style.overflow = "auto";
})



