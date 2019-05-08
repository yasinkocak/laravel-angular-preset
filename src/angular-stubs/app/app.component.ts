import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<div class="title m-b-md">{{ title }}</div>',
})
export class AppComponent {
    title = 'Laravel & Angular';

    ngOnInit(): void {
        console.log('Bootstrapped ' + this.title + ' with Laravel Mix ');
    }
}
