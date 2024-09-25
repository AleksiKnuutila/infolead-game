class Game {
    constructor(app) {
        this.app = app;
        this.currentScene = 0;
        this.textContainer = new PIXI.Container();
        this.choicesContainer = new PIXI.Container();
        
        this.app.stage.addChild(this.textContainer);
        this.app.stage.addChild(this.choicesContainer);

        this.lastTextY = 20;

        // Set up scrolling
        this.setupScrolling();

        // Remove this line
        // this.createButtons();
    }

    setupScrolling() {
        const gameContainer = document.getElementById('game-container');
        gameContainer.addEventListener('wheel', (e) => {
            e.preventDefault();
            const scrollAmount = e.deltaY;
            this.scroll(scrollAmount);
        });

        // For touch devices
        let touchStartY;
        gameContainer.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
        });
        gameContainer.addEventListener('touchmove', (e) => {
            const touchEndY = e.touches[0].clientY;
            const scrollAmount = (touchStartY - touchEndY) * 2;
            this.scroll(scrollAmount);
            touchStartY = touchEndY;
        });
    }

    scroll(amount) {
        const newY = this.textContainer.y - amount;
        const minY = -this.lastTextY + this.app.screen.height - 100; // Leave some space at the bottom
        this.textContainer.y = Math.max(minY, Math.min(0, newY));
        this.choicesContainer.y = this.textContainer.y;
    }

    start() {
        this.showScene(this.currentScene);
    }

    showScene(sceneIndex) {
        const scene = gameData[sceneIndex];
        this.choicesContainer.removeChildren();

        // Create a message block
        const messageBlock = this.createMessageBlock(scene.text);
        messageBlock.y = this.lastTextY;
        this.textContainer.addChild(messageBlock);

        // Update lastTextY for the next text block
        this.lastTextY = messageBlock.y + messageBlock.height + 20;

        // Display choices
        scene.choices.forEach((choice, index) => {
            const button = new PIXI.Text(choice.text, {
                fontFamily: 'Arial',
                fontSize: 16,
                fill: 0x0000ff,
                wordWrap: true,
                wordWrapWidth: 150 // Adjust as needed
            });
            
            button.interactive = true;
            button.cursor = 'pointer';
            button.on('pointerdown', () => this.makeChoice(choice.next));

            // Position buttons
            if (index === 0) {
                // Left button
                button.x = 40;
            } else if (index === 1) {
                // Right button
                button.x = this.app.screen.width - button.width - 40;
            }
            
            // Vertical positioning (below the last text)
            button.y = this.lastTextY;

            this.choicesContainer.addChild(button);
        });

        // Update lastTextY to include the height of the buttons
        this.lastTextY += 40; // Adjust this value as needed

        this.scrollToBottom();
    }

    createMessageBlock(text) {
        const padding = 10;
        const borderRadius = 10;
        const shadowOffset = 3;

        const textObject = new PIXI.Text(text, {
            fontFamily: 'Arial',
            fontSize: 18,
            fill: 0x000000,
            wordWrap: true,
            wordWrapWidth: this.app.screen.width - 80
        });

        const backgroundWidth = textObject.width + padding * 2;
        const backgroundHeight = textObject.height + padding * 2;

        // Create shadow
        const shadow = new PIXI.Graphics();
        shadow.beginFill(0x000000, 0.3);
        shadow.drawRoundedRect(
            shadowOffset,
            shadowOffset,
            backgroundWidth,
            backgroundHeight,
            borderRadius
        );
        shadow.endFill();

        // Create background
        const background = new PIXI.Graphics();
        background.beginFill(0xE0E0E0);
        background.drawRoundedRect(
            0,
            0,
            backgroundWidth,
            backgroundHeight,
            borderRadius
        );
        background.endFill();

        const container = new PIXI.Container();
        container.addChild(shadow);
        container.addChild(background);
        container.addChild(textObject);

        textObject.x = padding;
        textObject.y = padding;

        container.x = 20;

        return container;
    }

    makeChoice(nextScene) {
        this.currentScene = nextScene;
        this.showScene(this.currentScene);
    }

    scrollToBottom() {
        const totalHeight = this.lastTextY + this.choicesContainer.height;
        
        if (totalHeight > this.app.screen.height) {
            const offset = totalHeight - this.app.screen.height;
            this.textContainer.y = -offset;
            this.choicesContainer.y = -offset;
        }
    }
}

// Keep only the ES6 module export
export default Game;