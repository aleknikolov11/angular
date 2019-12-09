import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserAddComponent } from './user-add/user-add.component';

const routes: Routes = [
    {
        path: 'users',
        component: UserListComponent
    },
    {
        path: 'users/add',
        component: UserAddComponent,
    },
    {
        path: 'users/:name',
        component: UserViewComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}
