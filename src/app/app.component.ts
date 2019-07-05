import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { SearchPopupComponent } from './search-popup/search-popup.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public dialog: MatDialog) {}
  title = 'admin-page';
  defaultColDef = { editable: true };
  columnDefs = [
    { 
      headerName: 'Consumer', 
      field: 'consumer',
    },
    { headerName: 'Factory Symbol', field: 'symbol' },
    { headerName: 'Grade', field: 'grade' },
    { headerName: 'Packing', field: 'packing' },
    { headerName: 'Incoterm', field: 'incoterm' },
    { headerName: 'Payment', field: 'payment' },
    { headerName: 'Destination', field: 'destination' },
    { headerName: 'Weight Per Pallet (kg)', field: 'weightPerPallet' },
    { headerName: 'Pallets', field: 'pallet' },
    { headerName: 'Default Vol (mt)', field: 'volume' },

  ];

  rowData = [
    {
      consumer: '',
      symbol: '',
      grade: '',
      packing: '',
      incoterm: '',
      payment: '',
      destination: '',
      weightPerPallet: '',
      pallet: '',
      volume: '',
    },
    {
      consumer: '',
      symbol: '',
      grade: '',
      packing: '',
      incoterm: '',
      payment: '',
      destination: '',
      weightPerPallet: '',
      pallet: '',
      volume: '',
    },
  ];
  onClickEdit(event){
    console.log(event);
    const dialogRef = this.dialog.open(SearchPopupComponent, {
      data: {
        rowIndex: event.node.rowIndex,
        colDef: event.colDef,
        columnDefs: [
            { headerName: 'ID', field: 'id'},
            { headerName: 'Name', field: 'name'},
        ],
        rowData: [
            { id: '0001', name: 'Test Name' },
            { id: '0001', name: 'Test Name' },
            { id: '0001', name: 'Test Name' },
            { id: '0001', name: 'Test Name' },
            { id: '0001', name: 'Test Name' },
            { id: '0001', name: 'Test Name' },
            { id: '0001', name: 'Test Name' },
            { id: '0001', name: 'Test Name' },
            { id: '0001', name: 'Test Name' },
            { id: '0001', name: 'Test Name' },
            { id: '0001', name: 'Test Name' },
            { id: '0001', name: 'Test Name' },
        ],
        rowSelected: {}
      },
      width: '800px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('result ',result);
      var index = result.rowIndex;
      var data = result.data;

    });
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }
}
