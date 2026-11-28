"use strict";

const start = document.querySelector("#start-btn");
const name_dialog = document.querySelector("#name-input");

//player enter his name before playing game
start.addEventListener("click", () => {
    name_dialog.showModal();
})



