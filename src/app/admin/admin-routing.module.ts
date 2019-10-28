import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { BusinessComponent } from './business/business.component';
import { BusinessListComponent } from './business-list/business-list.component';
import { BusinessUpdateComponent } from './business-update/business-update.component';
import { BusinessCreateComponent } from './business-create/business-create.component';


const routes: Routes = [
    {

        path:  'admin',
        component:  BusinessComponent,
        children:[
    
            {
                path: 'list',
                component: BusinessListComponent
            },

            {
                path: 'update',
                component: BusinessUpdateComponent
            },

            {
                path: 'create',
                component: BusinessCreateComponent
            },

        ]
    }

   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }