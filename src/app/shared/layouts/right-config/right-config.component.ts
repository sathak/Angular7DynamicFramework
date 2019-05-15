import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'right-config',
  templateUrl: './right-config.component.html',
  styleUrls: ['./right-config.component.scss']
})
export class RightConfigComponent implements OnInit {

  isConfigToggle: boolean = false;
  route: string;
  pagename:string;
  constructor(private _globalService: GlobalService) {
   
   }

  ngOnInit() { }

  configToggle() {
    this.isConfigToggle = !this.isConfigToggle;
    //this._globalService._sidebarToggleState(!this.isConfigToggle);
   // this.pagename=this._globalService.getData({'isActived'});
    //console.log(this.pagename);
    //this._globalService.dataBusChanged('sidebarToggle', !this.isConfigToggle);
    
  }
}
