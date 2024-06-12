import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { IUsersResponse, SingleUser, IUserResponse } from '@interfaces/request-response';
import { delay, map } from 'rxjs';

interface State{
  users: SingleUser[],
  loading: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  // the '#' makes private the property, even inaccessible out of service
  #http = inject(HttpClient) 

  // the '#' makes private the property, even inaccessible out of service
  #state = signal<State>({
    loading: true, 
    users: []
  })
  //Computed allows to access as READONLY the signal properties declared above
  public users = computed( () => this.#state().users)
  public loading = computed( () => this.#state().loading)

  #url:string = 'https://reqres.in/api/users'
  
  constructor() {

    this.#http.get<IUsersResponse>(this.#url)
    .pipe( delay(1500) )
    .subscribe( res => {
      this.#state.set({
        loading: false,
        users: res.data
      })
      console.log(`Data: ${res.data}`)

    })
    console.log('Loading Data')
   }

   public getUser(id: number){

    return this.#http.get<IUserResponse>(`${this.#url}/${id}`)
      .pipe( 
        delay(1500),
        map( resp => resp.data )
      )
   }
}
