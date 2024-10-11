import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceAppointmentHomeComponent } from './home/ServiceAppointment-home.component';
import { ServiceAppointmentNewComponent } from './new/ServiceAppointment-new.component';
import { ServiceAppointmentDetailComponent } from './detail/ServiceAppointment-detail.component';

const routes: Routes = [
  {path: '', component: ServiceAppointmentHomeComponent},
  { path: 'new', component: ServiceAppointmentNewComponent },
  { path: ':id', component: ServiceAppointmentDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ServiceAppointment-detail-permissions'
      }
    }
  },{
    path: ':service_appointment_id/Service', loadChildren: () => import('../Service/Service.module').then(m => m.ServiceModule),
    data: {
        oPermission: {
            permissionId: 'Service-detail-permissions'
        }
    }
}
];

export const SERVICEAPPOINTMENT_MODULE_DECLARATIONS = [
    ServiceAppointmentHomeComponent,
    ServiceAppointmentNewComponent,
    ServiceAppointmentDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceAppointmentRoutingModule { }