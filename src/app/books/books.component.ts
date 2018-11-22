import {Component, Input, OnInit} from '@angular/core';
import {Book} from './book.model';
import {Client} from '../clients/client.model';
import {BookService} from './book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @Input() action: string;
  bookSelected: Book;

  constructor(private bookService: BookService) { }

  ngOnInit() {
      this.bookService.bookSelected
          .subscribe(
              (book: Book) => {
                  this.bookSelected = book;
              }
          );
  }

  setAction(action: string) {
    this.action = action;
  }

}
