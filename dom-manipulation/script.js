// Array to hold quote objects

let quotes = [
    { text: "The best way to predict the future is to invent it.", category: "Inspiration" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Life" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", category: "Motivation" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", category: "Inspiration" },
    { text: "The way to get started is to quit talking and begin doing.", category: "Motivation" },
    { text: "Your time is limited, don't waste it living someone else's life.", category: "Life" },
    // Add more quotes as needed
];

// Function to display a random quote
function showRandomQuote() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.innerHTML = `<p>"${randomQuote.text}" - <em>${randomQuote.category}</em></p>`;
}

// Function to display a random quote
function showRandomQuote() {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.innerHTML = `<p>"${randomQuote.text}" - <em>${randomQuote.category}</em></p>`;
}

// Function to create the Add Quote form
function createAddQuoteForm() {
    const formContainer = document.createElement('div');
    formContainer.innerHTML = `
        <input id="newQuoteText" type="text" placeholder="Enter a new quote" />
        <input id="newQuoteCategory" type="text" placeholder="Enter quote category" />
        <button id="addQuoteButton">Add Quote</button>
    `;

    document.body.appendChild(formContainer);

    // Event listener for the "Add Quote" button
    document.getElementById('addQuoteButton').addEventListener('click', addQuote);
}

// Function to add a new quote
function addQuote() {
    const newQuoteText = document.getElementById('newQuoteText').value.trim();
    const newQuoteCategory = document.getElementById('newQuoteCategory').value.trim();
    
    if (newQuoteText && newQuoteCategory) {
        const newQuote = { text: newQuoteText, category: newQuoteCategory };
        quotes.push(newQuote);

        // Clear the input fields
        document.getElementById('newQuoteText').value = '';
        document.getElementById('newQuoteCategory').value = '';

        alert('New quote added successfully!');
    } else {
        alert('Please enter both a quote and a category.');
    }
}

// Event listener for the "Show New Quote" button
document.getElementById('newQuote').addEventListener('click', showRandomQuote);

// Initial call to display a quote when the page loads
showRandomQuote();

// Create the Add Quote form on page load
createAddQuoteForm();







document.addEventListener('DOMContentLoaded', () => {
    const quoteDisplay = document.getElementById('quoteDisplay');
    const newQuoteButton = document.getElementById('newQuote');
    const importFileInput = document.getElementById('importFile');
    const addQuoteButton = document.querySelector('button[onclick="addQuote()"]');

    let quotes = JSON.parse(localStorage.getItem('quotes')) || [
        { text: 'The only limit to our realization of tomorrow is our doubts of today.', category: 'Inspirational' },
        { text: 'Life is 10% what happens to us and 90% how we react to it.', category: 'Motivational' },
        { text: 'Do not watch the clock. Do what it does. Keep going.', category: 'Motivational' }
    ];

    function showRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const quote = quotes[randomIndex];
        quoteDisplay.innerHTML = `<p>${quote.text}</p><p><em>Category: ${quote.category}</em></p>`;
        sessionStorage.setItem('lastQuote', JSON.stringify(quote));
    }

    function addQuote() {
        const newQuoteText = document.getElementById('newQuoteText').value.trim();
        const newQuoteCategory = document.getElementById('newQuoteCategory').value.trim();

        if (newQuoteText && newQuoteCategory) {
            const newQuote = { text: newQuoteText, category: newQuoteCategory };
            quotes.push(newQuote);
            saveQuotes();
            showRandomQuote();
            document.getElementById('newQuoteText').value = '';
            document.getElementById('newQuoteCategory').value = '';
        } else {
            alert('Please enter both quote text and category.');
        }
    }

    function saveQuotes() {
        localStorage.setItem('quotes', JSON.stringify(quotes));
    }

    function createAddQuoteForm() {
        return `
            <div>
                <input id="newQuoteText" type="text" placeholder="Enter a new quote" />
                <input id="newQuoteCategory" type="text" placeholder="Enter quote category" />
                <button onclick="addQuote()">Add Quote</button>
            </div>
        `;
    }

    function exportToJsonFile() {
        const dataStr = JSON.stringify(quotes);
        const blob = new Blob([dataStr], { type: 'application/json' });
        const dataUri = URL.createObjectURL(blob);
        const exportFileDefaultName = 'quotes.json';

        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    }

    function importFromJsonFile(event) {
        const fileReader = new FileReader();
        fileReader.onload = function(event) {
            const importedQuotes = JSON.parse(event.target.result);
            quotes.push(...importedQuotes);
            saveQuotes();
            alert('Quotes imported successfully!');
            showRandomQuote();
        };
        fileReader.readAsText(event.target.files[0]);
    }

    document.getElementById('importFile').addEventListener('change', importFromJsonFile);
    document.getElementById('exportQuotes').addEventListener('click', exportToJsonFile);
    newQuoteButton.addEventListener('click', showRandomQuote);

    if (sessionStorage.getItem('lastQuote')) {
        const lastQuote = JSON.parse(sessionStorage.getItem('lastQuote'));
        quoteDisplay.innerHTML = `<p>${lastQuote.text}</p><p><em>Category: ${lastQuote.category}</em></p>`;
    } else {
        showRandomQuote();
    }

    document.body.insertAdjacentHTML('beforeend', createAddQuoteForm());
});













