import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: '<app-menu>',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

  public menuItems = routes
                      .map(route => route.children ?? []) //All routes
                      .flat() // Contact all routes in the same array
                      .filter( route => route && route.path) //Exclude empty paths   ( / )
                      .filter( route => !route.path?.includes(':')) //Exclude routes that have params  ( user/:id )
  
}
