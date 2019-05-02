var productTemplate = document.getElementById("product-template");
var products = document.getElementById("data");

// task 1.3
data.items.forEach(function(item) {
    var clone = productTemplate.content.cloneNode(true);
    clone.querySelector(".produs").querySelector(".name").innerHTML = item.name;
    clone.querySelector(".produs").querySelector(".price").innerHTML = item.price;
    clone.querySelector(".produs").querySelector(".image").src = item.image;

    products.appendChild(clone);
});
// initial sort is sortPriceAscending
sort();

// tack 1.4
var sortList = document.querySelector("#sortare").addEventListener("change", sort);