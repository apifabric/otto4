import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceTechnicianHomeComponent } from './home/ServiceTechnician-home.component';
import { ServiceTechnicianNewComponent } from './new/ServiceTechnician-new.component';
import { ServiceTechnicianDetailComponent } from './detail/ServiceTechnician-detail.component';

const routes: Routes = [
  {path: '', component: ServiceTechnicianHomeComponent},
  { path: 'new', component: ServiceTechnicianNewComponent },
  { path: ':id', component: ServiceTechnicianDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ServiceTechnician-detail-permissions'
      }
    }
  },{
    path: ':technician_id/Service', loadChildren: () => import('../Service/Service.module').then(m => m.ServiceModule),
    data: {
        oPermission: {
            permissionId: 'Service-detail-permissions'
        }
    }
}
];

export const SERVICETECHNICIAN_MODULE_DECLARATIONS = [
    ServiceTechnicianHomeComponent,
    ServiceTechnicianNewComponent,
    ServiceTechnicianDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceTechnicianRoutingModule { }