import { Routes } from '@angular/router';
import { MainPage } from './main/main.page'; // Ajusta la ruta si es necesario

export const routes: Routes = [
  { 
    path: 'main', 
    loadComponent: () => import('./main/main.page').then(m => m.MainPage) 
  }
];
