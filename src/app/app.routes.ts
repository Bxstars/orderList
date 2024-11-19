import { Routes } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { OrderComponent } from './components/order/order.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Home"
  },
  {
    path: 'order',
    component: OrderComponent,
    title: "Pedido"
  }
];
