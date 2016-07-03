import {Component} from 'angular2/core';
import {MyComponentComponent} from "./my-component.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>This is test</h1>
        <p>Hello World!</p>
        <my-component></my-component>
    `,
  directives: [MyComponentComponent]
})
export class AppComponent {

}
