import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  title: string = "Clients list";
  description: string = "This section allows you to manage library clients.";

  constructor() { }

  ngOnInit() {
  }

}
