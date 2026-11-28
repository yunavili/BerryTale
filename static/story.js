"use strict";

const name_player = document.querySelector("#name-player");

//Load player name 
async function loadPlayerName() {
    // TODO: API URL matches the Flask route?
    const response = await fetch("/api/player-name");
    const player = await response.json();
    name_player.textContent = player.name;
}

loadPlayerName()