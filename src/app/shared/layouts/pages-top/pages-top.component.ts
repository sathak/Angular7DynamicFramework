import { Component, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'pages-top',
  templateUrl: './pages-top.component.html',
  styleUrls: ['./pages-top.component.scss'],
})
export class PagesTopComponent  {
  avatarImgSrc: string = 'assets/images/logo.png';
  ProjName: string = 'Sample Project';
  ProjPost: string = 'The Slogan';


  sidebarToggle: boolean = true;
  tip = { ring: true, email: true };

  constructor(private _globalService: GlobalService, public _route: Router) {
    this._route.events
      .subscribe((event) => {
          if (event instanceof NavigationEnd) {
            console.log(event);
            if (event.url.indexOf('/pages/index')===0) {
              this.sidebarToggle = true;
              _globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);
            }
            else {
              this.sidebarToggle = false;
              _globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);
            }
          }
      });

  }

  public _sidebarToggle() {
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
    this._globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);


    //this._globalService._sidebarToggleState(!this.sidebarToggle);
  }

}
