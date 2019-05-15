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
  MatSidenavModule
} from '@angular/material';
/* components */
import { PagesComponent } from './pages.component';
import { OperationsComponent } from './operations/operations.component';



@NgModule({

    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
      MatCardModule,
      MatProgressSpinnerModule,
      MatSidenavModule,
      MatTabsModule,
        FormsModule,
        ReactiveFormsModule,
        routing
    ],
    declarations: [
        PagesComponent,
        OperationsComponent,
        
    ],exports:[
        
    ]
})
export class PagesModule { }