// Check if the quotes array is already defined
if (typeof quotes === 'undefined') {
    var quote = [];
  }
  
  // Load quotes from local storage
  function loadQuotes() {
    const storedQuotes = localStorage.getItem('quotes');
    if (storedQuotes) {
      quotes = JSON.parse(storedQuotes);
    }
  }
  
  // Save quotes to local storage
  function saveQuotes() {
    localStorage.setItem('quotes', JSON.stringify(quotes));
  }
  
  // Show a random quote
  function showRandomQuote() {
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const quote = quotes[randomIndex];
      document.getElementById('quoteDisplay').innerHTML = `<p>${quote.text}</p><p><em>${quote.category}</em></p>`;
    } else {
      document.getElementById('quoteDisplay').innerHTML = `<p>No quotes available</p>`;
    }
  }
  
  // Add a new quote
  function addQuote() {
    const text = document.getElementById('newQuoteText').value.trim();
    const category = document.getElementById('newQuoteCategory').value.trim();
  
    if (text && category) {
      const newQuote = { text, category };
      quotes.push(newQuote);
      saveQuotes();
      populateCategories();
      filterQuotes();
      document.getElementById('newQuoteText').value = '';
      document.getElementById('newQuoteCategory').value = '';
    } else {
      alert('Please enter both a quote and a category.');
    }
  }
  
  // Populate the categories dropdown
  function populateCategories() {
    const categoryFilter = document.getElementById('categoryFilter');
    const categories = [...new Set(quotes.map(quote => quote.category))];
    categoryFilter.innerHTML = '<option value="all">All Categories</option>';
    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      categoryFilter.appendChild(option);
    });
  }
  
  // Filter quotes based on selected category
  function filterQuotes() {
    const selectedCategory = document.getElementById('categoryFilter').value;
    const filteredQuotes = selectedCategory === 'all' ? quotes : quotes.filter(quote => quote.category === selectedCategory);
    displayQuotes(filteredQuotes);
    localStorage.setItem('selectedCategory', selectedCategory);
  }
  
  // Display quotes based on filtering
  function displayQuotes(filteredQuotes) {
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.innerHTML = '';
    filteredQuotes.forEach(quote => {
      const quoteElem = document.createElement('div');
      quoteElem.innerHTML = `<p>${quote.text}</p><p><em>${quote.category}</em></p>`;
      quoteDisplay.appendChild(quoteElem);
    });
  }
  
  // Load initial quotes and categories on page load
  document.addEventListener('DOMContentLoaded', () => {
    loadQuotes();
    populateCategories();
    const savedCategory = localStorage.getItem('selectedCategory') || 'all';
    document.getElementById('categoryFilter').value = savedCategory;
    filterQuotes();
  });





















// Check if the quotes array is already defined
if (typeof quotes === 'undefined') {
  var quotes = [];
}

