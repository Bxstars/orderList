import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';


export interface TableColumn {
  columnDef: string;
  header: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatTableModule, CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() dataSource:any[] = [];
  @Input() columns: TableColumn[] = [];
  @Input() title: string = '';
  @Input() subtitle: string = '';

  get displayedColumns(): string[] {
    return this.columns.map(column => column.columnDef)
  }

}
