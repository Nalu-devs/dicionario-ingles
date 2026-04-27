const defaultDictionary = [
    {
        word: "apple",
        pronunciation: "/ˈæp.əl/",
        partOfSpeech: "noun",
        definition: "A round fruit with red or green skin and white flesh.",
        example: "She ate a fresh apple from the tree.",
        translation: "Maçã"
    },
    {
        word: "book",
        pronunciation: "/bʊk/",
        partOfSpeech: "noun",
        definition: "A written or printed work consisting of pages.",
        example: "I am reading a good book about history.",
        translation: "Livro"
    },
    {
        word: "brother",
        pronunciation: "/ˈbrʌð.ər/",
        partOfSpeech: "noun",
        definition: "A male sibling; a man or boy who shares the same parents as another person.",
        example: "My brother lives in London.",
        translation: "Irmão"
    },
    {
        word: "cat",
        pronunciation: "/kæt/",
        partOfSpeech: "noun",
        definition: "A small domesticated feline animal kept as a pet.",
        example: "The cat is sleeping on the couch.",
        translation: "Gato"
    },
    {
        word: "city",
        pronunciation: "/ˈsɪt.i/",
        partOfSpeech: "noun",
        definition: "A large town or important urban center.",
        example: "Paris is a beautiful city.",
        translation: "Cidade"
    },
    {
        word: "computer",
        pronunciation: "/kəmˈpjuː.tər/",
        partOfSpeech: "noun",
        definition: "An electronic device for storing and processing data.",
        example: "I use my computer for work every day.",
        translation: "Computador"
    },
    {
        word: "dog",
        pronunciation: "/dɒɡ/",
        partOfSpeech: "noun",
        definition: "A domesticated canine animal kept as a pet.",
        example: "The dog is playing in the garden.",
        translation: "Cão"
    },
    {
        word: "door",
        pronunciation: "/dɔːr/",
        partOfSpeech: "noun",
        definition: "A movable barrier that closes an entrance.",
        example: "Please open the door for me.",
        translation: "Porta"
    },
    {
        word: "email",
        pronunciation: "/ˈiː.meɪl/",
        partOfSpeech: "noun",
        definition: "Messages sent electronically over the internet.",
        example: "I sent her an email yesterday.",
        translation: "E-mail"
    },
    {
        word: "family",
        pronunciation: "/ˈfæm.əl.i/",
        partOfSpeech: "noun",
        definition: "A group of related people including parents and children.",
        example: "My family gathers every Sunday.",
        translation: "Família"
    },
    {
        word: "father",
        pronunciation: "/ˈfɑː.ðər/",
        partOfSpeech: "noun",
        definition: "A male parent.",
        example: "My father taught me how to ride a bike.",
        translation: "Pai"
    },
    {
        word: "first name",
        pronunciation: "/fɜːrst neɪm/",
        partOfSpeech: "noun",
        definition: "The given name; the name that precedes the surname.",
        example: "Her first name is Sarah.",
        translation: "Primeiro nome"
    },
    {
        word: "friend",
        pronunciation: "/frend/",
        partOfSpeech: "noun",
        definition: "A person with whom one has a bond of mutual affection.",
        example: "She's been my best friend for ten years.",
        translation: "Amigo"
    },
    {
        word: "full name",
        pronunciation: "/fʊl neɪm/",
        partOfSpeech: "noun",
        definition: "The complete name of a person, including first and last names.",
        example: "Please enter your full name in the form.",
        translation: "Nome completo"
    },
    {
        word: "goodbye",
        pronunciation: "/ˌɡʊdˈbaɪ/",
        partOfSpeech: "exclamation",
        definition: "A farewell expression used when parting.",
        example: "Goodbye! See you tomorrow!",
        translation: "Adeus"
    },
    {
        word: "hat",
        pronunciation: "/hæt/",
        partOfSpeech: "noun",
        definition: "A covering for the head.",
        example: "He wore a nice hat to the party.",
        translation: "Chapéu"
    },
    {
        word: "hello",
        pronunciation: "/həˈloʊ/",
        partOfSpeech: "exclamation",
        definition: "A greeting used when meeting someone.",
        example: "Hello, nice to meet you!",
        translation: "Olá"
    },
    {
        word: "house",
        pronunciation: "/haʊs/",
        partOfSpeech: "noun",
        definition: "A building where people live.",
        example: "They bought a new house last year.",
        translation: "Casa"
    },
    {
        word: "last name",
        pronunciation: "/lɑːst neɪm/",
        partOfSpeech: "noun",
        definition: "The surname; the family name.",
        example: "Smith is a common last name.",
        translation: "Sobrenome"
    },
    {
        word: "learn",
        pronunciation: "/lɜːrn/",
        partOfSpeech: "verb",
        definition: "To gain knowledge or skill.",
        example: "I want to learn Spanish this year.",
        translation: "Aprender"
    },
    {
        word: "library",
        pronunciation: "/ˈlaɪ.brer.i/",
        partOfSpeech: "noun",
        definition: "A building or room containing books for reading.",
        example: "I went to the library to study.",
        translation: "Biblioteca"
    },
    {
        word: "love",
        pronunciation: "/lʌv/",
        partOfSpeech: "noun",
        definition: "An intense feeling of deep affection.",
        example: "She has great love for her children.",
        translation: "Amor"
    },
    {
        word: "middle name",
        pronunciation: "/ˈmɪdl neɪm/",
        partOfSpeech: "noun",
        definition: "A name between one's first name and surname.",
        example: "William's middle name is Jefferson.",
        translation: "Nome do meio"
    },
    {
        word: "mother",
        pronunciation: "/ˈmʌð.ər/",
        partOfSpeech: "noun",
        definition: "A female parent.",
        example: "My mother makes the best food.",
        translation: "Mãe"
    },
    {
        word: "music",
        pronunciation: "/ˈmjuː.zɪk/",
        partOfSpeech: "noun",
        definition: "The art of combining sounds to create beauty.",
        example: "I love listening to classical music.",
        translation: "Música"
    },
    {
        word: "name",
        pronunciation: "/neɪm/",
        partOfSpeech: "noun",
        definition: "A word or words by which a person or thing is known.",
        example: "What is your name?",
        translation: "Nome"
    },
    {
        word: "please",
        pronunciation: "/pliːz/",
        partOfSpeech: "exclamation",
        definition: "Used to make a polite request.",
        example: "Please help me with this task.",
        translation: "Por favor"
    },
    {
        word: "school",
        pronunciation: "/skuːl/",
        partOfSpeech: "noun",
        definition: "An institution for educating children or students.",
        example: "The children go to school every day.",
        translation: "Escola"
    },
    {
        word: "sister",
        pronunciation: "/ˈsɪs.tər/",
        partOfSpeech: "noun",
        definition: "A female sibling.",
        example: "My sister lives in Brazil.",
        translation: "Irmã"
    },
    {
        word: "table",
        pronunciation: "/ˈteɪ.bəl/",
        partOfSpeech: "noun",
        definition: "A piece of furniture with a flat top and legs.",
        example: "We sat around the table for dinner.",
        translation: "Mesa"
    },
    {
        word: "thank you",
        pronunciation: "/θæŋk juː/",
        partOfSpeech: "exclamation",
        definition: "An expression of gratitude.",
        example: "Thank you for your help!",
        translation: "Obrigado"
    },
    {
        word: "water",
        pronunciation: "/ˈwɔː.tər/",
        partOfSpeech: "noun",
        definition: "A clear liquid essential for life.",
        example: "Please drink more water.",
        translation: "Água"
    },
    {
        word: "yes",
        pronunciation: "/jes/",
        partOfSpeech: "exclamation",
        definition: "An affirmative response.",
        example: "Yes, I would like some coffee.",
        translation: "Sim"
    }
];

