import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { ClientSideRowModelModule, ColDef, ModuleRegistry } from 'ag-grid-community';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AgGridModule],
  template: `
    <div style="width: 100%; height: 100vh; display: flex; flex-direction: column;">
      <ag-grid-angular
        style="flex: 1;"
        class="ag-theme-alpine"
        [rowData]="rowData"
        [columnDefs]="columnDefs"
        [pagination]="true"
        [paginationPageSize]="1"
        [defaultColDef]="defaultColDef">
      </ag-grid-angular>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columnDefs: ColDef[] = [
    { 
      field: 'make', 
      headerName: 'Make', 
      sortable: true, 
      filter: 'agTextColumnFilter', 
      floatingFilter: true, 
      filterParams: { buttons: ['reset', 'apply'], debounceMs: 200 } 
    },
    { 
      field: 'model', 
      headerName: 'Model', 
      sortable: true, 
      filter: 'agTextColumnFilter', 
      floatingFilter: true 
    },
    { 
      field: 'price', 
      headerName: 'Price', 
      sortable: true, 
      filter: 'agNumberColumnFilter', 
      floatingFilter: true 
    }
  ];

  rowData = [
    { make: 'Toyota', model: 'Corolla', price: 35000 },
    { make: 'Ford', model: 'Mustang', price: 55000 },
    { make: 'BMW', model: 'M3', price: 75000 },
    { make: 'Tesla', model: 'Model S', price: 90000 },
    { make: 'Chevrolet', model: 'Camaro', price: 40000 },
    { make: 'Honda', model: 'Civic', price: 25000 },
    { make: 'Mercedes', model: 'C-Class', price: 65000 }
  ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    floatingFilter: true
  };
}