// Load quotes from local storage
function loadQuotes() {
  const storedQuotes = localStorage.getItem('quotes');
  if (storedQuotes) {
    quotes = JSON.parse(storedQuotes);
  }
}

// Save quotes to local storage
function saveQuotes() {
  localStorage.setItem('quotes', JSON.stringify(quotes));
}

// Show a random quote
function showRandomQuote() {
  if (quotes.length > 0) {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quoteDisplay').innerHTML = `<p>${quote.text}</p><p><em>${quote.category}</em></p>`;
  } else {
    document.getElementById('quoteDisplay').innerHTML = `<p>No quotes available</p>`;
  }
}

// Add a new quote
function addQuote() {
  const text = document.getElementById('newQuoteText').value.trim();
  const category = document.getElementById('newQuoteCategory').value.trim();

  if (text && category) {
    const newQuote = { text, category };
    quotes.push(newQuote);
    saveQuotes();
    populateCategories();
    filterQuotes();
    document.getElementById('newQuoteText').value = '';
    document.getElementById('newQuoteCategory').value = '';
    syncWithServer();
  } else {
    alert('Please enter both a quote and a category.');
  }
}

// Populate the categories dropdown
function populateCategories() {
  const categoryFilter = document.getElementById('categoryFilter');
  const categories = [...new Set(quotes.map(quote => quote.category))];
  categoryFilter.innerHTML = '<option value="all">All Categories</option>';
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

// Filter quotes based on selected category
function filterQuotes() {
  const selectedCategory = document.getElementById('categoryFilter').value;
  const filteredQuotes = selectedCategory === 'all' ? quotes : quotes.filter(quote => quote.category === selectedCategory);
  displayQuotes(filteredQuotes);
  localStorage.setItem('selectedCategory', selectedCategory);
}

// Display quotes based on filtering
function displayQuotes(filteredQuotes) {
  const quoteDisplay = document.getElementById('quoteDisplay');
  quoteDisplay.innerHTML = '';
  filteredQuotes.forEach(quote => {
    const quoteElem = document.createElement('div');
    quoteElem.innerHTML = `<p>${quote.text}</p><p><em>${quote.category}</em></p>`;
    quoteDisplay.appendChild(quoteElem);
  });
}

// Sync quotes with server
async function syncWithServer() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(quotes)
    });
    const data = await response.json();
    console.log('Quotes synced with server:', data);
  } catch (error) {
    console.error('Error syncing with server:', error);
  }
}

// Load initial quotes and categories on page load
document.addEventListener('DOMContentLoaded', () => {
  loadQuotes();
  populateCategories();
  const savedCategory = localStorage.getItem('selectedCategory') || 'all';
  document.getElementById('categoryFilter').value = savedCategory;
  filterQuotes();
});

// JSON Import Function
function importFromJsonFile(event) {
  const fileReader = new FileReader();
  fileReader.onload = function(event) {
    const importedQuotes = JSON.parse(event.target.result);
    quotes.push(...importedQuotes);
    saveQuotes();
    alert('Quotes imported successfully!');
    populateCategories();
    filterQuotes();
  };
  fileReader.readAsText(event.target.files[0]);
}

