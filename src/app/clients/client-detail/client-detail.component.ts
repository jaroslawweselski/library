import {Component, Input, OnInit} from '@angular/core';
import {Client} from '../client.model';

@Component({
    selector: 'app-client-detail',
    templateUrl: './client-detail.component.html',
    styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
    title: string = 'Client Detail';
    description: string = 'This section allows you to preview specific client.';
    @Input() client: Client;

    constructor() {
    }

    ngOnInit() {
    }

}
