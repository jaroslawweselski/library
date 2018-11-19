import {Client} from './client.model';

export class ClientService {
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
