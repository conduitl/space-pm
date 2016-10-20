import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
];

// simplifies registration of router dependencies; will make use of later
export const appRoutingProviders: any[] = [
    
];

// export the router
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);