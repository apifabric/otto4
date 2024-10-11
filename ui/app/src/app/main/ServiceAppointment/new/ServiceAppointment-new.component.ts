import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ServiceAppointment-new',
  templateUrl: './ServiceAppointment-new.component.html',
  styleUrls: ['./ServiceAppointment-new.component.scss']
})
export class ServiceAppointmentNewComponent {
  @ViewChild("ServiceAppointmentForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}