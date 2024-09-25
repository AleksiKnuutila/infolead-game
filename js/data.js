const gameData = [
    {
        text: "Welcome to the game. You are a journalist trying to uncover a conspiracy.",
        choices: [
            { text: "Start investigating", next: 1 },
            { text: "Call it a day and go home", next: 2 }
        ]
    },
    {
        text: "You start digging into local records. You find some discrepancies in the mayor's financial reports.",
        choices: [
            { text: "Confront the mayor", next: 3 },
            { text: "Keep investigating quietly", next: 4 }
        ]
    },
    {
        text: "You decide to go home. Game Over.",
        choices: [
            { text: "Start over", next: 0 }
        ]
    },
    // Add more scenes as needed
];