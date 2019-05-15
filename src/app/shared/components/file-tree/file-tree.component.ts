import { Component, OnInit, Input } from '@angular/core';
import { collapse } from '../../animation/collapse-animate';
import * as $ from 'jquery';

@Component({
  selector: 'file-tree',
  templateUrl: './file-tree.component.html',
  styleUrls: ['./file-tree.component.scss'],
  animations: [collapse]
})
export class FileTreeComponent implements OnInit {
  @Input() model: any;
  @Input() isChild: boolean;
  @Input() scope: any;
  constructor() { }

  ngOnInit() {
    this.model.forEach(element => {
      element.isSelect ? element.toggle = 'on' : element.toggle = 'init';
    });

  }

  private toggleItem(item,event) {
  
    $('.selected-bold').removeClass("selected-bold");
    if (item.toggle === 'on' && item.children!=undefined) {
      item.toggle = 'off';
  
    $(event.target).parents('.trees-items').find('span').removeClass("selected-bold");
    } else {
      item.toggle = 'on';
    
     $(event.target).parents('.trees-items').find('span').addClass("selected-bold");
    }
   // console.log(item);

    if (this.scope!=undefined && this.scope.folderClick != undefined) {
      this.scope.folderClick(item);
    }
  }

}
