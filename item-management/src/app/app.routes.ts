// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { ItemListComponent } from './pages/item-list/item-list.component';

export const routes: Routes = [
  { path: '', redirectTo: 'items', pathMatch: 'full' },
  { path: 'items', component: ItemListComponent },
];
