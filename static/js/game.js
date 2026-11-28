"use strict";

// loads the new level, without need of changing the html file. Reads the new level elements from levels.js
function loadlevel(levelNumber) {

    const allElements = [...commonElements, ...levels[levelNumber].elements]; // from levels.js
    main.innerHTML = ""; // clears the main page before creating new objects

    main.style.backgroundImage = `url("${levels[levelNumber].background}")`

    // for loop that creates every element of the level
    for (let i = 0; i < allElements.length; i++) {
        const element = allElements[i];
        const gameObject = document.createElement("div");
        gameObject.id = element.id;
        gameObject.className = element.className;
        
        const art = document.createElement("img");
        art.src = element.image;
        art.alt = element.art;

        if (gameObject.id == "berry-basket") { // keep the right artwork on berry-basket when changing level
            art.src = check_basket_status();
        }
        
        gameObject.appendChild(art)

        // ****CLICK FUNCTIONS***
        
        // COMMON ELEMENTS
        if (element.action == "empty"){ // make bushes be empty after click
            gameObject.addEventListener("click", function (evt) {
                const img = gameObject.querySelector("img");
                img.src = element.emptyImage;
                add_to_the_basket(1);
            }, {once: true});
        }
 

        if (element.action == "arrow") {
            gameObject.addEventListener("click", function (evt) {
                currentLevel += 1;
                loadlevel(currentLevel);
            }, {once: true})
        }

        // LEVEL 1 ELEMENTS 

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

        // LEVEL 3 ELEMENTS

        if (element.action == "boot") { // creates animation for the boot
            gameObject.addEventListener("click", function (evt) {
                gameObject.style.animation = "collect 0.5s forwards";
                has_boot = true;
            }, {once: true})
        }

        // LEVEL 4 ELEMENTS

        if(element.action == "ukko") { // creates dialog for ukko
            gameObject.addEventListener("click", ukko_dialog, {once:true});
        }

        main.appendChild(gameObject); // adding the element to main
        
    };
};

function ukko_dialog (evt) {

    const dialog_box = document.createElement("div");
    dialog_box.id = "dialog-box"
    const dialog1 = document.createElement("button");
    const dialog2 = document.createElement("button");
    dialog1.className = "dialog";
    dialog2.className = "dialog";
    dialog1.textContent = "Ask about missing boot"
    dialog2.textContent = "Fight!"
    dialog_box.append(dialog1, dialog2);
    main.append(dialog_box);

    dialog1.addEventListener("click", function (evt){ // dialog button, content and action changes after first click
        if (dialog1.textContent == "Ask about missing boot") { 
            const answer1 = document.createElement("p")
            answer1.className = "answer";
            answer1.textContent = "I drop my box with blueberries into the lake and my boot got stuck in the mud!";
            main.appendChild(answer1);
            if (has_boot) { // if player picked boot from previos level
                dialog1.textContent = "Give the boot back";
            } else {
                dialog1.remove();
            }
        } else if (dialog1.textContent == "Give the boot back") {
            const answer1 = document.querySelector(".answer");
            const ukko_image = document.querySelector("#ukko img");
            ukko_image.src = "../img/level4/ukko2.png";
            answer1.textContent = "Thanks";
            dialog1.remove();
            }
    })
}

function check_basket_status () {

    if (basket_amount == 0) {
        return "/img/basket_empty.png";  
    } else if (basket_amount == 1) {
        return "/img/basket_some.png";
    } else if (basket_amount == 2) {
        return "/img/basket_medium.png";
    } else if (basket_amount == 3) {
        return "/img/basket_almost_full.png";
    } else if (basket_amount >= 3) {
        return "/img/basket_full.png";
    }
}

function add_to_the_basket () {
    const berry_basket = document.querySelector("#berry-basket img");
        basket_amount += 1;
        berry_basket.src = check_basket_status();
};

function remove_from_the_basket (amount) { 
    const berry_basket = document.querySelector("#berry-basket img");
        basket_amount -= amount;
        berry_basket.src = check_basket_status();
}


const main = document.querySelector("main");
let currentLevel = 1;
let basket_amount = 0;
let has_boot = false;
loadlevel(currentLevel);
