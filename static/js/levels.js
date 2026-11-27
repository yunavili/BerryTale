"use strict";

// elements that every level uses
const commonElements = [
    {
        id: "sun",
        image: "../img/level1/sun.png",
        alt: "sun"
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
];

// level specific elements
const levels = {
    1: {
        background: "../img/level1/level1_background.jpg",
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
            }
        ]
    },

    2: {
        background: "../img/level1/level1_background.jpg",
        elements: [
            {
                id: "river-bush1",
                className: "bushes",
                image: "../img/level1/bush1.png", // default image
                emptyImage: "../img/level1/bush1_empty.png", // image after click
                alt: "bush",    
                action: "empty"
            },
            {
                id: "river-bush2",
                className: "bushes",
                image: "../img/level1/bush2.png", // default image
                emptyImage: "../img/level1/bush2_empty.png", // image after click
                alt: "bush",    
                action: "empty"
            },
            {
                id: "river-bush3",
                className: "bushes",
                image: "../img/level1/bush3.png",
                emptyImage: "../img/level1/bush3_empty.png",
                alt: "bush",
                action: "empty"
            },
            {
                id: "river",
                image: "https://placehold.co/1000x100"
            },
        ]      
    },
    3: {
        background: "../img/level1/level1_background.jpg",
        elements: [
            {
                id: "box",
                image: "https://placehold.co/300x200",
                alt: "box",
                action: "box"
            },
            {
                id: "boot",
                image: "https://placehold.co/100x150",
                alt: "boot",
                action: "boot"
            }
        ]
    },

    4: {
        background: "../img/level1/level1_background.jpg",
        elements: [
            {
                id: "normal-bush4",
                className: "bushes",
                image: "../img/level1//bush1.png", // default image
                emptyImage: "../img/level1/bush1_empty.png", // image after click
                alt: "bush",    
                action: "empty"
            },
            {
                id: "ukko",
                image: "https://placehold.co/200x300",
                alt: "old guy",
                action: "ukko",
            },
        ]
    },
    
    5: {
        
        background: "../img/level1/level1_background.jpg",
        elements: [
            {
                id: "gm-fight-button",
                image: "https://placehold.co/200x100",
                alt: "fight button",
                action: "gm-fight-button"
            }
       ]
    }
};