import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Client} from '../client.model';
import {ClientService} from '../client.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
  title: string = 'Client Edit';
  description: string = 'This section allows you to edit specific client.';
  @Output() action = new EventEmitter<string>();
  @Input() client: Client;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
  }

  onClientSubmit() {
    this.clientService.editClient(this.client);
  }

  redirect() {
    this.action.emit('detail');
  }

}