function getDictionary() {
    return [...defaultDictionary];
}

function saveDictionary(dict) {
    localStorage.setItem('userWords', JSON.stringify(dict));
}

let userWords = [];

function loadUserWords() {
    const stored = localStorage.getItem('userWords');
    if (stored) {
        userWords = JSON.parse(stored);
    }
}

let dictionary = [];

function initDictionary() {
    loadUserWords();
    const combined = [...defaultDictionary, ...userWords];
    combined.sort((a, b) => a.word.localeCompare(b.word));
    dictionary = combined;
}

function addWord(entry) {
    userWords.push(entry);
    saveDictionary(userWords);
    initDictionary();
}

function createEntryElement(entry) {
    const exampleText = entry.example.replace(/"/g, '');
    const div = document.createElement('div');
    div.className = 'entry';
    div.innerHTML = `
        <div class="word-header">
            <span class="word">${entry.word}</span>
            <span class="pronunciation">${entry.pronunciation}</span>
        </div>
        <div class="audio-controls">
            <button class="play-btn" data-word="${entry.word}" title="Play">&#9654;</button>
            <select class="speed-select">
                <option value="0.5">Slow</option>
                <option value="1" selected>Normal</option>
                <option value="1.5">Fast</option>
            </select>
        </div>
        <div class="part-of-speech">${entry.partOfSpeech}</div>
        <div class="definition">
            <p>${entry.definition}</p>
            <p class="example">
                "${entry.example}"
                <button class="play-btn play-example" data-word="${exampleText}" title="Play example">&#9654;</button>
            </p>
        </div>
        <div class="translation">${entry.translation}</div>
    `;
    return div;
}

function renderEntries(entries) {
    const container = document.getElementById('entries');
    if (!container) return;
    container.innerHTML = '';
    entries.forEach(entry => {
        container.appendChild(createEntryElement(entry));
    });
}

function filterEntries(query) {
    const normalizedQuery = query.toLowerCase().trim();
    if (!normalizedQuery) return dictionary;
    return dictionary.filter(entry => 
        entry.word.includes(normalizedQuery) || 
        entry.translation.toLowerCase().includes(normalizedQuery)
    );
}

function handleSearch() {
    const query = document.getElementById('searchInput').value;
    const filtered = filterEntries(query);
    renderEntries(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
    try {
        initDictionary();
        renderEntries(dictionary);

        const searchBtn = document.getElementById('searchBtn');
        const searchInput = document.getElementById('searchInput');
        const addWordForm = document.getElementById('addWordForm');

        if (searchBtn && searchInput) {
            searchBtn.addEventListener('click', handleSearch);
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') handleSearch();
            });
        }

        if (addWordForm) {
            addWordForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const newEntry = {
                    word: document.getElementById('newWord').value.toLowerCase(),
                    pronunciation: document.getElementById('newPronunciation').value,
                    partOfSpeech: document.getElementById('newPartOfSpeech').value,
                    definition: document.getElementById('newDefinition').value,
                    example: document.getElementById('newExample').value,
                    translation: document.getElementById('newTranslation').value
                };
                
                addWord(newEntry);
                
                e.target.reset();
                
                alert('Word added successfully!');
            });
        }
    } catch (err) {
        console.error('Error:', err);
    }
});

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('play-btn')) {
        const word = e.target.dataset.word;
        let rate = 1;
        
        const entryDiv = e.target.closest('.entry');
        if (entryDiv) {
            const speedSelect = entryDiv.querySelector('.speed-select');
            if (speedSelect) {
                rate = parseFloat(speedSelect.value);
            }
        }
        
        speakWord(word, rate);
    }
});

function speakWord(text, rate = 1) {
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        utterance.rate = rate;
        utterance.pitch = 1;
        
        utterance.onend = () => {};
        
        speechSynthesis.speak(utterance);
    } else {
        alert('Your browser does not support text-to-speech.');
    }
}