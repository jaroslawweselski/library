import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = "List of rentals";
  description: string = "This section allows you to manage rentals of books."

  constructor() { }

  ngOnInit() {
  }

}
