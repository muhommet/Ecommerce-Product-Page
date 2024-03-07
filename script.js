// Showcase images part
mainImage = document.querySelector("#main-image");
product1 = document.querySelector("#product-1");
product2 = document.querySelector("#product-2");
product3 = document.querySelector("#product-3");
product4 = document.querySelector("#product-4");

product1.addEventListener("click", function () {
  mainImage.src = "./images/image-product-1.jpg";
  product1.style.border = "4px solid hsl(26, 100%, 55%)";
  product1.style.opacity = "0.3";

  product2.style.border = "none";
  product2.style.opacity = "1";
  product3.style.border = "none";
  product3.style.opacity = "1";
  product4.style.border = "none";
  product4.style.opacity = "1";
});
product2.addEventListener("click", function () {
  mainImage.src = "./images/image-product-2.jpg";
  product2.style.border = "4px solid hsl(26, 100%, 55%)";
  product2.style.opacity = "0.3";

  product1.style.border = "none";
  product1.style.opacity = "1";
  product3.style.border = "none";
  product3.style.opacity = "1";
  product4.style.border = "none";
  product4.style.opacity = "1";
});
product3.addEventListener("click", function () {
  mainImage.src = "./images/image-product-3.jpg";
  product3.style.border = "4px solid hsl(26, 100%, 55%)";
  product3.style.opacity = "0.3";

  product2.style.border = "none";
  product2.style.opacity = "1";
  product1.style.border = "none";
  product1.style.opacity = "1";
  product4.style.border = "none";
  product4.style.opacity = "1";
});
product4.addEventListener("click", function () {
  mainImage.src = "./images/image-product-4.jpg";
  product4.style.border = "4px solid hsl(26, 100%, 55%)";
  product4.style.opacity = "0.3";
  product2.style.border = "none";
  product2.style.opacity = "1";
  product1.style.border = "none";
  product1.style.opacity = "1";
  product3.style.border = "none";
  product3.style.opacity = "1";
});
mainImage.addEventListener("click", function () {
  blackfaint.style.display = "block";
  displayImages.style.display = "flex";
});

// Showcase arrow navigation
//  close Showcase
closeShowcase = document.querySelector("#close");
previous = document.querySelector("#previous");
next = document.querySelector("#next");
blackfaint = document.querySelector(".black-faint");
displayImages = document.querySelector(".display-images");
mobileNav = document.querySelector(".mobile-nav");
menu = document.querySelector("#menu");
navClose = document.querySelector("#mobile-close");

closeShowcase.addEventListener("click", function () {
  blackfaint.style.display = "none";
  displayImages.style.display = "none";
});
blackfaint.addEventListener("click", function () {
  blackfaint.style.display = "none";
  displayImages.style.display = "none";
  mobileNav.style.display = "none";
});

menu.addEventListener("click", function () {
  blackfaint.style.display = "block";
  mobileNav.style.display = "flex";
});
navClose.addEventListener("click", function () {
  blackfaint.style.display = "none";
  mobileNav.style.display = "none";
});
//  Next and Previous

mobileImage = document.querySelector(".smain-image");
smainImage = document.querySelector("#smain-image");
const imagePaths = [
  "./images/image-product-1.jpg",
  "./images/image-product-2.jpg",
  "./images/image-product-3.jpg",
  "./images/image-product-4.jpg",
];
let currentImageIndex = 0;

previous.addEventListener("click", () => {
  currentImageIndex--;
  if (currentImageIndex < 0) {
    currentImageIndex = imagePaths.length - 1;
  }
  smainImage.src = imagePaths[currentImageIndex];
  mobileImage.src = imagePaths[currentImageIndex];
});

next.addEventListener("click", () => {
  currentImageIndex++;
  if (currentImageIndex === imagePaths.length) {
    currentImageIndex = 0;
  }
  smainImage.src = imagePaths[currentImageIndex];
  mobileImage.src = imagePaths[currentImageIndex];
});

// Dont know how to show active state in showcase images thimbnail :/

//  Plus and Minus

minus = document.querySelector("#minus");
plus = document.querySelector("#plus");
quantiti = document.querySelector("#count");
let count = 0;
minus.addEventListener("click", function () {
  if (count > 0) {
    count--;
    quantiti.textContent = count;
  }
});
plus.addEventListener("click", function () {
  count++;
  quantiti.textContent = count;
});

// CartWeeel

cartButton = document.querySelector("#cartweel-icon");
cart = document.querySelector(".cart");

cartButton.addEventListener("click", function () {
  cart.style.display = cart.style.display === "none" ? "block" : "none";
  previous.style.display =
    previous.style.display === "block" ? "none" : "block";
  next.style.display = next.style.display === "block" ? "none" : "block";
});

itemInCart = document.querySelector(".item-in-cart");
checkout = document.querySelector("#checkout");
cartEmpty = document.querySelector("#cart-empty");
addToCart = document.querySelector("#add-button");
itemCount = document.querySelector("#item-count");
totalPrice = document.querySelector("#total-price");
price = 125;
deleteButton = document.querySelector("#delete");

counter = document.querySelector("#count-interface");
counterContainer = document.querySelector("#item-count-cart");

addToCart.addEventListener("click", function () {
  if (count > 0) {
    itemInCart.style.display = "flex";
    checkout.style.display = "block";
    cartEmpty.textContent = "";
    itemCount.textContent = "x" + count;
    totalPrice.textContent = "$" + 125 * count + ".00";
    counterContainer.style.display = "flex";
    counter.textContent = count;
  } else {
    itemInCart.style.display = "none";
    checkout.style.display = "none";
    cartEmpty.textContent = "Your Cart is Empty!";
    counterContainer.style.display = "none";
  }
});
deleteButton.addEventListener("click", function () {
  itemInCart.style.display = "none";
  checkout.style.display = "none";
  cartEmpty.textContent = "Your Cart is Empty!";
});
