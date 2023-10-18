const myLibrary = [];

const addButton = document.querySelector('.add-button');
const bookContainer = document.querySelector('.book-container');
const libraryContainer = document.querySelector('.library-container');
const closeButton = document.querySelector('.close');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');
const submitButton = document.querySelector('.submit');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(obj) {
    myLibrary.push(obj);
}

function createCard() {
    myLibrary.forEach((book, index) => {
        const newCard = document.createElement('div');
        const cardTitle = document.createElement('p');
        const cardAuthor = document.createElement('p');
        const cardPages = document.createElement('p');
        const cardRead = document.createElement('p');

        newCard.className = "card";
        cardTitle.textContent = `Title: ${book.title}`;
        cardAuthor.textContent = `Author: ${book.author}`;
        cardPages.textContent = `Pages: ${book.pages}`;
        cardRead.textContent = `Read: ${book.read}`;

        libraryContainer.appendChild(newCard);
        newCard.appendChild(cardTitle);
        newCard.appendChild(cardPages);
        newCard.appendChild(cardAuthor);
        newCard.appendChild(cardRead);
    })
};

function clearLibrary() {
    while (libraryContainer.firstChild) {
        libraryContainer.removeChild(libraryContainer.firstChild);
    }
};

function showBookContainer() {
    bookContainer.classList.remove('hidden');
};

function hideBookContainer() {
    bookContainer.classList.add('hidden');
}

addButton.addEventListener('click', showBookContainer);
closeButton.addEventListener('click', hideBookContainer);
submitButton.addEventListener('click', function () {
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = parseInt(pagesInput.value);
    const read = readInput.checked;

    if (!title || !author || isNaN(pages)) {
        alert("Please fill in all the required fields.");
        return;
    }

    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    clearLibrary();
    createCard();

    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    readInput.checked = false;

    hideBookContainer();
});