import { Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '@shared/heavy-loaders/heavy-loaders-fast';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  imports: [TitleComponent, HeavyLoadersFastComponent],
  templateUrl: './defer-options.component.html',
  styles: ``
})
export class DeferOptionsComponent {

}
