import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/components/header/header.component";
import { TableColumn, TableComponent } from "../../shared/components/table/table.component";

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [HeaderComponent, TableComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {

  tableColumns: TableColumn[] = [
    { columnDef: 'position', header: 'No.' },
    { columnDef: 'name', header: 'Name' },
    { columnDef: 'weight', header: 'Weight' },
    { columnDef: 'symbol', header: 'Symbol' },
  ];


  dataSource = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  ];


}
