import { Routes } from '@angular/router';
import { EmployeeData } from './pages/employee-data/employee-data';
import { Login } from './pages/login/login';
import { Home } from './pages/home/home';
import { Register } from './pages/register/register';
import { Leave } from './pages/leave/leave';
import { App } from './app';

export const routes: Routes = [
    { path : '' , component: Home} ,
    { path: 'employee-data',component: EmployeeData }, 
    { path : 'login', component: Login },
    { path : 'register', component: Register }, 
    { path: 'leave' , component:Leave}
];
