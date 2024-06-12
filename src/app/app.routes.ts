import { Routes } from '@angular/router';
import { DeferOptionsComponent } from './dashboard/pages/defer-options/defer-options.component';
import { DeferViewsComponent } from './dashboard/pages/defer-views/defer-views.component';
import { UsersComponent } from './dashboard/pages/users/users.component';
import { UserComponent } from './dashboard/pages/user/user.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component'),
        children: [
            {
                path: '',
                redirectTo: 'control-flow',
                pathMatch: 'full'
            },
            {
                path: 'change-detenction',
                title: 'Change Detection',
                loadComponent: () => import('./dashboard/pages/change-detection/change-detection.component'),
            },
            {
                path: 'control-flow',
                title: 'Control Flow',
                loadComponent: () => import('./dashboard/pages/control-flow/control-flow.component'),
            },
            {
                path: 'defer-options',
                title: 'Defer Options',
                component: DeferOptionsComponent
            },
            {
                path: 'defer-views',
                title: 'Defer Views',
                component: DeferViewsComponent
            },
            {
                path: 'user-list',
                title: 'User List',
                component: UsersComponent
            },
            {
                path: 'user/:id',
                title: 'User',
                component: UserComponent
            },
            {
                path: 'view-transition-1',
                title: 'View Transition-1',
                loadComponent: () => import('./dashboard/pages/view-transition/view-transition1.component')
            },
            {
                path: 'view-transition-2',
                title: 'View Transition-2',
                loadComponent: () => import('./dashboard/pages/view-transition/view-transition2.component')
            }
        ]
    }
];
