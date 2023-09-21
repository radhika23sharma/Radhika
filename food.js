var imageUrls = [
    "burger.jpg",
    "imgfood.jpg",
    "imgfood3.jpg",
    "imgfood2.jpg",
    "Rajasthani(Indian) food platter - Awesome.jpg",
    "bg1food.jpg"
];

var currentIndex = 0;
var imageElement = document.querySelector(".image");

function showNextImage() {
    imageElement.src = imageUrls[currentIndex];
    currentIndex = (currentIndex + 1) % imageUrls.length;
}

setInterval(showNextImage, 3000);

showNextImage();



// Get the "ORDER NOW" button by its class
var orderButton = document.querySelector(".button");

// Add a click event listener to the button
orderButton.addEventListener("click", function() {
    // Add your custom action here
    alert("Your order has been placed!");
});



