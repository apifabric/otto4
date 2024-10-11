import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SERVICEAPPOINTMENT_MODULE_DECLARATIONS, ServiceAppointmentRoutingModule} from  './ServiceAppointment-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ServiceAppointmentRoutingModule
  ],
  declarations: SERVICEAPPOINTMENT_MODULE_DECLARATIONS,
  exports: SERVICEAPPOINTMENT_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServiceAppointmentModule { }