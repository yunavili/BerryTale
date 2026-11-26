"use strict";

// loads the new level, without need of changing the html file. Reads the new level elements from levels.js
function loadlevel(levelNumber) {
    const allElements = [...commonElements, ...levels[levelNumber].elements]; // from levels.js
    const main = document.querySelector("main");
    main.innerHTML = ""; // clears the main page before creating new objects

    // for loop that creates every element of the level
    for (let i = 0; i < allElements.length; i++) {
        const element = allElements[i];
        const gameObject = document.createElement("div");
        gameObject.id = element.id;
        gameObject.className = element.className;
        
        const art = document.createElement("img");
        art.src = element.image;
        art.alt = element.art;

        gameObject.appendChild(art)

        // add the click functions to the elements
        if (element.action == "empty"){ // actions set in levels.js
            gameObject.addEventListener("click", function (evt) {
                const img = gameObject.querySelector("img");
                img.src = element.emptyImage;
                add_to_the_basket(1);
            }, {once: true});
        }
 
        if (element.action == "bear") {
            gameObject.addEventListener("click", function (evt) {
                const img = gameObject.querySelector("img");
                img.src = element.emptyImage;

                // creating bear
                const bear = document.createElement("img")
                bear.src = element.bearImage;   
                bear.id = "bear";
                gameObject.appendChild(bear);
                /// bear event here !!
                add_to_the_basket(1);
            
            }, { once: true });
        } 

        if (element.action == "arrow") {
            gameObject.addEventListener("click", function (evt) {
                currentLevel += 1;
                loadlevel(currentLevel);
            }, {once: true})
        }

        main.appendChild(gameObject); // adding the element to main
        
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
