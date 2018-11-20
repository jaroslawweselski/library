import {Client} from './client.model';
import {EventEmitter, Output} from '@angular/core';

export class ClientService {
    @Output() clientSelected = new EventEmitter<Client>();
    private clients: Client[] = [
        new Client(
            'John',
            'Due',
            'ul. Strzegomska 142a',
            '54-429', 'Wrocław',
            111222333
        ),
        new Client(
            'Jane',
            'Due',
            'ul. Strzegomska 142a',
            '54-429', 'Wrocław',
            333222111
        ),
    ];

    constructor() {
    }

    getClients() {
        return this.clients;
    }
}
