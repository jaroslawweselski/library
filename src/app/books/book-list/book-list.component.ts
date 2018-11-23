import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Book} from '../book.model';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  @Output() action = new EventEmitter<string>();
  title: string = "Books list";
  description: string = "This section allows you to manage books available in the library.";
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  onBookSelect(book: Book, action: string) {
    this.action.emit(action);
    this.bookService.bookSelected.emit(book);
  }

  onBookRemove(index: number) {
    this.bookService.removeBook(index);
  }

  onBookAdd(action: string) {
    this.action.emit(action);
  }

}
