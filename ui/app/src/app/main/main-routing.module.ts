import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Customer', loadChildren: () => import('./Customer/Customer.module').then(m => m.CustomerModule) },
    
        { path: 'Insurance', loadChildren: () => import('./Insurance/Insurance.module').then(m => m.InsuranceModule) },
    
        { path: 'Inventory', loadChildren: () => import('./Inventory/Inventory.module').then(m => m.InventoryModule) },
    
        { path: 'Payment', loadChildren: () => import('./Payment/Payment.module').then(m => m.PaymentModule) },
    
        { path: 'Sale', loadChildren: () => import('./Sale/Sale.module').then(m => m.SaleModule) },
    
        { path: 'Salesperson', loadChildren: () => import('./Salesperson/Salesperson.module').then(m => m.SalespersonModule) },
    
        { path: 'Service', loadChildren: () => import('./Service/Service.module').then(m => m.ServiceModule) },
    
        { path: 'ServiceAppointment', loadChildren: () => import('./ServiceAppointment/ServiceAppointment.module').then(m => m.ServiceAppointmentModule) },
    
        { path: 'ServiceTechnician', loadChildren: () => import('./ServiceTechnician/ServiceTechnician.module').then(m => m.ServiceTechnicianModule) },
    
        { path: 'Supplier', loadChildren: () => import('./Supplier/Supplier.module').then(m => m.SupplierModule) },
    
        { path: 'Vehicle', loadChildren: () => import('./Vehicle/Vehicle.module').then(m => m.VehicleModule) },
    
        { path: 'Warranty', loadChildren: () => import('./Warranty/Warranty.module').then(m => m.WarrantyModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }