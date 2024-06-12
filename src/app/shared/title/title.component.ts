import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styles: ``
})
export class TitleComponent {

  @Input({required: true}) title!: string
  @Input() text!: string 
  @Input({transform: booleanAttribute}) subTitle = false //transforms the property to boolean, it is originally a string

}
