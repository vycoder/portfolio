import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'
@Component({
    selector: 'nav-buttons',
    templateUrl: './nav-buttons.component.html',
    styleUrls: ['./nav-buttons.component.css'],
    animations: [
        trigger('buttonState', [
            state('inactive', style({
                backgroundColor: '#eee',
                transform: 'scale(2)'
            })),
            state('active', style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(2.1)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ])
    ]
})
export class NavButtonsComponent {

}