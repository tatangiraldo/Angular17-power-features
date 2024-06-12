import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SingleUser } from '@interfaces/request-response';
import { UsersService } from '@services/users.service';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop'
import { switchMap } from 'rxjs';

@Component({
  standalone: true,
  imports: [TitleComponent],
  //templateUrl: './user.component.html',
  template: `
  <app-title [title]="userSelected()" />
  
  @if( user() ){
    <section>
      <img 
        [srcset]="user()!.avatar"
        [alt]="user()!.first_name"  
      />
      <div>
        <h3> {{user()?.first_name}} {{user()?.last_name}} </h3>
        <p> {{user()?.email}} </p>
      </div>
    </section>  
  }
  @else{
    <h2>Loading user...</h2>
  }

  `,
  styles: ``
})
export class UserComponent {
  
  private route = inject(ActivatedRoute)
  private usersServive = inject(UsersService)
  
  public user = toSignal( 
    this.route.params.pipe(
      switchMap( ({id}) => this.usersServive.getUser(id) )
    )
  )

  public userSelected = computed( () => {
    if(this.user()){
      return `User: ${this.user()?.first_name}`
    }
    return `User unknown`
  })


  constructor(){
    console.log(this.route.params)
  }

}
