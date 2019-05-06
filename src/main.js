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

function sortNameAscending(a, b) {
    
    if (a.querySelector(".produs").querySelector(".name").innerHTML < b.querySelector(".produs").querySelector(".name").innerHTML) {
        return -1;
    } else if (a.querySelector(".produs").querySelector(".name").innerHTML > b.querySelector(".produs").querySelector(".name").innerHTML) {
        return 1;
    }
    return 0;
};

function sortNameDescending(a, b) {
    
    if (a.querySelector(".produs").querySelector(".name").innerHTML > b.querySelector(".produs").querySelector(".name").innerHTML) {
        return -1;
    } else if (a.querySelector(".produs").querySelector(".name").innerHTML < b.querySelector(".produs").querySelector(".name").innerHTML) {
        return 1;
    }
    return 0;
};

function sortPriceAscending(a, b) {    
    return a.querySelector(".produs").querySelector(".price").innerHTML - b.querySelector(".produs").querySelector(".price").innerHTML;
};

function sortPriceDescending(a, b) {
    return b.querySelector(".produs").querySelector(".price").innerHTML - a.querySelector(".produs").querySelector(".price").innerHTML;
};

function restoreItemsList(items) {
    var parentItems = items[0].parentNode;
    for (var i in items) {
        var detachedItem = parentItems.removeChild(items[i]);
        items[i].querySelector(".produs").querySelector(".add").setAttribute("data-index", i);
        parentItems.appendChild(items[i]);
    }
}

function getSortType() {
    if (document.querySelector("#sortare").selectedOptions[0].value == "cmpNumeCrescator") {
        return sortNameAscending;
    }
    if (document.querySelector("#sortare").selectedOptions[0].value == "cmpNumeDescrescator") {
        return sortNameDescending;
    }
    if (document.querySelector("#sortare").selectedOptions[0].value == "cmpPretCrescartor") {
        return sortPriceAscending;
    }
    if (document.querySelector("#sortare").selectedOptions[0].value == "cmpPretDescrescator") {
        return sortPriceDescending;
    }
}

function sort(type) {
    var selItemsList = document.querySelector("#data").getElementsByTagName("li");
    var items = Array.prototype.slice.call(selItemsList);
    if (typeof type == "undefined") {
        items.sort(sortPriceAscending);
    } else {
        items.sort(getSortType());
    }
    restoreItemsList(items);
}

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
    updateTotal();
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
        updateTotal();
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
    updateTotal();
}

// task 1.7
function updateTotal() {
    var total = 0;
    var totalBasket = document.querySelector("#total");
    basketItems = document.getElementById("items").getElementsByTagName("tr");
    for (var i = 0; i < basketItems.length; i++) {
        total += parseFloat(basketItems[i].querySelector(".total").innerHTML);
    }
    totalBasket.innerHTML = total.toFixed(2);
}
