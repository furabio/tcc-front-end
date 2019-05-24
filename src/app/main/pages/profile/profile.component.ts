import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';
import { User } from 'app/shared/model/user.model';

@Component({
    selector: 'profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: fuseAnimations
})
export class ProfileComponent implements OnInit {

    fullName: string;
    /**
     * Constructor
     */
    constructor() {

    }

    ngOnInit() {
        let user: User = JSON.parse(sessionStorage.getItem('user'));
        this.fullName = user.fullName;
    }
}
