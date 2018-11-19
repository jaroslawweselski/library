import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-book-detail',
    templateUrl: './book-detail.component.html',
    styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
    title: string = 'Book Detail';
    description: string = 'This section allows you to preview specific book.';

    constructor() {
    }

    ngOnInit() {
    }

}
