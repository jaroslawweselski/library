import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @Input() action: string;

  constructor() { }

  ngOnInit() {
  }

  setAction(action: string) {
    this.action = action;
  }

}
