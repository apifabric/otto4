import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'transactions-card',
  templateUrl: './ServiceTechnician-card.component.html',
  styleUrls: ['./ServiceTechnician-card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    '[class.ServiceTechnician-card]': 'true'
  }
})

export class ServiceTechnicianCardComponent {


}