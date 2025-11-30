import { Component, Input, inject } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ModalOrderComponent } from '../../../components/modal-order/modal-order.component';


export interface TableColumn {
  columnDef: string;
  header: string;
}

@Component({
    selector: 'app-table',
    imports: [MatTableModule, CommonModule, MatSelectModule, MatOptionModule],
    templateUrl: './table.component.html',
    styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() dataSource:any[] = [];
  @Input() columns: TableColumn[] = [];
  @Input() title: string = '';
  @Input() subtitle: string = '';

  readonly dialog = inject(MatDialog)

  get displayedColumns(): string[] {
    return this.columns.map(column => column.columnDef)
  }

  statusList = [
    { value: 'new', name: 'New' },
    { value: 'on process', name: 'On Process' },
    { value: 'delivery', name: 'Delivery' },
    { value: 'done', name: 'Done' }
  ];

  updateStatus(row: any, newValue: number) {
    row.status = newValue;
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'new':
        return 'status-new';
      case 'on process':
        return 'status-on-process';
      case 'delivery':
        return 'status-delivery';
      case 'done':
        return 'status-done';
      default:
        return '';
    }
  }

  createOrder(): void {
    this.dialog.open(ModalOrderComponent, {
      width: '500px',
      height: '412px'
    })
  }
}
