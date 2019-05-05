import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'ui-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent {
    @Input() readonly isLoggedIn!: boolean;
    @Input() readonly title!: string;
    @Input() readonly sidenav: any;
    @Output() readonly logout = new EventEmitter();
}
