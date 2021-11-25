import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileComponent} from "./profile/profile.component";
import {UserComponent} from "./user/user.component";

const routes: Routes = [
    {
        path: 'user/profile/:id',
        component: ProfileComponent
    },
    {
        path: 'user',
        component: UserComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
