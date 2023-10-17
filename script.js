const myLibrary = [];

const addButton = document.querySelector('.add-button');
const bookContainer = document.querySelector('.book-container');
const closeButton = document.querySelector('.close');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(obj) {
    myLibrary.push(obj);
}

function showBookContainer() {
    bookContainer.classList.remove('hidden');
};

function hideBookContainer() {
    bookContainer.classList.add('hidden');
}

addButton.addEventListener('click', showBookContainer);
closeButton.addEventListener('click', hideBookContainer);