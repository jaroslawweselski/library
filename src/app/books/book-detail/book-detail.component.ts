import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../book.model';

@Component({
    selector: 'app-book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
    title: string = 'Book Detail';
    description: string = 'This section allows you to preview specific book.';
    @Input() book: Book;

    constructor() {
    }

    ngOnInit() {
    }

}
