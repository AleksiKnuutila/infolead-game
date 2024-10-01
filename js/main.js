import Game from './game.js';
import gameData from './data.js';

let app;

function init() {
    const gameContainer = document.getElementById('game-container');
    app = new PIXI.Application({
        width: gameContainer.clientWidth,
        height: gameContainer.clientHeight,
        backgroundColor: 0xffffff,
        resizeTo: gameContainer
    });

    gameContainer.appendChild(app.view);

    const game = new Game(app, gameData);
    game.start("beginning"); // Start with the beginning screen

    // Handle window resizing
    window.addEventListener('resize', () => {
        app.renderer.resize(gameContainer.clientWidth, gameContainer.clientHeight);
    });
}

window.onload = init;