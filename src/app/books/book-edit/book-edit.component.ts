import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  title: string = 'Book Edit';
  description: string = 'This section allows you to edit specific book.';

  constructor() { }

  ngOnInit() {
  }

}
