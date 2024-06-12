import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [CommonModule],
  template: ` 
  <section [ngClass]="['w-full', cssClass]">
    <ng-content />
  </section>`, //NG CONTENT ALLOWS TO RECEIVE INTERNAL INFORMATION LIKE HTML
})
export class HeavyLoadersFastComponent {

  @Input({required: true}) cssClass!: string

  constructor(){
    console.log('Heavy loader fast component loaded')
  }
}
