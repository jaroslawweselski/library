import {Book} from './book.model';

export class BookService {
  private books: Book[] = [
      new Book(
          'Harry Potter and Goblet of Fire',
          'J. K. Rowling',
          'The fourth part of Harry Potter\'s adventures',
          '01.01.2012',
          10
      ),
      new Book(
          'Harry Potter and Chamber of Secrets',
          'J. K. Rowling',
          'The second part of Harry Potter\'s adventures',
          '01.01.2008',
          1
      ),
  ];

  constructor() { }

  getBooks() {
    return this.books;
  }
}
