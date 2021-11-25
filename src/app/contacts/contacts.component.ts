import {Component, OnInit} from '@angular/core';
import {Contact} from '../models/contacts'
@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
    public contact: Contact

    constructor() {
    }

    ngOnInit(): void {
    }

}
