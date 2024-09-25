import Game from './game.js';

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

    const game = new Game(app);
    game.start();

    // Handle window resizing
    window.addEventListener('resize', () => {
        app.renderer.resize(gameContainer.clientWidth, gameContainer.clientHeight);
    });
}

window.onload = init;