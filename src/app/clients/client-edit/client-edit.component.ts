import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  title: string = 'Client Edit';
  description: string = 'This section allows you to edit specific client.';
  constructor() { }

  ngOnInit() {
  }

}
