import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';

export interface TableColumn {
  columnDef: string;
  header: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatCardModule, MatTableModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  @Input() dataSource:any[] = [];
  @Input() columns: TableColumn[] = [];

  get displayedColumns(): string[] {
    return this.columns.map(column => column.columnDef)
  }

}
