import {Component, OnInit} from 'angular2/core'
import {TestComponent} from "./test.component";
import {OnInit} from "angular2/core"
@Component({
  selector: 'my-component',
  template: `
        I'm <span [style.color]="inputElement.value === 'yes' ? 'red' : '' ">{{name}}</span> and this is my first angular application. <span [class.is-awesome]="inputElement.value === 'yes'">It's Awesome!</span>
        
        <br>
        <br>
        <input type="text" #inputElement (keyup)="0">
        <br/>
        <br/>
        <button [disabled]="inputElement.value !== 'yes' ">Only Enabled when pressed</button>
        <test></test>
        `,

  styleUrls: ['../src/css/mycomponent.css'],
  directives: [TestComponent]
})

export class MyComponentComponent implements OnInit{

  ngOnInit():any {
    this.name = "Gaurav"
  }
  name:string;

}
