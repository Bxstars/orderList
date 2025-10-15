import { Component } from '@angular/core';
import { TableColumn, TableComponent } from "../../shared/components/table/table.component";
import { CardsComponent } from "../../shared/components/cards/cards.component";
import { OrderService } from '../../core/services/mock/order/order-data.service';


@Component({
    selector: 'app-order',
    imports: [TableComponent, CardsComponent],
    templateUrl: './order.component.html',
    styleUrl: './order.component.css'
})
export class OrderComponent {
  title = 'Order List';
  subtitle = "View and manage all transactions with details on status, payment and customer."

  dataSource: any[] = [];

  tableColumns: TableColumn[] = [
    { columnDef: 'orderId', header: 'ID' },
    { columnDef: 'date', header: 'DATE' },
    { columnDef: 'nameCustomer', header: 'CUSTOMER' },
    { columnDef: 'serviceType', header: 'SERVICE TYPE' },
    { columnDef: 'item', header: 'ITEM NAME' },
    { columnDef: 'quantity', header: 'QTY' },
    { columnDef: 'status', header: 'STATUS' },
    { columnDef: 'total', header: 'TOTAL' },
  ];

  displayedColumns: string[] = [
    'orderId',
    'date',
    'nameCustomer',
    'serviceType',
    'item',
    'quantity',
    'status',
    'total'
  ];

  constructor(private orderService: OrderService) {
    this.orderService.getOrderData().subscribe((response) => {
      this.dataSource = response;
    })
  }

  ngOninit(): void {}

}
