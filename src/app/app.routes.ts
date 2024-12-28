import { Routes } from '@angular/router';
import { OrderComponent } from './components/order/order.component';
import { HomeComponent } from './components/home/home.component';
import { NoFoundComponent } from './shared/components/generic-pages/no-found/no-found.component';
import { UnderConstructionComponent } from './shared/components/generic-pages/under-construction/under-construction.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    data: { title: "Home" },
  },
  {
    path: "not-found",
    component: NoFoundComponent,
    data: { title: "404 Not Found" },
  },
  {
    path: "under-construction",
    component: UnderConstructionComponent,
    data: { title: "Under Construction" },
  },
  {
    path: 'order',
    component: OrderComponent,
    data: { title: "Order" },
  },
  {
    path: 'customers',
    component: UnderConstructionComponent,
    data: { title: "Customers" },
  },
  {
    path: 'setting',
    component: UnderConstructionComponent,
    data: {title: "Setting"}
  },
  { path: '**', redirectTo: 'not-found' },
];
