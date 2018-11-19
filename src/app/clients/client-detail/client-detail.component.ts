import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-client-detail',
    templateUrl: './client-detail.component.html',
    styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent implements OnInit {
    title: string = 'Client Detail';
    description: string = 'This section allows you to preview specific client.';

    constructor() {
    }

    ngOnInit() {
    }

}
