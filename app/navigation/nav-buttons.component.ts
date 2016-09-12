import {
    Component,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';

@Component({
    selector: 'nav-buttons',
    templateUrl: 'app/navigation/nav-buttons.component.html',
    styleUrls: ['app/navigation/nav-buttons.component.css'],
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