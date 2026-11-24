"use strict";

const basket = document.getElementById("berry-basket");
const bush1 = document.getElementById("normal-bush1");
const bush2 = document.getElementById("normal-bush2");
const bear_bush = document.getElementById("bear-bush")
const berry_basket = document.querySelector("#berry-basket img");
let basket_amount = 0


function add_to_the_basket (amount) {
    if (basket_amount == 0) {
        basket_amount += 1;
        berry_basket.src = "/img/basket_some.png";
    } else if (basket_amount == 1) {
        basket_amount += 1;
        berry_basket.src = "/img/basket_medium.png";
    } else if (basket_amount == 2) {
        basket_amount += 1;
        berry_basket.src = "/img/basket_almost_full.png";
    } else if (basket_amount == 3) {
        basket_amount += 1;
        berry_basket.src = "/img/basket_full.png";
    }
};

// eventlisteners for the bushes !

bush1.addEventListener("click", function (evt) {
    const img = bush1.querySelector("#normal-bush1 img");
    img.src = "/img/bush1_empty.png";
    add_to_the_basket(1);
}, {once: true});


bush2.addEventListener("click", function (evt) {
    const img = document.querySelector("#normal-bush2 img");
    img.src = "/img/bush2_empty.png";
    add_to_the_basket(1);
}, { once: true});

bear_bush.addEventListener("click", function (evt) {
    const img = document.querySelector("#bear-bush img");
    img.src = "/img/bush3_empty.png";
    add_to_the_basket(1);
}, { once: true });