// JSON Export Function
function exportToJsonFile() {
  const dataStr = JSON.stringify(quotes);
  const dataBlob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(dataBlob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'quotes.json';
  a.click();
  URL.revokeObjectURL(url);
}







// Check if the quotes array is already defined
if (typeof quotes === 'undefined') {
    var quotes = [];
  }
  
  // Load quotes from local storage
  function loadQuotes() {
    const storedQuotes = localStorage.getItem('quotes');
    if (storedQuotes) {
      quotes = JSON.parse(storedQuotes);
    }
  }
  
  // Save quotes to local storage
  function saveQuotes() {
    localStorage.setItem('quotes', JSON.stringify(quotes));
  }
  
  // Show a random quote
  function showRandomQuote() {
    if (quotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const quote = quotes[randomIndex];
      document.getElementById('quoteDisplay').innerHTML = `<p>${quote.text}</p><p><em>${quote.category}</em></p>`;
    } else {
      document.getElementById('quoteDisplay').innerHTML = `<p>No quotes available</p>`;
    }
  }
  
  // Add a new quote
  function addQuote() {
    const text = document.getElementById('newQuoteText').value.trim();
    const category = document.getElementById('newQuoteCategory').value.trim();
  
    if (text && category) {
      const newQuote = { text, category };
      quotes.push(newQuote);
      saveQuotes();
      populateCategories();
      filterQuotes();
      document.getElementById('newQuoteText').value = '';
      document.getElementById('newQuoteCategory').value = '';
      syncWithServer();
    } else {
      alert('Please enter both a quote and a category.');
    }
  }
  
  // Populate the categories dropdown
  function populateCategories() {
    const categoryFilter = document.getElementById('categoryFilter');
    const categories = [...new Set(quotes.map(quote => quote.category))];
    categoryFilter.innerHTML = '<option value="all">All Categories</option>';
    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category;
      option.textContent = category;
      categoryFilter.appendChild(option);
    });
  }
  
  // Filter quotes based on selected category
  function filterQuotes() {
    const selectedCategory = document.getElementById('categoryFilter').value;
    const filteredQuotes = selectedCategory === 'all' ? quotes : quotes.filter(quote => quote.category === selectedCategory);
    displayQuotes(filteredQuotes);
    localStorage.setItem('selectedCategory', selectedCategory);
  }
  
  // Display quotes based on filtering
  function displayQuotes(filteredQuotes) {
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.innerHTML = '';
    filteredQuotes.forEach(quote => {
      const quoteElem = document.createElement('div');
      quoteElem.innerHTML = `<p>${quote.text}</p><p><em>${quote.category}</em></p>`;
      quoteDisplay.appendChild(quoteElem);
    });
  }
  
  // Sync quotes with server
  async function syncWithServer() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(quotes)
      });
      const data = await response.json();
      console.log('Quotes synced with server:', data);
      alert('Quotes synced with server!');
    } catch (error) {
      console.error('Error syncing with server:', error);
    }
  }
  
  // Fetch quotes from server
  async function fetchQuotesFromServer() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const serverQuotes = await response.json();
      if (Array.isArray(serverQuotes)) {
        quotes = serverQuotes;
        saveQuotes();
        populateCategories();
        filterQuotes();
      } else {
        console.error('Invalid data format from server');
      }
    } catch (error) {
      console.error('Error fetching quotes from server:', error);
    }
  }
  
  // Sync quotes and handle conflicts
  async function syncQuotes() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const serverQuotes = await response.json();
      if (Array.isArray(serverQuotes)) {
        const mergedQuotes = [...serverQuotes];
        quotes.forEach(localQuote => {
          if (!serverQuotes.some(serverQuote => serverQuote.text === localQuote.text && serverQuote.category === localQuote.category)) {
            mergedQuotes.push(localQuote);
          }
        });
        quotes = mergedQuotes;
        saveQuotes();
        populateCategories();
        filterQuotes();
        alert('Quotes synced with server!');
      } else {
        console.error('Invalid data format from server');
      }
    } catch (error) {
      console.error('Error syncing quotes:', error);
    }
  }
  
  // Load initial quotes and categories on page load
  document.addEventListener('DOMContentLoaded', () => {
    loadQuotes();
    populateCategories();
    const savedCategory = localStorage.getItem('selectedCategory') || 'all';
    document.getElementById('categoryFilter').value = savedCategory;
    filterQuotes();
    fetchQuotesFromServer(); // Fetch quotes from server on page load
  
    // Periodically sync with server
    setInterval(syncQuotes, 60000); // Sync every 60 seconds
  });
  
  // JSON Import Function
  function importFromJsonFile(event) {
    const fileReader = new FileReader();
    fileReader.onload = function(event) {
      const importedQuotes = JSON.parse(event.target.result);
      quotes.push(...importedQuotes);
      saveQuotes();
      alert('Quotes imported successfully!');
      populateCategories();
      filterQuotes();
    };
    fileReader.readAsText(event.target.files[0]);
  }
  
  // JSON Export Function
  function exportToJsonFile() {
    const dataStr = JSON.stringify(quotes);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quotes.json';
    a.click();
    URL.revokeObjectURL(url);
  }












