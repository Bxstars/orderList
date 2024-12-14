import { Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { HomeComponent } from './components/home/home.component';
import { NoFoundComponent } from './shared/components/generic-pages/no-found/no-found.component';
import { UnderConstructionComponent } from './shared/components/generic-pages/under-construction/under-construction.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Home"
  },
  {
    path: "not-found",
    component: NoFoundComponent,
    title: "404 Not Found"
  },
  {
    path: "under-construction",
    component: UnderConstructionComponent,
    title: "503 Service Unavailable"
  },
  {
    path: 'order',
    component: OrderComponent,
    title: "Order"
  },
  {
    path: 'customers',
    component: UnderConstructionComponent,
    title: "Customer"
  },
  {
    path: 'setting',
    component: UnderConstructionComponent,
    title: "Setting"
  },
  { path: '**', redirectTo: 'not-found' },
];
