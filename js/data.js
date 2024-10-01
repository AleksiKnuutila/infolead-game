const gameData = [
    {
        id: "beginning",
        type: "section_break",
        text: "Welcome to social media middle management! Can you steer your platform without getting into a crisis?",
        choices: [
            { text: "Start the game", next: 0 },
        ]
    },
    {
        id: 0,
        type: "choice",
        text: "Hey, how is it going? Welcome!",
        choices: [
            { text: "Oh hey", next: 1, profitChange: 0, legitimacyChange: 0 },
            { text: "Uhh who are you?", next: 2, profitChange: 0, legitimacyChange: 0 }
        ]
    },
    {
        id: 1,
        text: "Great to meet you! I'm Sarah, the HR director. You're here to start your new position as VP of Information Disorder Management at Connectopia, America's fastest-growing social media platform. Excited to have you on board!",
        type: "choice",
        choices: [
            { text: "Thanks, I'm excited to be here!", next: 3, profitChange: 0, legitimacyChange: 0 },
            { text: "Sounds challenging. What exactly am I supposed to do?", next: 3, profitChange: 0, legitimacyChange: 0 }
        ]
    },
    {
        id: 2,
        text: "Oh, I'm sorry for not introducing myself! I'm Sarah, the HR director. You're here to start your new position as VP of Information Disorder Management at Connectopia, America's fastest-growing social media platform. We've been expecting you!",
        type: "choice",
        choices: [
            { text: "Ah, I see. Nice to meet you, Sarah.", next: 3, profitChange: 0, legitimacyChange: 0 },
            { text: "Right, of course. Let's get started then.", next: 3, profitChange: 0, legitimacyChange: 0 }
        ]
    },
    {
        id: 3,
        text: "Great! Now, let's jump right in. A memo just arrived on your desk. It seems some posts are going viral, spreading false claims about government policy in a small Eastern European country. The government is pressuring us to take action. What do you want to do?",
        type: "choice",
        choices: [
            { text: "Add an exception to deamplify these posts", next: 4, profitChange: -5, legitimacyChange: 10 },
            { text: "Allow the posts to circulate normally", next: 5, profitChange: 5, legitimacyChange: -10 }
        ]
    },
    {
        id: 4,
        text: "You've decided to deamplify the posts. The government appreciates your action, but some users are complaining about censorship. Oh look, your legitimacy has increased, but profit has taken a small hit.",
        type: "choice",
        choices: [
            { text: "Oh great", next: 20, profitChange: 0, legitimacyChange: 0 },
            { text: "Oh no", next: 20, profitChange: 0, legitimacyChange: 0 },
        ]
    },
    {
        id: 5,
        text: "You've allowed the posts to circulate. User engagement has increased, boosting ad revenue, but the government is not happy. Oh look, your profit has increased, but legitimacy has taken a hit.",
        type: "choice",
        choices: [
            { text: "Oh great", next: 20, profitChange: 0, legitimacyChange: 0 },
            { text: "Oh no", next: 20, profitChange: 0, legitimacyChange: 0 },
        ]
    },
    {
        id: 20,
        text: "A new issue has arisen. Facebook removed an image of a Korean poem called 'The Scream of General Hong Beom-Do', which criticizes an attempt by the authorities to relocate the bust of the general. What do you want to do?",
        type: "choice",
        choices: [
            { text: "Ask why it was removed", next: 21, profitChange: 0, legitimacyChange: 0 },
            { text: "Did anyone notice it was removed?", next: 22, profitChange: 0, legitimacyChange: 0 }
        ]
    },
    {
        id: 21,
        text: "The poem artistically expresses Hong Beom-Do’s sentiment on the proposed relocation of his bust, and it includes the term 'wae-nom' (왜놈), which literally translates as 'person from Japan.' However, it was historically used by Koreans as a general term to refer to Japanese invaders during the Japanese occupation of Korea. Over the years since, it has been frequently employed as an offensive, derogatory term meaning 'Japanese bastards' or bad people. The post was viewed less than 500 times.",
        type: "choice",
        choices: [
            { text: "Did anyone notice it was removed?", next: 22, profitChange: 0, legitimacyChange: 0 }
        ]
    },
    {
        id: 22,
        text: "Lee Dong Soon also posted the poem on Facebook, but it was removed by Meta for violating its Hate Speech policy, a move that caused controversy. After the poem was taken down, users began a movement to share the poem more widely on Facebook.",
        type: "choice",
        choices: [
            { text: "Has something similar happened before?", next: 23, profitChange: 0, legitimacyChange: 0 }
        ]
    },
    {
        id: 23,
        text: "This case bears similarities to a prior decision, the Russian Poem case, in which the Board overturned Meta’s initial decision to remove a post under its Hate Speech policy that insulted Russians and compared the Russian army invading Ukraine to Nazis. In this decision, the Board noted that failure during content moderation at-scale to consider the context of Russia’s invasion of Ukraine hindered users’ abilities to express views on public interest issues. The Board has also observed in multiple cases, such as in the Reclaiming Arabic Words and Praise Be to God decisions, that problems of cultural and linguistic misunderstanding can lead to improper enforcement of Meta’s policies.",
        type: "choice",
        choices: [
            { text: "Stand by policy", next: 24, profitChange: 5, legitimacyChange: -10 },
            { text: "Improve moderation", next: 25, profitChange: -10, legitimacyChange: 15 }
        ]
    },
    {
        id: 24,
        text: "You've decided to stand by the current policy. This decision has boosted short-term profits, but has been criticized by the public and experts, decreasing your legitimacy.",
        type: "choice",
        choices: [
            { text: "Oh great", next: 30, profitChange: 0, legitimacyChange: 0 },
        ]
    },
    {
        id: 25,
        text: "You've decided to improve moderation. How would you like to proceed?",
        type: "choice",
        choices: [
            { text: "Hire more people", next: 28, profitChange: -15, legitimacyChange: 20 },
            { text: "Improve enforcement with cultural context", next: 29, profitChange: -10, legitimacyChange: 15 }
        ]
    },
    {
        id: 28,
        text: "You've decided to hire more people to improve moderation. This decision has been well-received by the public and experts, increasing your legitimacy. However, the increased operational costs have affected short-term profits.",
        type: "choice",
        choices: [
            { text: "Oh great", next: 30, profitChange: 0, legitimacyChange: 0 },
        ]
    },
    {
        id: 29,
        text: "You've decided to improve enforcement of Meta’s Hate Speech policy with relevant cultural context. This decision has been well-received by the public and experts, increasing your legitimacy. However, the changes have caused some operational costs, affecting short-term profits.",
        type: "choice",
        choices: [
            { text: "Oh great", next: 30, profitChange: 0, legitimacyChange: 0 },
        ]
    },
    {
        id: 30,
        type: "section_break",
        text: "You have completed the first section on content moderation dilemmas. To read more about the topic, click here...",
        choices: [
            { text: "Continue", next: 31 },
        ]
    },
    {
        id: 31,
        type: "section_break",
        text: "You have reached the end of the game! You gained 1,234 points in total! Can your friend beat you?",
        choices: [
            { text: "Share with friends", next: 0 },
            { text: "Play again", next: 0 },
        ]
    },
    // ... Add more scenarios as needed
];

export default gameData;