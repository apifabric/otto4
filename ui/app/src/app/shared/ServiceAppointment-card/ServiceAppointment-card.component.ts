import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ServiceAppointment-card.component.html',
  styleUrls: ['./ServiceAppointment-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ServiceAppointment-card]': 'true'
  }
})

export class ServiceAppointmentCardComponent {


}