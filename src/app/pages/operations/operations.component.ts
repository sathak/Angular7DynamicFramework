import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatTabGroup, } from '@angular/material';
import { GlobalService } from '../../shared/services/global.service';
import { DataService } from '../../shared/services/data.service';
import {
  Router
} from '@angular/router';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss'],

})
export class OperationsComponent implements OnInit {
  
  constructor(public dialog: MatDialog, public dataService: DataService, public globals: GlobalService,public route:Router) { }
  options = {};
  FormFields = {};
  SiteRoleFields = {};
  columns = [];
  data = [];
  dataVar: any;
  selectedTab: string = 'search';
  selectedFolder: any;
  loading: boolean = false;
  token: any;


  ngOnInit() {
   // this.token = localStorage.getItem('userInfo');
   // if (this.token == null) {
    //  this.route.navigate(['/']);
   // }
    this.loading = true;
    this.dataService.get("http://localhost:59565/api/Authentication/2")
      .subscribe(resp => {
        // display its headers
        this.columns = [{
          title: "ID",
          rowId: "ID"
        },
        {
          title: "Name",
          rowId: "Name"
        },
        {
          title: "Staff ID",
          rowId: "StaffID"
        },
        {
          title: "Created On",
          rowId: "CreatedOn"
        },
        {
          title: "Last Modified On",
          rowId: "LastModifiedOn"
        }
        ];
        this.data = JSON.parse(resp.toString());
        this.FormFields = {
          "fields": [
            {
              key: 'firstname',
              type: 'textbox',
              label: 'First Name',
              value: '',
              required: false,
              errormessage: 'First Name Required!'
            },
            {
              key: 'lastname',
              type: 'textbox',
              label: 'Last Name',
              value: '',
              required: true,
              errormessage: 'Last Name Required!'
            }
            ,
            {
              key: 'date',
              type: 'datepicker',
              label: 'Date of birth',
              value: null,
              required: true,
              errormessage: 'DOB Required!'
            },
            {
              key: 'staffname',
              type: 'autocomplete',
              label: 'Staff Name',
              value: '',
              required: true,
              errormessage: 'Staff Name Required!',
              options: ['one', 'two', 'three', 'four', 'five', 'six', 'seven']
            },
            {
              key: 'region',
              type: 'select',
              label: 'Region',
              value: null,
              required: true,
              errormessage: 'Region Required!',
              options: ['one', 'two', 'three', 'four', 'five', 'six', 'seven']
            },
            {
              key: 'department',
              label: 'Department',
              type: 'multiselect',
              value: null,
              required: true,
              errormessage: 'Department Required!',
              options: ['one', 'two', 'three', 'four', 'five', 'six', 'seven']
            },
            {
              key: 'Users',
              label: 'User(s) ',
              type: 'multiautocomplete',
              value: null,
              required: true,
              errormessage: 'Users Required!',
              options: [{ 'Id': 1, 'displayText': 'Arun' }, { 'Id': 2, 'displayText': 'Varun' }, { 'Id': 3, 'displayText': 'Bob' }, { 'Id': 4, 'displayText': 'Babu' }, { 'Id': 5, 'displayText': 'chinnu' }]
            }
          ]
        };

        this.SiteRoleFields = {
          "fields": [
            {
              key: 'users',
              type: 'multiselect',
              label: 'User(s)',
              value: '',
              required: true,
              errormessage: 'User(s) Required!',
              options: ['Admin', 'Upload', 'View',]
            },
            {
              key: 'role',
              type: 'select',
              label: 'Role',
              value: '',
              required: true,
              errormessage: 'Role Required!',
              options: ['Admin', 'Upload', 'View',]
            },
            {
              key: 'confidential',
              type: 'checkbox',
              label: 'Is Confidential',
              value: false,
              required: false,
              errormessage: ''
            
            }
            ]
        }
        console.log(resp);
        setTimeout(() => {
          this.loading = false;
        }, 500);
      })


  }


  openDialog(row: any) {
    const dialogRef = this.dialog.open(DetailsComponent, {
      width: '75%',
      height: '75%',
      data: row,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
  rowClick(row: any, index: number) {
    console.log(index);
    console.log(row);
    this.openDialog(row);
  }
  tabClick(event: any) {
    console.log(event);
  }
  folderClick(item: any) {
    this.selectedFolder = item;
    this.globals.selectedFolder = item;
    console.log(this.selectedFolder);
  }


}

@Component({
  selector: 'details-component',
  templateUrl: 'details.component.html',

})
export class DetailsComponent {

  constructor(
    public dialogRef: MatDialogRef<DetailsComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

} 
