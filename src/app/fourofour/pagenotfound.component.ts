import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'for-o-four',
    templateUrl: './pagenotfound.component.html',
    styleUrls: ['./pagenotfound.component.css']
})

export class PageNotFoundComponent implements OnInit {
    
    theroute:string;
    timeStamp:Date;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.theroute = this.router.url;
        this.timeStamp = new Date();
    }
}