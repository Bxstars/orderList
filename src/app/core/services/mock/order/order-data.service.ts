import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderData = [
    {
      orderId: '#QN0067',
      date: '21-11-2024',
      nameCustomer: 'Harley',
      serviceType: 'Delivery',
      item: 'Yakissoba',
      quantity: '1',
      status: 'new',
      total: 75.00
    },
    {
      orderId: '#QN0068',
      date: '21-11-2024',
      nameCustomer: 'Bruce',
      serviceType: 'Take Away',
      item: 'Guioza',
      quantity: '2',
      status: 'delivery',
      total: 65.00
    },
    {
      orderId: '#QN0069',
      date: '21-11-2024',
      nameCustomer: 'Clark',
      serviceType: 'Delivery',
      item: 'Hot Rolls',
      quantity: '1',
      status: 'on process',
      total: 65.00
    },
    {
      orderId: '#QN0070',
      date: '21-11-2024',
      nameCustomer: 'Jonathan',
      serviceType: 'Delivery',
      item: 'Temaki',
      quantity: '3',
      status: 'done',
      total: 175.00
    },
    {
      orderId: '#QN0071',
      date: '21-11-2024',
      nameCustomer: 'Lana',
      serviceType: 'Take Away',
      item: 'Jyo',
      quantity: '4',
      status: 'new',
      total: 115.00
    },
    {
      orderId: '#QN0072',
      date: '21-11-2024',
      nameCustomer: 'Martha',
      serviceType: 'Delivery',
      item: 'Salmon teppan',
      quantity: '3',
      status: 'done',
      total: 125.00
    },
];

  constructor() { }

  getOrderData(): Observable<any[]> {
    return of(this.orderData)
  }
}
