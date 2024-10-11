import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehicleHomeComponent } from './home/Vehicle-home.component';
import { VehicleNewComponent } from './new/Vehicle-new.component';
import { VehicleDetailComponent } from './detail/Vehicle-detail.component';

const routes: Routes = [
  {path: '', component: VehicleHomeComponent},
  { path: 'new', component: VehicleNewComponent },
  { path: ':id', component: VehicleDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Vehicle-detail-permissions'
      }
    }
  },{
    path: ':vehicle_id/Insurance', loadChildren: () => import('../Insurance/Insurance.module').then(m => m.InsuranceModule),
    data: {
        oPermission: {
            permissionId: 'Insurance-detail-permissions'
        }
    }
},{
    path: ':vehicle_id/Inventory', loadChildren: () => import('../Inventory/Inventory.module').then(m => m.InventoryModule),
    data: {
        oPermission: {
            permissionId: 'Inventory-detail-permissions'
        }
    }
},{
    path: ':vehicle_id/Sale', loadChildren: () => import('../Sale/Sale.module').then(m => m.SaleModule),
    data: {
        oPermission: {
            permissionId: 'Sale-detail-permissions'
        }
    }
},{
    path: ':vehicle_id/ServiceAppointment', loadChildren: () => import('../ServiceAppointment/ServiceAppointment.module').then(m => m.ServiceAppointmentModule),
    data: {
        oPermission: {
            permissionId: 'ServiceAppointment-detail-permissions'
        }
    }
},{
    path: ':vehicle_id/Warranty', loadChildren: () => import('../Warranty/Warranty.module').then(m => m.WarrantyModule),
    data: {
        oPermission: {
            permissionId: 'Warranty-detail-permissions'
        }
    }
}
];

export const VEHICLE_MODULE_DECLARATIONS = [
    VehicleHomeComponent,
    VehicleNewComponent,
    VehicleDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRoutingModule { }