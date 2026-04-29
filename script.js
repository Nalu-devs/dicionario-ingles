function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function highlightText(text, query) {
    if (!query) return escapeHtml(text);
    const escapedText = escapeHtml(text);
    const escapedQuery = escapeHtml(query);
    const regex = new RegExp(`(${escapedQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return escapedText.replace(regex, '<mark>$1</mark>');
}

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
    },
    {
        word: "car",
        pronunciation: "/kɑːr/",
        partOfSpeech: "noun",
        definition: "A road vehicle with four wheels.",
        example: "I drive my car to work.",
        translation: "Carro"
    },
    {
        word: "house",
        pronunciation: "/haʊs/",
        partOfSpeech: "noun",
        definition: "A building for human habitation.",
        example: "They bought a new house.",
        translation: "Casa"
    },
    {
        word: "friend",
        pronunciation: "/frend/",
        partOfSpeech: "noun",
        definition: "A person with whom one has a bond of mutual affection.",
        example: "She is my best friend.",
        translation: "Amigo"
    },
    {
        word: "time",
        pronunciation: "/taɪm/",
        partOfSpeech: "noun",
        definition: "The indefinite continued progress of existence.",
        example: "Time flies when you're having fun.",
        translation: "Tempo"
    },
    {
        word: "day",
        pronunciation: "/deɪ/",
        partOfSpeech: "noun",
        definition: "A period of 24 hours.",
        example: "Have a great day!",
        translation: "Dia"
    },
    {
        word: "good",
        pronunciation: "/ɡʊd/",
        partOfSpeech: "adjective",
        definition: "To be desired or approved of.",
        example: "This is a good book.",
        translation: "Bom"
    },
    {
        word: "big",
        pronunciation: "/bɪɡ/",
        partOfSpeech: "adjective",
        definition: "Of considerable size, extent, or intensity.",
        example: "That's a big dog.",
        translation: "Grande"
    },
    {
        word: "small",
        pronunciation: "/smɔːl/",
        partOfSpeech: "adjective",
        definition: "Of a size that is less than normal or usual.",
        example: "The room is too small.",
        translation: "Pequeno"
    },
    {
        word: "happy",
        pronunciation: "/ˈhæp.i/",
        partOfSpeech: "adjective",
        definition: "Feeling or showing pleasure or contentment.",
        example: "I am happy to see you.",
        translation: "Feliz"
    },
    {
        word: "sad",
        pronunciation: "/sæd/",
        partOfSpeech: "adjective",
        definition: "Feeling or showing sorrow.",
        example: "She feels sad today.",
        translation: "Triste"
    },
    {
        word: "run",
        pronunciation: "/rʌn/",
        partOfSpeech: "verb",
        definition: "Move at a speed faster than a walk.",
        example: "I run every morning.",
        translation: "Correr"
    },
    {
        word: "eat",
        pronunciation: "/iːt/",
        partOfSpeech: "verb",
        definition: "Put food into the mouth and swallow it.",
        example: "Let's eat dinner together.",
        translation: "Comer"
    },
    {
        word: "sleep",
        pronunciation: "/sliːp/",
        partOfSpeech: "verb",
        definition: "A condition of body and mind.",
        example: "I need to sleep early today.",
        translation: "Dormir"
    },
    {
        word: "read",
        pronunciation: "/riːd/",
        partOfSpeech: "verb",
        definition: "Look at and comprehend the meaning of written or printed matter.",
        example: "I love to read books.",
        translation: "Ler"
    },
    {
        word: "write",
        pronunciation: "/raɪt/",
        partOfSpeech: "verb",
        definition: "Mark letters, words, or other symbols on a surface.",
        example: "Please write your name here.",
        translation: "Escrever"
    },
    {
        word: "computer",
        pronunciation: "/kəmˈpjuː.tər/",
        partOfSpeech: "noun",
        definition: "An electronic device for storing and processing data.",
        example: "I work on my computer all day.",
        translation: "Computador"
    },
    {
        word: "phone",
        pronunciation: "/fəʊn/",
        partOfSpeech: "noun",
        definition: "A telephone.",
        example: "She is talking on the phone.",
        translation: "Telefone"
    }
];

function getDictionary() {
    return [...defaultDictionary];
}

function saveDictionary(dict) {
    localStorage.setItem('userWords', JSON.stringify(dict));
}

function exportWords() {
    const dataStr = JSON.stringify(userWords, null, 2);
    const dataBlob = new Blob([dataStr], {type: 'application/json'});
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'dictionary-words.json';
    link.click();
    URL.revokeObjectURL(url);
}

function importWords(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const imported = JSON.parse(e.target.result);
            if (Array.isArray(imported)) {
                imported.forEach(entry => {
                    const exists = userWords.some(item => item.word.toLowerCase() === entry.word.toLowerCase());
                    if (!exists) {
                        entry.isUserAdded = true;
                        userWords.push(entry);
                    }
                });
                saveDictionary(userWords);
                initDictionary();
                alert('Words imported successfully!');
            }
        } catch (err) {
            alert('Error importing file. Please check the file format.');
        }
    };
    reader.readAsText(file);
}

function clearAllWords() {
    if (confirm('Are you sure you want to delete ALL user-added words? This action cannot be undone.')) {
        userWords = [];
        saveDictionary(userWords);
        initDictionary();
        alert('All user words have been deleted.');
    }
}

let currentUser = null;

function login(username, password) {
    if (username && password) {
        currentUser = { username: username };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateLoginUI();
        return true;
    }
    return false;
}

function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateLoginUI();
}

function checkLogin() {
    const stored = localStorage.getItem('currentUser');
    if (stored) {
        currentUser = JSON.parse(stored);
    }
    updateLoginUI();
}

function updateLoginUI() {
    const loginSection = document.getElementById('loginSection');
    const userInfo = document.getElementById('userInfo');
    const addWordLink = document.querySelector('a[href="add.html"]');
    
    if (currentUser) {
        if (loginSection) loginSection.style.display = 'none';
        if (userInfo) {
            userInfo.style.display = 'block';
            userInfo.querySelector('.username').textContent = currentUser.username;
        }
        if (addWordLink) addWordLink.style.display = 'inline';
    } else {
        if (loginSection) loginSection.style.display = 'block';
        if (userInfo) userInfo.style.display = 'none';
        if (addWordLink) addWordLink.style.display = 'none';
    }
}

let userWords = [];

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

function getWordOfTheDay() {
    const today = new Date().toDateString();
    const saved = localStorage.getItem('wordOfTheDay');
    
    if (saved) {
        const data = JSON.parse(saved);
        if (data.date === today) return data.word;
    }
    
    const allWords = [...defaultDictionary, ...userWords];
    const randomWord = allWords[Math.floor(Math.random() * allWords.length)];
    localStorage.setItem('wordOfTheDay', JSON.stringify({
        date: today,
        word: randomWord.word
    }));
    return randomWord.word;
}

function showStats() {
    const totalWords = dictionary.length;
    const userAdded = userWords.length;
    const defaultCount = defaultDictionary.length;
    
    return { totalWords, userAdded, defaultCount };
}

let favorites = [];

function loadFavorites() {
    const stored = localStorage.getItem('favorites');
    if (stored) {
        favorites = JSON.parse(stored);
    }
}

function toggleFavorite(word) {
    const index = favorites.indexOf(word);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(word);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderEntries(filterEntries(document.getElementById('searchInput')?.value || ''));
}

function isFavorite(word) {
    return favorites.includes(word);
}

let recentSearches = [];

function addToRecentSearches(query) {
    if (!query || query.trim() === '') return;
    recentSearches = recentSearches.filter(q => q !== query);
    recentSearches.unshift(query);
    if (recentSearches.length > 5) recentSearches.pop();
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
}

function loadRecentSearches() {
    const stored = localStorage.getItem('recentSearches');
    if (stored) {
        recentSearches = JSON.parse(stored);
    }
}

function filterByPartOfSpeech(entries, pos) {
    if (!pos || pos === 'all') return entries;
    return entries.filter(entry => entry.partOfSpeech === pos);
}

function getRandomWord() {
    const allWords = [...dictionary];
    return allWords[Math.floor(Math.random() * allWords.length)];
}

let currentSort = 'alphabetical';

function sortEntries(entries, sortBy) {
    currentSort = sortBy;
    switch(sortBy) {
        case 'alphabetical':
            return entries.sort((a, b) => a.word.localeCompare(b.word));
        case 'reverse':
            return entries.sort((a, b) => b.word.localeCompare(a.word));
        case 'recent':
            return entries.sort((a, b) => {
                if (a.isUserAdded && !b.isUserAdded) return -1;
                if (!a.isUserAdded && b.isUserAdded) return 1;
                return a.word.localeCompare(b.word);
            });
        default:
            return entries;
    }
}

function startQuiz() {
    if (dictionary.length < 4) {
        alert('Need at least 4 words to start a quiz!');
        return;
    }
    
    const correctWord = dictionary[Math.floor(Math.random() * dictionary.length)];
    const options = [correctWord];
    
    while (options.length < 4) {
        const randomWord = dictionary[Math.floor(Math.random() * dictionary.length)];
        if (!options.find(o => o.word === randomWord.word)) {
            options.push(randomWord);
        }
    }
    
    const shuffled = options.sort(() => Math.random() - 0.5);
    
    const quizHtml = `
        <div class="quiz-container">
            <h3>Quiz: What is the translation of "${correctWord.word}"?</h3>
            <div class="quiz-options">
                ${shuffled.map(opt => `
                    <button class="quiz-option" data-correct="${opt.word === correctWord.word}">${escapeHtml(opt.translation)}</button>
                `).join('')}
            </div>
            <div class="quiz-result" id="quizResult"></div>
            <button id="nextQuiz" class="btn">Next Question</button>
        </div>
    `;
    
    const container = document.getElementById('entries');
    if (container) {
        container.innerHTML = quizHtml;
        
        container.querySelectorAll('.quiz-option').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const result = document.getElementById('quizResult');
                if (e.target.dataset.correct === 'true') {
                    result.innerHTML = '<p style="color: green;">Correct! ✓</p>';
                    e.target.style.background = 'green';
                } else {
                    result.innerHTML = `<p style="color: red;">Wrong! The correct answer is: ${escapeHtml(correctWord.translation)}</p>`;
                    e.target.style.background = 'red';
                }
            });
        });
        
        document.getElementById('nextQuiz')?.addEventListener('click', () => {
            startQuiz();
        });
    }
}

function editWord(oldWord, newEntry) {
    const index = userWords.findIndex(item => item.word === oldWord);
    if (index > -1) {
        newEntry.isUserAdded = true;
        userWords[index] = newEntry;
        saveDictionary(userWords);
        initDictionary();
        return true;
    }
    return false;
}

function updateRecentSearchesUI() {
    const container = document.getElementById('recentSearches');
    if (!container) return;
    
    container.innerHTML = '';
    if (recentSearches.length === 0) return;
    
    container.innerHTML = '<small>Recent: </small>';
    recentSearches.forEach(search => {
        const span = document.createElement('span');
        span.textContent = search;
        span.addEventListener('click', () => {
            document.getElementById('searchInput').value = search;
            handleSearch();
        });
        container.appendChild(span);
    });
}

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
    const exists = dictionary.some(item => item.word.toLowerCase() === entry.word.toLowerCase());
    if (exists) {
        alert('This word already exists in the dictionary.');
        return;
    }
    entry.isUserAdded = true;
    userWords.push(entry);
    saveDictionary(userWords);
    initDictionary();
}

function createEntryElement(entry) {
    const exampleText = entry.example.replace(/"/g, '');
    const div = document.createElement('div');
    div.className = 'entry';
    const deleteBtn = entry.isUserAdded ? `<button class="delete-btn" data-word="${escapeHtml(entry.word)}" title="Delete">&#10006;</button>` : '';
    const favBtn = isFavorite(entry.word) ? '★' : '☆';
    div.innerHTML = `
        <div class="word-header">
            <span class="word">${highlightText(entry.word, currentQuery)}</span>
            <span class="pronunciation">${highlightText(entry.pronunciation, currentQuery)}</span>
            <button class="fav-btn" data-word="${escapeHtml(entry.word)}" title="Favorite">${favBtn}</button>
            ${deleteBtn}
        </div>
        <div class="audio-controls">
            <button class="play-btn" data-word="${escapeHtml(entry.word)}" title="Play">&#9654;</button>
            <select class="speed-select">
                <option value="0.5">Slow</option>
                <option value="1" selected>Normal</option>
                <option value="1.5">Fast</option>
            </select>
        </div>
        <div class="part-of-speech">${highlightText(entry.partOfSpeech, currentQuery)}</div>
        <div class="definition">
            <p>${highlightText(entry.definition, currentQuery)}</p>
            <p class="example">
                "${highlightText(entry.example, currentQuery)}"
                <button class="play-btn play-example" data-word="${escapeHtml(exampleText)}" title="Play example">&#9654;</button>
            </p>
        </div>
        <div class="translation">${highlightText(entry.translation, currentQuery)}</div>
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

let currentQuery = '';

function filterEntries(query) {
    currentQuery = query.toLowerCase().trim();
    if (!currentQuery) return dictionary;
    return dictionary.filter(entry => 
        entry.word.includes(currentQuery) || 
        entry.translation.toLowerCase().includes(currentQuery) ||
        entry.definition.toLowerCase().includes(currentQuery)
    );
}

function handleSearch() {
    const query = document.getElementById('searchInput').value;
    addToRecentSearches(query);
    updateRecentSearchesUI();
    
    let filtered = filterEntries(query);
    
    const posFilter = document.getElementById('posFilter');
    const viewFilter = document.getElementById('viewFilter');
    
    if (posFilter) {
        filtered = filterByPartOfSpeech(filtered, posFilter.value);
    }
    
    if (viewFilter && viewFilter.value === 'favorites') {
        filtered = filtered.filter(entry => favorites.includes(entry.word));
    } else if (viewFilter && viewFilter.value === 'recent') {
        const recentEntries = [];
        recentSearches.forEach(q => {
            const found = dictionary.find(e => e.word.toLowerCase() === q.toLowerCase());
            if (found && !recentEntries.find(r => r.word === found.word)) {
                recentEntries.push(found);
            }
        });
        filtered = recentEntries;
    }
    
    renderEntries(filtered);
    
    const container = document.getElementById('entries');
    if (container && query.trim()) {
        const count = document.createElement('p');
        count.className = 'result-count';
        count.textContent = `Found ${filtered.length} result${filtered.length !== 1 ? 's' : ''}`;
        container.insertBefore(count, container.firstChild);
    }
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
    
    if (e.target.classList.contains('delete-btn')) {
        const word = e.target.dataset.word;
        if (confirm(`Are you sure you want to delete "${word}"?`)) {
            userWords = userWords.filter(item => item.word !== word);
            saveDictionary(userWords);
            initDictionary();
        }
    }
    
    if (e.target.classList.contains('fav-btn')) {
        const word = e.target.dataset.word;
        toggleFavorite(word);
        e.target.textContent = isFavorite(word) ? '★' : '☆';
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

document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    loadFavorites();
    loadRecentSearches();
    checkLogin();
    initDictionary();
    renderEntries(sortEntries(dictionary, 'alphabetical'));
    updateRecentSearchesUI();
    
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    const addWordForm = document.getElementById('addWordForm');
    const exportBtn = document.getElementById('exportBtn');
    const importFile = document.getElementById('importFile');
    const clearAllBtn = document.getElementById('clearAllBtn');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const themeToggle = document.getElementById('themeToggle');
    const posFilter = document.getElementById('posFilter');
    const viewFilter = document.getElementById('viewFilter');
    const sortFilter = document.getElementById('sortFilter');
    const randomWordBtn = document.getElementById('randomWordBtn');
    const quizBtn = document.getElementById('quizBtn');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', handleSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSearch();
        });
    }
    
    if (posFilter) posFilter.addEventListener('change', handleSearch);
    if (viewFilter) viewFilter.addEventListener('change', handleSearch);
    if (sortFilter) {
        sortFilter.addEventListener('change', () => {
            const filtered = filterEntries(document.getElementById('searchInput')?.value || '');
            renderEntries(sortEntries(filtered, sortFilter.value));
        });
    }
    
    if (randomWordBtn) {
        randomWordBtn.addEventListener('click', () => {
            const word = getRandomWord();
            if (word) {
                document.getElementById('searchInput').value = word.word;
                handleSearch();
            }
        });
    }
    
    if (quizBtn) {
        quizBtn.addEventListener('click', startQuiz);
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
    
    if (exportBtn) exportBtn.addEventListener('click', exportWords);
    if (importFile) importFile.addEventListener('change', importWords);
    if (clearAllBtn) clearAllBtn.addEventListener('click', clearAllWords);
    
    if (loginBtn) {
        loginBtn.addEventListener('click', () => {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (login(username, password)) {
                document.getElementById('username').value = '';
                document.getElementById('password').value = '';
            } else {
                alert('Please enter username and password.');
            }
        });
    }
    
    if (logoutBtn) logoutBtn.addEventListener('click', logout);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            toggleTheme();
            themeToggle.textContent = document.documentElement.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
        });
        themeToggle.textContent = localStorage.getItem('theme') === 'dark' ? '☀️' : '🌙';
    }
    
    const wordOfDayEl = document.getElementById('wordOfDay');
    if (wordOfDayEl) {
        const word = getWordOfTheDay();
        const entry = dictionary.find(e => e.word === word);
        if (entry) {
            wordOfDayEl.innerHTML = `
                <h3>Word of the Day</h3>
                <div class="word-header">
                    <span class="word">${escapeHtml(entry.word)}</span>
                    <span class="pronunciation">${escapeHtml(entry.pronunciation)}</span>
                </div>
                <div class="part-of-speech">${escapeHtml(entry.partOfSpeech)}</div>
                <div class="definition"><p>${escapeHtml(entry.definition)}</p></div>
                <div class="translation">${escapeHtml(entry.translation)}</div>
            `;
        }
    }
    
    const statsEl = document.getElementById('stats');
    if (statsEl) {
        const stats = showStats();
        statsEl.innerHTML = `
            <div class="stat-item">
                <div class="stat-number">${stats.totalWords}</div>
                <div class="stat-label">Total Words</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">${stats.defaultCount}</div>
                <div class="stat-label">Default Words</div>
            </div>
            <div class="stat-item">
                <div class="stat-number">${stats.userAdded}</div>
                <div class="stat-label">Your Words</div>
            </div>
        `;
    }
});