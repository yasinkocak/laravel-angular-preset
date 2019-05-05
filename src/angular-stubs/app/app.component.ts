import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<h1>{{ title }}</h1>',
})
export class AppComponent {
    title = 'Laravel & Angular';

    ngOnInit(): void {
        console.log('Bootstrapped' + this.title + ' with Laravel Mix ');
    }
}
