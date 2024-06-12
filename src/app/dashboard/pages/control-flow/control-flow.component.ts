import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';


type Grade = 'A'|'B'|'C'

@Component({
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal(false) 
  public grade = signal<Grade>('B')
  public frameworks = signal(['Angular', 'Ionic', 'Vue', 'React'])
  public frameworks2 = signal([])

  public imInFather = 'Subtitle'

  public toogleContent(){
    this.showContent.update( value => !value)
  }

}
