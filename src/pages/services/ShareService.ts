import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'build/app.html',
    providers: [ShareService]
})

export class ShareService {

    firstName: string;
    lastName: string;

    constructor() {
        this.firstName = 'Blank';
        this.lastName = 'Name';
    }

    setUserName(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getUserName() {
        return this.firstName + ' ' + this.lastName;
    }
}
