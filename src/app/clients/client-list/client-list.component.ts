import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Client} from '../client.model';
import {ClientService} from '../client.service';

@Component({
    selector: 'app-client-list',
    templateUrl: './client-list.component.html',
    styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
    @Output() action = new EventEmitter<string>();
    title: string = 'Clients list';
    description: string = 'This section allows you to manage library clients.';
    clients: Client[] = [];

    constructor(private clientService: ClientService) {
    }

    ngOnInit() {
        this.clients = this.clientService.getClients();
    }

    onClientSelected(client: Client, action: string) {
        this.action.emit(action);
        this.clientService.clientSelected.emit(client);
    }

    onClientRemove(index: number) {
        this.clientService.removeClient(index);
    }

}
