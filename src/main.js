// task 1.3
var productTemplate = document.getElementById("product-template");
var products = document.getElementById("data");

data.items.forEach(function(item) {
    var clone = productTemplate.content.cloneNode(true);
    clone.querySelector(".produs").querySelector(".name").innerHTML = item.name;
    clone.querySelector(".produs").querySelector(".price").innerHTML = item.price;
    clone.querySelector(".produs").querySelector(".image").src = item.image;

    products.appendChild(clone);
});
// initial sort is sortPriceAscending
sort();

// task 1.4
var sortList = document.querySelector("#sortare").addEventListener("change", sort);

// task 1.5
var itemBasketTemplate = document.getElementById("item-basket-template");
var selItemsList = document.querySelector("#data").getElementsByTagName("li");
var items = Array.prototype.slice.call(selItemsList);
var basket = document.getElementById("items");
var basketItems = basket.getElementsByTagName("tr");
var total = 0;

items.forEach(function(item) {
    item.querySelector(".produs").querySelector(".add").addEventListener("click", function() {
        updateBasket(item);
    });
});