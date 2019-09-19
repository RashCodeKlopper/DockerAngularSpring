import {Component, OnInit, ViewChild} from '@angular/core';

import {MatDialog, MatTable} from '@angular/material';
import {DialogBoxComponent} from '../dialog-box/dialog-box.component';

export interface UsersData {
  name: string;
  id: number;
}

const ELEMENT_DATA: UsersData[] = [
  {id: 1560608769632, name: 'Artificial Intelligence'},
  {id: 1560608796014, name: 'Machine Learning'},
  {id: 1560608787815, name: 'Robotic Process Automation'},
  {id: 1560608805101, name: 'Blockchain'}
];

@Component({
  selector: 'app-material-demo',
  templateUrl: './material-demo.component.html',
  styleUrls: ['./material-demo.component.css']
})
export class MaterialDemoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'action'];
  dataSource = ELEMENT_DATA;

  @ViewChild(MatTable, {static: true}) table: MatTable<any>;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '500px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event === 'Add') {
        this.addRowData(result.data);
      } else if (result.event === 'Update') {
        this.updateRowData(result.data);
      } else if (result.event === 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(rowObj) {
    const date = new Date();
    this.dataSource.push({
      id: date.getTime(),
      name: rowObj.name
    });
    this.table.renderRows();

  }

  updateRowData(rowObj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      if (value.id === rowObj.id) {
        value.name = rowObj.name;
      }
      return true;
    });
  }

  deleteRowData(rowObj) {
    this.dataSource = this.dataSource.filter((value, key) => {
      return value.id !== rowObj.id;
    });
  }
}
