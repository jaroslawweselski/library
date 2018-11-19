import { Component, OnInit } from '@angular/core';
import {Client} from '../client.model';
import {ClientService} from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  title: string = "Clients list";
  description: string = "This section allows you to manage library clients.";
  clients: Client[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clients = this.clientService.getClients();
  }

}
