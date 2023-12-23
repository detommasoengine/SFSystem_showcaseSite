import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table';
// import { ngxCsv } from 'ngx-csv';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
// import { Papa } from 'ngx-papaparse';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './Component/header/header.component';
import { CampagnaSelectorComponent } from './Component/campagna-selector/campagna-selector.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { TableBasicExample } from './Component/table-data/table-data.component';
import { GinosaComponent } from './Component/ginosa/ginosa.component';
import { GrottaglieComponent } from './Component/grottaglie/grottaglie.component';
import { MontemesolaComponent } from './Component/montemesola/montemesola.component';



@NgModule({
  declarations: [
    AppComponent,
    // HeaderComponent,
    GinosaComponent,
    GrottaglieComponent,
    MontemesolaComponent,
    DashboardComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableBasicExample,
    HttpClientModule,
    CommonModule,
    MatTableModule
    // MatSlideToggleModule,
    // MatToolbarModule,                                                                                                                                                  
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
