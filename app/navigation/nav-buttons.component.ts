import {Component} from '@angular/core';

@Component({
    selector: 'nav-buttons',
    templateUrl: 'app/navigation/nav-buttons.component.html',
    styles: [
        `#sidebar{
            postion: fixed;
            margin-top: 5%;
            z-index: 980;
            // display: float;
        }`
    ]
})
export class NavButtonsComponent{

}