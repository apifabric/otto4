import { MenuRootItem } from 'ontimize-web-ngx';

import { CustomerCardComponent } from './Customer-card/Customer-card.component';

import { InsuranceCardComponent } from './Insurance-card/Insurance-card.component';

import { InventoryCardComponent } from './Inventory-card/Inventory-card.component';

import { PaymentCardComponent } from './Payment-card/Payment-card.component';

import { SaleCardComponent } from './Sale-card/Sale-card.component';

import { SalespersonCardComponent } from './Salesperson-card/Salesperson-card.component';

import { ServiceCardComponent } from './Service-card/Service-card.component';

import { ServiceAppointmentCardComponent } from './ServiceAppointment-card/ServiceAppointment-card.component';

import { ServiceTechnicianCardComponent } from './ServiceTechnician-card/ServiceTechnician-card.component';

import { SupplierCardComponent } from './Supplier-card/Supplier-card.component';

import { VehicleCardComponent } from './Vehicle-card/Vehicle-card.component';

import { WarrantyCardComponent } from './Warranty-card/Warranty-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Customer', name: 'CUSTOMER', icon: 'view_list', route: '/main/Customer' }
    
        ,{ id: 'Insurance', name: 'INSURANCE', icon: 'view_list', route: '/main/Insurance' }
    
        ,{ id: 'Inventory', name: 'INVENTORY', icon: 'view_list', route: '/main/Inventory' }
    
        ,{ id: 'Payment', name: 'PAYMENT', icon: 'view_list', route: '/main/Payment' }
    
        ,{ id: 'Sale', name: 'SALE', icon: 'view_list', route: '/main/Sale' }
    
        ,{ id: 'Salesperson', name: 'SALESPERSON', icon: 'view_list', route: '/main/Salesperson' }
    
        ,{ id: 'Service', name: 'SERVICE', icon: 'view_list', route: '/main/Service' }
    
        ,{ id: 'ServiceAppointment', name: 'SERVICEAPPOINTMENT', icon: 'view_list', route: '/main/ServiceAppointment' }
    
        ,{ id: 'ServiceTechnician', name: 'SERVICETECHNICIAN', icon: 'view_list', route: '/main/ServiceTechnician' }
    
        ,{ id: 'Supplier', name: 'SUPPLIER', icon: 'view_list', route: '/main/Supplier' }
    
        ,{ id: 'Vehicle', name: 'VEHICLE', icon: 'view_list', route: '/main/Vehicle' }
    
        ,{ id: 'Warranty', name: 'WARRANTY', icon: 'view_list', route: '/main/Warranty' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    CustomerCardComponent

    ,InsuranceCardComponent

    ,InventoryCardComponent

    ,PaymentCardComponent

    ,SaleCardComponent

    ,SalespersonCardComponent

    ,ServiceCardComponent

    ,ServiceAppointmentCardComponent

    ,ServiceTechnicianCardComponent

    ,SupplierCardComponent

    ,VehicleCardComponent

    ,WarrantyCardComponent

];