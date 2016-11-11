import { ModuleWithProviders } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'admin', component: AdminComponent},
    { path: '**', redirectTo: ''}
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);