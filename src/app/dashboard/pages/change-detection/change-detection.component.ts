import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-title title="Change Detection" [text]="currentFramework()" />

    <pre>{{ frameworkAsSignal() | json }}</pre>
    <pre>{{ frameworkAsProperty | json }}</pre>
  `,
  styles: ``
})
export default class ChangeDetectionComponent {

  //This component uses changeDetectionStrategy ON PUSH
  //This component uses changeDetectionStrategy ON PUSH
  //This component uses changeDetectionStrategy ON PUSH
  
  public frameworkAsSignal = signal({
    name: 'angular',
    release: '2016'
  })

  public frameworkAsProperty = {
    name: 'angular',
    release: '2016'
  }

  public currentFramework = computed( () => {
    return `Change detection - ${this.frameworkAsSignal().name}`
  })

  constructor(){
    
    //This component uses changeDetectionStrategy ON PUSH
    //This component uses changeDetectionStrategy ON PUSH
    //This component uses changeDetectionStrategy ON PUSH

    setTimeout(() => {

      this.frameworkAsSignal.update( val => ({
        ...val,
        name: 'Pascal'
      }))

      console.log('Done')
    }, 3000);
  }

}
