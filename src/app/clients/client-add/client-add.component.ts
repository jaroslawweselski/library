import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Client} from '../client.model';
import {ClientService} from '../client.service';

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {
  @Output() action = new EventEmitter<string>();
  title = 'Client Add';
  description = 'This section allows you to add new client.';
  client: Client;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    const clients = this.clientService.getClients();
    const id = clients[clients.length - 1].id + 1;
    this.client = new Client(id, '', '', '', '', '', undefined);
  }

  onClientSubmit() {
    this.clientService.addClient(this.client);
    this.action.emit('detail');
  }

}
