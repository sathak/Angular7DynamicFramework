import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';



/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'app-mat-table',
  styleUrls: ['material-datatable.component.scss'],
  templateUrl: 'material-datatable.component.html',
})
export class MaterialDatatableComponent implements OnInit {
 
  dataSource: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);
  public endorsementIds: string[] = [];


  @Input() columns :any;
  @Input() data: any;
  @Input() multiSelect: boolean;
  @Input() scope: any;
  displayedColumns: string[];



  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
  
  }

  ngOnInit() {
    // Assign the data to the data source for the table to render
    
    this.displayedColumns = this.columns.map(c => c.rowId);
    if (this.multiSelect) {
      
      this.displayedColumns.splice(0, 0, 'checkboxes');
    }
    this.displayedColumns.splice(this.displayedColumns.length, 0, 'star');
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  toggle(event, row) {
    let name = row.name;

    if (event.checked) {
      if (this.endorsementIds.indexOf(name) === -1) {
        this.endorsementIds.push(name);
        this.selection.select(row);
      }

    } else {
      const index = this.endorsementIds.indexOf(name);
      if (index > -1) {
        this.endorsementIds.splice(index, 1);
        this.selection.deselect(row);
      }
    }

    console.log(this.endorsementIds);
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle(ev) {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => {
        this.selection.select(row)
      });

    this.endorsementIds = [];
    this.dataSource.data.forEach(row => {
      if (this.selection.isSelected(row)) {
        this.endorsementIds.push(row);
      }
    });
    console.log(this.endorsementIds);
  }

  rowClick(row: any,index:number) {
    if (this.scope != undefined && this.scope.rowClick != undefined) {
      this.scope.rowClick(row, index);
    }
  }

}


