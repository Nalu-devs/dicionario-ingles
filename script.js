const dictionary = [
    {
        word: "full name",
        pronunciation: "/fʊl neɪm/",
        partOfSpeech: "noun",
        definition: "The complete name of a person, including first and last names.",
        example: "Please enter your full name in the form below.",
        translation: "Nome completo"
    },
    {
        word: "first name",
        pronunciation: "/fɜːrst neɪm/",
        partOfSpeech: "noun",
        definition: "The given name; the name that precedes the surname in a person's full name.",
        example: "Her first name is Sarah.",
        translation: "Primeiro nome"
    },
    {
        word: "middle name",
        pronunciation: "/ˈmɪdl neɪm/",
        partOfSpeech: "noun",
        definition: "A name between one's first name and surname, often inherited from a family member.",
        example: "William's middle name is Jefferson.",
        translation: "Nome do meio"
    },
    {
        word: "last name",
        pronunciation: "/lɑːst neɪm/",
        partOfSpeech: "noun",
        definition: "The surname; the family name that is shared by members of a family.",
        example: "Smith is a common last name.",
        translation: "Sobrenome"
    },
    {
        word: "hi",
        pronunciation: "/haɪ/",
        partOfSpeech: "exclamation",
        definition: "An informal greeting used to say hello.",
        example: "Hi! How are you today?",
        translation: "Oi"
    },
    {
        word: "hello",
        pronunciation: "/həˈloʊ/",
        partOfSpeech: "exclamation",
        definition: "A greeting used when meeting someone or answering the telephone.",
        example: "Hello, nice to meet you!",
        translation: "Olá"
    },
    {
        word: "friend",
        pronunciation: "/frend/",
        partOfSpeech: "noun",
        definition: "A person with whom one has a bond of mutual affection and trust.",
        example: "She's been my best friend for ten years.",
        translation: "Amigo"
    },
    {
        word: "brother",
        pronunciation: "/ˈbrʌðər/",
        partOfSpeech: "noun",
        definition: "A male sibling; a man or boy who shares the same parents as another person.",
        example: "My brother lives in London.",
        translation: "Irmão"
    }
];

function createEntryElement(entry) {
    const div = document.createElement('div');
    div.className = 'entry';
    div.innerHTML = `
        <div class="word-header">
            <span class="word">${entry.word}</span>
            <span class="pronunciation">${entry.pronunciation}</span>
        </div>
        <div class="part-of-speech">${entry.partOfSpeech}</div>
        <div class="definition">
            <p>${entry.definition}</p>
            <p class="example">"${entry.example}"</p>
        </div>
        <div class="translation">${entry.translation}</div>
    `;
    return div;
}

function renderEntries(entries) {
    const container = document.getElementById('entries');
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

document.getElementById('searchBtn').addEventListener('click', handleSearch);
document.getElementById('searchInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSearch();
});

document.getElementById('addWordForm').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newEntry = {
        word: document.getElementById('newWord').value.toLowerCase(),
        pronunciation: document.getElementById('newPronunciation').value,
        partOfSpeech: document.getElementById('newPartOfSpeech').value,
        definition: document.getElementById('newDefinition').value,
        example: document.getElementById('newExample').value,
        translation: document.getElementById('newTranslation').value
    };
    
    dictionary.push(newEntry);
    
    e.target.reset();
    renderEntries(dictionary);
    
    alert('Word added successfully!');
});

renderEntries(dictionary);