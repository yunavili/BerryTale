"use strict";

// loads the new level, without need of changing the html file. Reads the new level elements from levels.js
function loadlevel(levelNumber) {
    const level = levels[levelNumber]; // -> levels.js
    const main = document.querySelector("main");
    main.innerHTML = ""; // clears the main page before creating new objects

    // for loop that creates every element of the level
    for (let i = 0; i < level.elements.length; i++) {
        const element = level.elements[i];
        const gameObject = document.createElement("div");
        gameObject.id = element.id;
        gameObject.className = element.className;
        
        const art = document.createElement("img");
        art.src = element.image;
        art.alt = element.art;

        gameObject.appendChild(art)

        if (gameObject.id == "normal-bush1") {
            gameObject.addEventListener("click", function (evt) {
                const img = gameObject.querySelector("img");
                img.src = "/img/level1/bush1_empty.png";
                add_to_the_basket(1);
            }, {once: true});
        }

        if (gameObject.id == "normal-bush2") {
            gameObject.addEventListener("click", function (evt) {
                const img = gameObject.querySelector("img");
                img.src = "/img/level1/bush2_empty.png";
                add_to_the_basket(1);
            }, { once: true});
        }
 
        if (gameObject.id == "bear-bush") {
            gameObject.addEventListener("click", function (evt) {
                const img = gameObject.querySelector("img");
                img.src = "/img/level1/bush3_empty.png";
                add_to_the_basket(1);
            }, { once: true });
        }

        main.appendChild(gameObject);
        
    };
};


function add_to_the_basket (amount) {
    const berry_basket = document.querySelector("#berry-basket img");
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


let currentLevel = 1;
let basket_amount = 0
loadlevel(currentLevel);
