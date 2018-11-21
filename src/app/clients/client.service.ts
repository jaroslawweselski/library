import {Client} from './client.model';
import {EventEmitter, Output} from '@angular/core';

export class ClientService {
    @Output() clientSelected = new EventEmitter<Client>();
    private clients: Client[] = [
        new Client(
            1,
            'John',
            'Due',
            'ul. Strzegomska 142a',
            '54-429', 'Wrocław',
            111222333
        ),
        new Client(
            2,
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

    removeClient(index: number) {
        this.clients.splice(index, 1);
    }
}
