const scrollOptions = {
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
};

function scrollToSection(sectionName) {
    const section = document.querySelector(`[name="${sectionName}"]`);
    section.scrollIntoView({
        ...scrollOptions,
        duration: 1000
    });
}

const config = {
    "scenarios": [{
        "keywords": {
            "required": ["like", "sport", "you"],
            "forbidden": ["not"]
        },
        "response": "No, I don't like sport."
    }, {
        "keywords": {
            "required": ["like", "sport", "you", "not"],
            "forbidden": []
        },
        "response": "No, I don't like sport."
    }, {
        "keywords": {
            "required": ["you", "like", "pizza", "music"],
            "forbidden": ["homework", "not", "hate"]
        },
        "response": "Yes, I enjoy pizza and music."
    }, {
        "keywords": {
            "required": ["you", "like", "minecraft"],
            "forbidden": ["not", "hate"]
        },
        "response": "I like to play minecraft."
    }, {
        "keywords": {
            "required": ["you", "love", "minecraft"],
            "forbidden": ["not", "hate"]
        },
        "response": "I like to play minecraft."
    }, {
        "keywords": {
            "required": ["you", "play", "minecraft"],
            "forbidden": ["not", "hate"]
        },
        "response": "I like to play minecraft."
    }, {
        "keywords": {
            "required": ["you", "have", "youtube"],
            "forbidden": ["not", "hate"]
        },
        "response": "I do have a youtube channel actually!"
    }, {
        "keywords": {
            "required": ["socials"],
            "forbidden": ["not", "hate"]
        },
        "response": "I have a youtube channel actually!"
    }, {
        "keywords": {
            "required": ["you", "like", "coding"],
            "forbidden": ["not", "hate"]
        },
        "response": "I love coding! That's how I made this website"
    }, {
        "keywords": {
            "required": ["how", "this", "website", "work"],
            "forbidden": ["not", "broken"]
        },
        "response": "So I check for any keywords and if there are certain keywords not and forbidden words, then I send a set response like this!   "
    }, {
        "keywords": {
            "required": ["hi"],
            "forbidden": []
        },
        "response": "Hello! You can ask me any question about Joe!"
    }, {
        "keywords": {
            "required": ["hello"],
            "forbidden": []
        },
        "response": "Hi! You can ask me any question about Joe!"
    }, {
        "keywords": {
            "required": ["tell", "about", 'jo', 'e'],
            "forbidden": []
        },
        "response": "Well, for starters, I like coding (That's how I made this!) and I love playing minecraft. I made an app for it actually! You can visit it <a href='https://jojoplayzmc.github.io/ModMine/'>here!</a>"
    }, {
        "keywords": {
            "required": ["tell", "about", 'you'],
            "forbidden": []
        },
        "response": "Well, for starters, I like coding (That's how I made this!) and I love playing minecraft. I made an app for it actually! You can visit it <a href='https://jojoplayzmc.github.io/ModMine/'>here!</a>"
    }, {
        "keywords": {
            "required": ["what","your","hobbies"],
            "forbidden": []
        },
        "response": "Well, for starters, I like coding (That's how I made this!) and I love playing minecraft. I made an app for it actually! You can visit it <a href='https://jojoplayzmc.github.io/ModMine/'>here!</a><br>Would you like to learn more? <button onclick='appendBotMessageWithAnimation('hi')''>Yes</button>"
    }]
};

function handleUserInput(event) {
    if (event.keyCode === 13) {
        const userInput = document.getElementById('user-input').value;
        const userInputLowercase = document.getElementById('user-input').value.toLowerCase();
        document.getElementById('user-input').value = '';
        const matchingScenario = findMatchingScenario(userInputLowercase);
        if (matchingScenario) {
            appendBotMessageWithAnimation(matchingScenario.response);
        } else {
            appendBotMessageWithAnimation("Sorry, I'm not sure what you mean");
        }
    }
}

function appendBotMessageWithAnimation(message) {
    const chatLog = document.getElementById('chat-log');
    const newBotMessage = document.createElement('div');
    newBotMessage.className = 'new-bot-message';
    newBotMessage.innerHTML = `<strong>Bot:</strong> ${message}`;
    chatLog.appendChild(newBotMessage);

    newBotMessage.addEventListener('animationend', () => {
        newBotMessage.classList.remove('new-bot-message');
    });
    botMessageElement.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
    });
}

function findMatchingScenario(userInput) {
    for (const scenario of config.scenarios) {
        if (checkKeywords(userInput, scenario.keywords)) {
            return scenario;
        }
    }
    return null;
}

function checkKeywords(userInput, keywords) {
    const words = userInput.split(' ');
    const requiredKeywords = keywords.required;
    const forbiddenKeywords = keywords.forbidden;
    if (requiredKeywords.every(keyword => words.some(word => word.includes(keyword))) && !forbiddenKeywords.some(keyword => words.some(word => word.includes(keyword)))) {
        return true;
    }
    return false;
}

function appendToChatLog(userMessage, botMessage) {
    const chatLog = document.getElementById('chat-log');

    const userMessageElement = document.createElement('div');
    userMessageElement.innerHTML = `<strong>You:</strong> ${userMessage}`;
    chatLog.appendChild(userMessageElement);

    const botMessageElement = document.createElement('div');
    botMessageElement.innerHTML = `<strong>Bot:</strong> ${botMessage}`;
    chatLog.appendChild(botMessageElement);
    botMessageElement.scrollIntoView({
        behavior: 'smooth',
        block: 'end'
    });
}