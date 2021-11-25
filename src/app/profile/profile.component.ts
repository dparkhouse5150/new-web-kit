import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    // @ts-ignore
    user: User = null
    constructor() {
    }

    ngOnInit(): void {
    }

}
