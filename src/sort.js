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