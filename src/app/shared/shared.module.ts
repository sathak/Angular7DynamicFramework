import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxPaginationModule } from 'ngx-pagination';
import { JsonpModule } from '@angular/http';

import { CdkTableModule } from '@angular/cdk/table';

import {
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatSelectModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule,
  MatIconModule,
  MatButtonModule

} from '@angular/material';

import { GlobalService } from './services/global.service';

import { DataService } from './services/data.service';
import { AuthInterceptor } from './services/AuthInterceptor';

/* components */
import { CardComponent } from './components/card/card.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { TabsetComponent } from './components/tabset/tabset.component';
import { TabContentComponent } from './components/tabset/tab-content/tab-content.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { FileTreeComponent } from './components/file-tree/file-tree.component';
import { SwitchComponent } from './components/switch/switch.component';
import { PellEditorComponent } from './components/pell-editor/pell-editor.component';
import { AlertComponent } from './components/alert/alert.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DynamicFormComponent } from './components/dynamicform/dynamic-form-component';
import { DynamicFieldComponent } from './components/dynamicform/components/dynamic-field-component';
import { MaterialDatatableComponent } from './components/material-datatable/material-datatable.component';


@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatCardModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JsonpModule

  ],
  declarations: [
    CardComponent,
    FileTreeComponent,
    TodolistComponent,
    TabsetComponent,
    TabContentComponent,
    ProgressBarComponent,
    SwitchComponent,
    PellEditorComponent,
    AlertComponent,
    WeatherComponent,
    ProfileComponent,
    DynamicFormComponent,
    DynamicFieldComponent,
    MaterialDatatableComponent
  ],
  providers: [
    DataService,
    GlobalService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  exports: [
    CdkTableModule,
    CardComponent,
    FileTreeComponent,
    TodolistComponent,
    TabsetComponent,
    TabContentComponent,
    ProgressBarComponent,
    SwitchComponent,
    PellEditorComponent,
    AlertComponent,
    WeatherComponent,
    ProfileComponent,
    DynamicFormComponent,
    DynamicFieldComponent,
    MaterialDatatableComponent
  ]
})
export class SharedModule { }
