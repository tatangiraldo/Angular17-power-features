import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
    <app-title title="View Transition 2"/>
    <section class="flex justify-end">
      <img 
        srcset="./assets/img/dog.jpg" 
        alt="Picsum"
        width="100" 
        height="200" 
        style="view-transition-name: hero1"
      />
      <div 
        class="fixed bottom-16 right-10 bg-blue-500 w-32 h-32"
        style="view-transition-name: hero2"
      >
      </div>
    </section>
  `,
  styles: ``
})
export default class ViewTransitionComponent {

}
