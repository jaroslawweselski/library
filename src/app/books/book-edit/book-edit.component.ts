import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Book} from '../book.model';
import {BookService} from '../book.service';
import {Client} from '../../clients/client.model';

@Component({
    selector: 'app-book-edit',
    templateUrl: './book-edit.component.html',
    styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
    title: string = 'Book Edit';
    description: string = 'This section allows you to edit specific book.';
    @Output() action = new EventEmitter<string>();
    @Input() book: Book;

    constructor(private bookService: BookService) {
    }

    ngOnInit() {
    }

    onBookSubmit() {
        this.bookService.editBook(this.book);
        this.action.emit('detail');
    }
}
