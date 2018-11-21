import {Component, Input, OnInit} from '@angular/core';
import {Client} from './client.model';
import {ClientService} from './client.service';

@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
    @Input() action: string;
    clientSelected: Client;

    constructor(private clientService: ClientService) {
    }

    ngOnInit() {
        this.clientService.clientSelected
            .subscribe(
                (client: Client) => {
                    this.clientSelected = client;
                }
            );
    }

    setAction(action: string) {
        this.action = action;
    }

}
