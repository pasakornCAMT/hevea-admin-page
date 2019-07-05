import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-search-popup',
  templateUrl: './search-popup.component.html',
  styleUrls: ['./search-popup.component.css']
})
export class SearchPopupComponent implements OnInit {

  rowSelection = 'single';
  rowSelected:any = null
  constructor(
    public dialogRef: MatDialogRef<SearchPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onFirstDataRendered(params) {
    params.api.sizeColumnsToFit();
  }

  onRowClicked(event){
    console.log(event.data)
    this.rowSelected = event.data;
  }

  onApply (){
    this.dialogRef.close({
      data: this.rowSelected,
      rowIndex: this.data.rowIndex,
      colDef: this.data.colDef.field
    });
  }

  

}
