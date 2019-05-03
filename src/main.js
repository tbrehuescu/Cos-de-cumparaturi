
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

function alreadyInBasket(item) {
    for(var i = 0; i < basketItems.length; i++) {
        if (basketItems[i].querySelector(".name").innerHTML == item.querySelector(".produs").querySelector(".name").innerHTML) {
            return true;
        }
    }
    return false;
}

function updateQuantity(item) {
    for (var i = 0; i < basketItems.length; i++) {
        if (basketItems[i].querySelector(".name").innerHTML == item.querySelector(".produs").querySelector(".name").innerHTML) {
            var currentQuantity = basketItems[i].querySelector(".cantitate").getAttribute("value");
            basketItems[i].querySelector(".cantitate").setAttribute("value", parseInt(currentQuantity) + 1);
            basketItems[i].querySelector(".total").innerHTML = (parseFloat(item.querySelector(".produs").querySelector(".price").innerHTML) * 
                                                                parseInt(basketItems[i].querySelector(".cantitate").getAttribute("value"))).toFixed(2); 
        }
    }
}

function updateBasket(item) {
    if (!alreadyInBasket(item)) {
        var clone = itemBasketTemplate.content.cloneNode(true);
        clone.querySelector(".price").innerHTML = item.querySelector(".produs").querySelector(".price").innerHTML;
        clone.querySelector(".name").innerHTML = item.querySelector(".produs").querySelector(".name").innerHTML;
        clone.querySelector(".total").innerHTML = parseFloat(clone.querySelector(".price").innerHTML);
        basket.appendChild(clone);
    } else {
        updateQuantity(item);
    }
}

items.forEach(function(item) {
    item.querySelector(".produs").querySelector(".add").addEventListener("click", function() {
        updateBasket(item)
    });
});

// TODO: modificare basket cand adaug prin sageata
// TODO: modificare basket cand modific de mana
// TODO: data-index