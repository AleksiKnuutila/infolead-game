const gameData = 
[
    {
        "id": "0",
        "type": "choice",
        "text": "Hey, how is it going? Welcome!",
        "choices": [
            {
                "text": "Oh hey",
                "next": "1",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "Uhh who are you?",
                "next": "2",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "1",
        "type": "choice",
        "text": "Great to meet you! I'm Jamie, the HR director. You're here to start your new position as VP of Information Disorder Responses at Connectopia, America's fastest-growing social media platform. Excited to have you on board!",
        "choices": [
            {
                "text": "Thanks, I'm excited to be here!",
                "next": "3",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "Sounds challenging. What exactly am I supposed to do?",
                "next": "3",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "2",
        "type": "choice",
        "text": "Oh, I'm sorry for not introducing myself! I'm Jamie, I'm the Assistant Resilient Strategist you will be working with. You're here to start your new position as VP of Information Disorder Management at Connectopia, America's fastest-growing social media platform. We've been expecting you!",
        "choices": [
            {
                "text": "Ah, I see. Nice to meet you, Jamie.",
                "next": "3",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "Right, of course. Let's get started then.",
                "next": "3",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "20",
        "type": "choice",
        "text": "Alright, we've got another situation on our hands. There's a Korean poem causing quite a stir on our platform. How would you like to approach this?",
        "choices": [
            {
                "text": "Tell me more about it, Jamie",
                "next": "21",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "Why is this controversial?",
                "next": "22",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "21",
        "type": "choice",
        "text": "Well, the poem is about the proposed relocation of a bust of General Hong Beom-Do. He was a big deal in early 20th-century Korea, leading the Korean Independence Army against Japanese forces.",
        "choices": [
            {
                "text": "Why is this causing controversy?",
                "next": "22",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "What happened with the post?",
                "next": "24",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "22",
        "type": "choice",
        "text": "The controversy stems from the use of the term 'wae-nom' in the poem. It literally means 'person from Japan,' but it's often used as a derogatory term, especially in historical contexts.",
        "choices": [
            {
                "text": "Can you brief me on our content policy?",
                "next": "23",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "What happened with the post?",
                "next": "24",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "23",
        "type": "choice",
        "text": "ur content policy is pretty clear that hate speech isn't allowed. But it gets tricky when we have to determine which words are actually derogatory about groups and which aren't. It's a delicate balance between free expression and preventing harm.",
        "choices": [
            {
                "text": "What happened with this particular post?",
                "next": "24",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "Have we dealt with something like this before?",
                "next": "25",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "24",
        "type": "choice",
        "text": "Initially, we removed the content for violating our Hate Speech policy. But that decision caused quite a scandal, and now more users are posting the poem in protest.",
        "choices": [
            {
                "text": "Have we had similar cases before?",
                "next": "25",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "What do you think we should do now?",
                "next": "26",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "25",
        "type": "choice",
        "text": "Yes, we've had a few similar cases. Remember the Russian Poem case? We initially removed a post insulting Russians and comparing their army to Nazis. The Board overturned that decision, emphasizing the importance of context.",
        "choices": [
            {
                "text": "Tell me more",
                "next": "25a",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "What should we do now?",
                "next": "26",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "25a",
        "type": "choice",
        "text": "We've also seen cases like 'Reclaiming Arabic Words' where cultural and linguistic misunderstandings led to improper enforcement of our policies. It's a complex issue.",
        "choices": [
            {
                "text": "What should we do now?",
                "next": "26",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "Why is this escalated to me?",
                "next": "26a",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "26",
        "type": "choice",
        "text": "Well, here's the thing. Our Oversight Board has reviewed the situation and ruled against our earlier decision to remove the content. We need to decide how to handle this.",
        "choices": [
            {
                "text": "What's the Oversight Board?",
                "next": "27",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "What are our options?",
                "next": "28",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "26a",
        "type": "choice",
        "text": "This case has been escalated to you because our Oversight Board has reviewed it and ruled against our earlier decision to remove the content. It's a big deal.",
        "choices": [
            {
                "text": "What's the Oversight Board?",
                "next": "27",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "What are our options?",
                "next": "28",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "27",
        "type": "choice",
        "text": "The Oversight Board is an independent body that reviews our content moderation decisions. They make binding decisions on whether specific content should be allowed or removed.",
        "choices": [
            {
                "text": "What are our options?",
                "next": "28",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "Let's make a decision",
                "next": "28",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "28",
        "type": "choice",
        "text": "We have two main options here. We can either stand by our original policy or revise it to account for cultural context. What do you think?",
        "choices": [
            {
                "text": "Stand by our original policy",
                "next": "29",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "Revise our policy for cultural context",
                "next": "30a",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "29",
        "type": "choice",
        "text": "Alright, you've decided to stand by the original policy. This might maintain consistency, but I should warn you, it could lead to more controversies and user dissatisfaction.",
        "choices": [
            {
                "text": "Let's see how this plays out",
                "next": "32",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "3",
        "type": "choice",
        "text": "Great! Now, let's jump right in. A memo just arrived on your desk. It seems that Connectopia has a new AI system for fighting bots by identifying coordinated behaviour. The problem is: It is flagging tourists' selfies in front of famous landmarks as \"suspicious repetitive behavior\"! Travel bloggers and tourism boards are up in arms. What do you want to do?",
        "choices": [
            {
                "text": "Adjust the AI to ignore tourist hotspots",
                "next": "4",
                "profitChange": -20,
                "legitimacyChange": 10
            },
            {
                "text": "Keep the current AI settings",
                "next": "5",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "30a",
        "type": "choice",
        "text": "Before we make a final decision, I think we should review how this moderation decision was made in the first place. What do you say?",
        "choices": [
            {
                "text": "How was this moderated?",
                "next": "30b",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "Let's just decide",
                "next": "28",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "30b",
        "type": "choice",
        "text": "Well, our moderation is outsourced. The moderators don't necessarily speak Korean; content is automatically translated. We use a list of derogatory terms for groups of people that was created two years ago.",
        "choices": [
            {
                "text": "Can we make a press release about this?",
                "next": "30c",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "Can we hire more moderators quietly?",
                "next": "30d",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "30c",
        "type": "choice",
        "text": "A press release could be a good idea. What should we focus on in the statement?",
        "choices": [
            {
                "text": "Consult Korean cultural representatives",
                "next": "30e",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "Train moderators on local culture",
                "next": "30f",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "30d",
        "type": "choice",
        "text": "Alright, we'll hire more moderators to handle these issues, but keep it low-key. Just keep in mind, this might improve moderation quality but won't address the public concern.",
        "choices": [
            {
                "text": "Let's see how this plays out",
                "next": "30g",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "30e",
        "type": "choice",
        "text": "Okay, we'll announce that we'll consult representatives of different cultural groups in Korea. This shows commitment to understanding, but it might raise expectations.",
        "choices": [
            {
                "text": "Let's see how this plays out",
                "next": "30g",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "30f",
        "type": "choice",
        "text": "Alright, we'll announce that we'll train moderators on local culture. This demonstrates a proactive approach, but it might be seen as insufficient by some.",
        "choices": [
            {
                "text": "Let's see how this plays out",
                "next": "30g",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "On second thought, let's reconsider",
                "next": "30c",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "30g",
        "type": "choice",
        "text": "Well, despite our efforts, there's further mockery of our social media policies online. The situation has become more complex.",
        "choices": [
            {
                "text": "Let's move on to the next challenge",
                "next": "35",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "32",
        "type": "choice",
        "text": "Based on your decision, here's what happened: (The game would provide different outcomes based on the choice made)",
        "choices": [
            {
                "text": "I think we're done for today",
                "next": "35",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "34",
        "type": "choice",
        "text": "(Next challenge would start here)",
        "choices": []
    },
    {
        "id": "35",
        "type": "choice",
        "text": "Thanks for your hard work today! Let's call it a day and continue tomorrow.",
        "choices": [
            {
                "text": "OK see you tomorrow",
                "next": "section2",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "36",
        "type": "choice",
        "text": "Thank you for your time! We hope this experience has given you insights into the challenges of social media content moderation. Have a great day!",
        "choices": []
    },
    {
        "id": "4",
        "type": "choice",
        "text": "So, we tweaked the AI. Good news: tourists are back to flooding feeds with landmark selfies. Bad news: some spam's sneaking through now. Users are happier, but our content quality? Let's just say it's seen better days. Some people are turning away from the Connectopia, and our profits took a hit.",
        "choices": [
            {
                "text": "Oh great",
                "next": "20",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "Oh no",
                "next": "20",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "5",
        "type": "choice",
        "text": "We kept the AI as is. The platform's squeaky clean now, but our travel sector numbers? Yikes. It's like we've become the fun police of tourism. Content quality's up, but we have a lot of angry people accusing us of using biased automated system. Our legitimacy took a hit.",
        "choices": [
            {
                "text": "Oh great",
                "next": "20",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "Oh no",
                "next": "20",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "beginning",
        "type": "section_break",
        "text": "Welcome to social media middle management! Can you steer your platform without getting into a crisis?",
        "choices": [
            {
                "text": "Start the game",
                "next": "0",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "section",
        "type": "choice",
        "text": "Fill in here",
        "choices": []
    },
    {
        "id": "section2",
        "type": "section_break",
        "text": "Section change: Generative AI and elections",
        "choices": [
            {
                "text": "Let's go!",
                "next": "section2_1",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "section2_1",
        "type": "choice",
        "text": "Good morning! Jamie here again. Ready to tackle some digital drama? I hope you've had your coffee because we've got a doozy waiting for you!",
        "choices": [
            {
                "text": "Bring it on, Jamie! I'm caffeinated and ready to go!",
                "next": "section2_2",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "section2_2",
        "type": "choice",
        "text": "There's an election in New Zealand. Two parties are neck and neck. One just created attack ads on our platform targeting the other party.",
        "choices": [
            {
                "text": "How does this affect us?",
                "next": "section2_3",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "What's the problem?",
                "next": "section2_3",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "section2_3",
        "type": "choice",
        "text": "These attack ads? They're not your garden-variety mudslinging. They're using generative AI to create their content. That's right, we're talking deepfakes, voice cloning, the whole shebang.",
        "choices": [
            {
                "text": "Generative whatnow? I feel like I need a tech dictionary just to keep up!",
                "next": "section2genexp",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "Please tell me we have a rule against fake political media?",
                "next": "section2rules",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "section2auto",
        "type": "choice",
        "text": "We're on it! I've reassigned our top engineers to this task. They're working around the clock to develop an algorithm that can detect AI-generated content more effectively. It's a big undertaking, but if anyone can do it, it's our team.",
        "choices": [
            {
                "text": "Great! That should solve it.",
                "next": "section2auto2",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "I hope this works...",
                "next": "section2auto2",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "section2auto2",
        "type": "choice",
        "text": "Well, our engineering team delivered, but it seems we've hit a snag. Users have started trying to outsmart our new algorithm. They're deliberately creating content that triggers our AI detection, even when it's actually real. On top of that, they're making a spectacle of every genuine piece of media that gets incorrectly flagged as fake. It's turning into a game of \"catch the AI\" out there, and we're not exactly winning.",
        "choices": [
            {
                "text": "Well, that backfired spectacularly.",
                "next": "section 3",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "Back to the drawing board, I guess.",
                "next": "section 3",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "section2ban",
        "type": "choice",
        "text": "What do you suggest?",
        "choices": [
            {
                "text": "Make an example of this political campaign, ban it",
                "next": "section2bancampaign",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "Ban all deepfake content across the platform",
                "next": "section2bandeepfake",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "section2bancampaign",
        "type": "choice",
        "text": "Alright, we're taking action. I'll go ahead and freeze the account of the political campaign in question. We'll cite a policy violation as the reason. It's a bold move, but sometimes you need to show you mean business.",
        "choices": [
            {
                "text": "Well that should do it!",
                "next": "section2bancampaign2",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "section2bancampaign2",
        "type": "choice",
        "text": "The campaign we banned has pulled a complete 180. They're now positioning themselves as free speech warriors, crusading against the \"tyranny of foreign tech giants.\" Their new campaign slogan? \"Defending Democracy from Digital Dictators.\" And get this - they've created these wild protest placards featuring your face... but they've given you a lizard makeover. Apparently, you're now the poster child for the \"reptilian tech overlords.\"",
        "choices": [
            {
                "text": "Great, I always wanted to be a dinosaur when I grew up.",
                "next": "section 3",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "Do you think the lizard me has better approval ratings?",
                "next": "section 3",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "section2bandeepfake",
        "type": "choice",
        "text": "Alright, we're going nuclear on this one. I'll put in a request to update our company policy, removing the parody and satire exception for deepfakes. We'll draft a press release explaining that this is a necessary step in our ongoing fight against misinformation. We'll frame it as us taking a stand for truth in the digital age.",
        "choices": [
            {
                "text": "OK that should solve it!",
                "next": "section2bandeepfake2",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "I hope we're not overreacting...",
                "next": "section2bandeepfake2",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "section2bandeepfake2",
        "type": "choice",
        "text": "Well, our ban on deepfakes has certainly made waves, but not quite the ones we expected. Turns out, we've accidentally outlawed half the internet's favorite memes. Our users are in an uproar because they can't post their favorite \"Singing Biden\" videos or \"Shakespeare reads mean tweets\" clips anymore. Oh, and remember that blockbuster movie franchise that uses de-aging tech? Yeah, we had to take down all their promotional content.",
        "choices": [
            {
                "text": "Great, we've become the fun police.",
                "next": "section 3",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "Maybe we should've thought this through a bit more...",
                "next": "section 3",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "section2biggerflags",
        "type": "choice",
        "text": "We've enhanced the visibility of our AI content flags. Now, every piece of AI-generated content is marked with a prominent banner that clearly states \"AI-GENERATED CONTENT.\" We've increased the size of the warning text and added a distinct border around these posts. The flags are now much more noticeable, but we've tried to keep them from being too disruptive to the user experience.",
        "choices": [
            {
                "text": "Glad I managed to solve that!",
                "next": "section2biggerflags2",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "section2biggerflags2",
        "type": "choice",
        "text": "Well, the results are in, and they're... mixed. The good news is that engagement on deepfake ads has plummeted. Turns out, people aren't too keen on content that comes with a giant \"AI-GENERATED\" banner. The bad news? We're getting some pretty heated calls from the political campaigns. They're not thrilled that their carefully crafted (albeit AI-generated) messages are being ignored.",
        "choices": [
            {
                "text": "Well, you can't make an omelet without breaking a few eggs.",
                "next": "section 3",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "Maybe we should've stuck to cat videos after all.",
                "next": "section 3",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "section2campaigns",
        "type": "choice",
        "text": "Well guess what. The campaign is now claiming that all their AI-generated content is \"obviously satire.\" According to them, they're well within our platform guidelines. We're in a bit of a pickle here - do we take their claim at face value, or do we risk being accused of selective enforcement?",
        "choices": [
            {
                "text": "Ah! Well what about banning all deepfakes, also satire?",
                "next": "section2parody",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "Is there any way to make the deepfakes more obvious to people?",
                "next": "section2flags",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "section2flags",
        "type": "choice",
        "text": "One solution we've committed to is placing \"Made with AI\" flags on all AI-generated content. This way, users should be able to easily identify when they're viewing synthetic content. The idea is to maintain transparency and help our users make informed decisions about the content they consume. It's not a perfect solution, but it's a step towards greater clarity on our platform.",
        "choices": [
            {
                "text": "Well that will certainly solve it!",
                "next": "section2flags2",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "Do we actually apply the flags",
                "next": "section2flags2",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "section2flags2",
        "type": "choice",
        "text": "Some diligent researchers have been combing through our platform and their findings are... not great. They've discovered a significant amount of AI-generated content that isn't properly flagged. It seems our current flagging system isn't as effective as we hoped. This raises questions about the practicality and enforcement of our AI content policy.",
        "choices": [
            {
                "text": "Could we just make the flags bigger",
                "next": "section2improveflags",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "We better crack down on fake content",
                "next": "section2ban",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "section2genexp",
        "type": "choice",
        "text": "Generative AI is a type of artificial intelligence that can create new content, including realistic audio and video. It can make it appear as if real people are saying or doing things they never actually said or did. For example, it could create a video of a politician giving a speech they never gave, or an audio clip of a celebrity endorsing a product they've never supported.",
        "choices": [
            {
                "text": "Oh yes I've heard of this",
                "next": "section2rules",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "Can't believe anything anymore these days!",
                "next": "section2rules",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "section2improveflags",
        "type": "choice",
        "text": "What exactly do you suggest?",
        "choices": [
            {
                "text": "Hire people to improve automatic detection",
                "next": "section2auto",
                "profitChange": 0,
                "legitimacyChange": 0
            },
            {
                "text": "Make the flags bigger and flashier",
                "next": "section2biggerflags",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "section2parody",
        "type": "choice",
        "text": "Well, here's the thing: parody and satire are actually widely used tools in political campaigns and by activist groups. They're often seen as protected forms of speech and can be powerful ways to make political points or criticize opponents. If we ban all deepfakes, including satirical ones, we might face backlash from users who see this as censorship of legitimate political discourse. It's a tricky balance between preventing misinformation and allowing free expression.",
        "choices": [
            {
                "text": "Is there any way to make the deepfakes more obvious to people?",
                "next": "section2flags",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    },
    {
        "id": "section2rules",
        "type": "choice",
        "text": "Our platform rules are pretty clear on this: creating fake videos of people in a deceptive manner is not allowed. However, we do have an exception for satire and parody. The catch is, these satirical or parodic deepfakes need to be obvious in their intent and properly flagged as such. It's our way of trying to balance free expression with the prevention of harmful misinformation.",
        "choices": [
            {
                "text": "Does that mean we can ban deepfake campaign ads?",
                "next": "section2campaigns",
                "profitChange": 0,
                "legitimacyChange": 0
            }
        ]
    }
];


export default gameData;