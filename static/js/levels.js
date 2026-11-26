"use strict";

const levels = {
    1: {
        elements: [
            {
                id: "normal-bush1",
                className: "bushes",
                image: "../img/level1//bush1.png", // default image
                emptyImage: "../img/level1/bush1_empty.png", // image after click
                alt: "bush",    
                action: "empty"
            },
            {
                id: "normal-bush2",
                className: "bushes",
                image: "../img/level1/bush2.png",
                emptyImage: "../img/level1/bush2_empty.png",
                alt: "bush",
                action: "empty"
            },
            {
                id: "bear-bush",
                className: "bushes",
                image: "../img/level1/bush3.png",
                emptyImage: "../img/level1/bush3_empty.png",
                bearImage: "../img/level1/bear.png",
                alt: "suspicious bush",
                action: "bear"
            },
            {
                id: "arrow",
                image: "../img/arrow.png",
                alt: "arrow",
                action: "arrow"
            },
            {
                id: "berry-basket",
                image: "../img/basket_empty.png",
                alt: "berry-basket"
            },
            {
                id: "sun",
                image: "../img/level1/sun.png",
                alt: "sun"
            }
        ]
    },

    2: {
        elements: [

        ]
    }
};