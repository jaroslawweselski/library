import {Book} from './book.model';
import {EventEmitter, Output} from '@angular/core';

export class BookService {
    @Output() bookSelected = new EventEmitter<Book>();
    private books: Book[] = [
        new Book(
            1,
            'Harry Potter and Goblet of Fire',
            'J. K. Rowling',
            'The fourth part of Harry Potter\'s adventures',
            '01.01.2012',
            10
        ),
        new Book(
            2,
            'Harry Potter and Chamber of Secrets',
            'J. K. Rowling',
            'The second part of Harry Potter\'s adventures',
            '01.01.2008',
            1
        ),
    ];

    constructor() {
    }

    getBooks() {
        return this.books;
    }

    removeBook(index: number) {
        this.books.splice(index, 1);
    }

    editBook(book: Book) {
        let foundBook: Book = this.findById(book.id);
        foundBook = book;
    }

    findById(id: number) {
        for (const book of this.books) {
            if (book.id === id) {
                return book;
            }
        }
    }
}
