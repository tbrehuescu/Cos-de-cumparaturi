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

var items = document.querySelector("#data").getElementsByTagName("li");
items.sort(sortNumeCrescator);

function sortNumeCrescator(a, b) {
    return 2 * 
            (a.querySelector(".produs").querySelector(".name")
            > 
            b.querySelector(".produs").querySelector(".name"))
             -1;
};