import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { routing } from './pages.routing';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';


import {
     MatCardModule,
  MatProgressSpinnerModule,
  MatTabsModule,
  MatSidenavModule,
  MatDialogModule
} from '@angular/material';
/* components */
import { PagesComponent } from './pages.component';
import { OperationsComponent,DetailsComponent } from './operations/operations.component';




@NgModule({

    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
      MatCardModule,
      MatProgressSpinnerModule,
      MatSidenavModule,
      MatTabsModule,
      MatDialogModule,
        FormsModule,
        ReactiveFormsModule,
        routing
    ],
    declarations: [
        PagesComponent,
        OperationsComponent,
      DetailsComponent
    ],exports:[
        
  ],
  entryComponents: [DetailsComponent],
})
export class PagesModule { }
