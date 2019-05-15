import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TreesService } from '../../services/trees.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  providers: [
    
    TreesService
  ]
})
export class SidebarComponent implements OnInit {


  public menuInfo: Array<any> = [];
  public sidebarToggle = true;
  fileData: Array<any>;
  routeurl: string;
  @Input() scope: any;

  constructor(
    public _globalService: GlobalService,
    private _TreesService: TreesService,
    public _route: Router
  ) {
    this._route.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.routeurl = event.url;
        }
      });

  }


  ngOnInit() {
    this.fileData = this._TreesService.FILE_DATA;
   
    this._sidebarToggle();
    
    this._isSelectItem(this.menuInfo);
    if (this.routeurl.indexOf('/pages/index')===0 ||this.routeurl === '/') {
      this._globalService.dataBusChanged('sidebarToggle', false);
    }
  }



  public _sidebarToggle() {
    // this._globalService._sidebarToggleState(true);
    /* this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
      this.sidebarToggle = sidebarToggle;
    }, error => {
      console.log('Error: ' + error);
    }); */
    this._globalService.data$.subscribe(data => {
      if (data.ev === 'sidebarToggle') {
        this.sidebarToggle = data.value;
      }
    }, error => {
      console.log('Error: ' + error);
    });

  }


  _isSelectItem(item) {
    for (const i in item) {
      if (item[i].children) {
        for (const index in item[i].children) {
          if (item[i].children[index].isActive || item[i].children[index].toggle === 'on') {
            item[i].toggle = 'on';
            break;
          } else {
            this._isSelectItem(item[i].children);
          }
        }
      }
    }
  }

}
