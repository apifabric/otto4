import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ServiceTechnician-new',
  templateUrl: './ServiceTechnician-new.component.html',
  styleUrls: ['./ServiceTechnician-new.component.scss']
})
export class ServiceTechnicianNewComponent {
  @ViewChild("ServiceTechnicianForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}