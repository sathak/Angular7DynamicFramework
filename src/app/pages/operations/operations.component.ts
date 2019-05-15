import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss'],
  
})
export class OperationsComponent implements OnInit {

  constructor() { }
  options = {};
  FormFields={};
  columns=[];
  data = [];
  selectedTab: string='search';
  selectedFolder: any;
  
  ngOnInit() {
   
    this.columns = [{
      title: "ID",
      rowId: "id"
    },
    {
      title: "Name",
      rowId: "name"
    },
    {
      title: "Progress",
      rowId: "progress"
    },
    {
      title: "Color",
      rowId: "color"
    }
    ];
    this.data = [    
      {"id":1,"name":"Ram", "progress":"85","color":"red"},    
      { "id": 2, "name": "Shyam", "progress": "85", "color": "red"},  
      { "id": 3, "name": "John", "progress": "85", "color": "red"},    
      { "id": 4,"name": "Bob", "progress": "85", "color": "red"},
     
    ];
    this.FormFields = {
      "fields": [
        {
          key: 'firstname',
          type: 'textbox',
          label:'First Name',
          value: '',
          required:false,
          errormessage:'First Name Required!'
        },
        {
          key: 'lastname',
          type: 'textbox',
          label:'Last Name',
          value: '',
          required:true,
          errormessage:'Last Name Required!'
        }
        ,
        {
          key: 'date',
          type: 'datepicker',
          label:'Date of birth',
          value: null,
          required:true,
          errormessage:'DOB Required!'
        },
        {
          key: 'staffname',
          type: 'autocomplete',
          label:'Staff Name',
          value: '',
          required:true,
          errormessage:'Staff Name Required!',
          options : ['one', 'two', 'three', 'four', 'five', 'six', 'seven']
        },
        {
          key: 'region',
          type: 'select',
          label:'Region',
          value: null,
          required:true,
          errormessage:'Region Required!',
          options : ['one', 'two', 'three', 'four', 'five', 'six', 'seven']
        },
        {
          key: 'department',
          label:'Department',
          type: 'multiselect',
          value: null,
          required:true,
          errormessage:'Department Required!',
          options : ['one', 'two', 'three', 'four', 'five', 'six', 'seven']
        }
      ]
    };
  }
  rowClick(row: any,index:number){
    console.log(index);
    console.log(row);
    
  }
  tabClick(event: any) {
    console.log(event);
  }
  folderClick(item:any) {
    this.selectedFolder = item;
    console.log(this.selectedFolder);
  }
}
