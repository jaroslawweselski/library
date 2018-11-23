import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ClientService} from '../../clients/client.service';
import {Client} from '../../clients/client.model';
import {Book} from '../book.model';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
    @Output() action = new EventEmitter<string>();
    title = 'Book Add';
    description = 'This section allows you to add new book.';
    book: Book;

    constructor(private bookService: BookService) { }

    ngOnInit() {
        const books = this.bookService.getBooks();
        const id = books[books.length - 1].id + 1;
        this.book = new Book(id, '', '', '', '', undefined);
    }

    onBookSubmit() {
        this.bookService.addBook(this.book);
        this.action.emit('detail');
    }

}
