import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BusinessComponent } from './business/business.component';
import { BusinessListComponent } from './business-list/business-list.component';
import { BusinessCreateComponent } from './business-create/business-create.component';
import { LoginComponent } from './login/login.component';
import { AdminGuard } from './admin.guard';



const routes: Routes = [
    {

        path:  '',
        component:  BusinessComponent,
        children: [

            {
                path: 'list',
                component: BusinessListComponent,
                canActivate: [AdminGuard]
            },

            {
                path: 'create',
                component: BusinessCreateComponent,
                canActivate: [AdminGuard]
            },

            {
                path: 'login',
                component: LoginComponent
            },

        ]
    },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
