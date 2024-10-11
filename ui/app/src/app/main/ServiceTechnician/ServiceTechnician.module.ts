import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SERVICETECHNICIAN_MODULE_DECLARATIONS, ServiceTechnicianRoutingModule} from  './ServiceTechnician-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ServiceTechnicianRoutingModule
  ],
  declarations: SERVICETECHNICIAN_MODULE_DECLARATIONS,
  exports: SERVICETECHNICIAN_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServiceTechnicianModule { }