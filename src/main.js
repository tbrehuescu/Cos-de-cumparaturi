
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
            if (event.type == "change") {
                basketItems[i].querySelector(".cantitate").setAttribute("value", parseInt(basketItems[i].querySelector(".cantitate").value));   
                basketItems[i].querySelector(".cantitate").innerHTML = basketItems[i].querySelector(".cantitate").value;
            }
            if (event.type == "click") {
                basketItems[i].querySelector(".cantitate").value = parseInt(basketItems[i].querySelector(".cantitate").value) + 1;            
                basketItems[i].querySelector(".cantitate").innerHTML = basketItems[i].querySelector(".cantitate").getAttribute("value") + 1;
            }
            basketItems[i].querySelector(".total").innerHTML = (parseFloat(item.querySelector(".produs").querySelector(".price").innerHTML) * 
                                                                parseInt(basketItems[i].querySelector(".cantitate").value)).toFixed(2); 
        }
    }
}

function updateBasket(item) {
    if (!alreadyInBasket(item)) {
        var clone = itemBasketTemplate.content.cloneNode(true);
        clone.querySelector(".price").innerHTML = item.querySelector(".produs").querySelector(".price").innerHTML;
        clone.querySelector(".name").innerHTML = item.querySelector(".produs").querySelector(".name").innerHTML;
        clone.querySelector(".total").innerHTML = parseFloat(clone.querySelector(".price").innerHTML);
        clone.querySelector(".cantitate").addEventListener("change", function() {
            updateQuantity(item);
        });
        clone.querySelector(".remove").setAttribute("data-index", parseInt(basketItems.length) + 1);
        clone.querySelector(".remove").addEventListener("click", function() {
            deleteItem();
        })
        basket.appendChild(clone);
    } else {
        updateQuantity(item);
    }
}

items.forEach(function(item) {
    item.querySelector(".produs").querySelector(".add").addEventListener("click", function() {
        updateBasket(item);
    });
});

// task 1.6
function deleteItem() {
    var dataIndex = event.target.getAttribute("data-index");
    basketItems[dataIndex - 1].remove();
    basketItems = document.getElementById("items").getElementsByTagName("tr");
    for (var i = dataIndex; i <= basketItems.length; i++) {
        basketItems[i - 1].querySelector(".remove").setAttribute("data-index", i);
    }
}