import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TableBasic } from './Component/Tables/table-data.component';
import { HeaderComponent } from './Component/header/header.component';
// import { TabsGroupBarComponent } from './Component/table-group-bar/tabs-group-bar.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { ButtonSeCampaignSelectorComponent } from './Component/button-se-campaign-selector/button-se-campaign-selector.component';


// import { FileService } from './Services/file-services.service';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { ChartModule } from 'primeng/chart';
import { TabMenuModule } from 'primeng/tabmenu';
import { BadgeModule } from 'primeng/badge';
import { SplitterModule } from 'primeng/splitter';
import { SelectButtonModule } from 'primeng/selectbutton';
import { TabsGroupBarComponent } from './Component/table-group-bar/tabs-group-bar.component';
import { FormsModule } from '@angular/forms';
import { Et0EtcTrendComponent } from './Component/Charts/et0-etc-trend/et0-etc-trend.component';
import { RainfallFertigationEventComponent } from './Component/Charts/rainfall-fertigation-event/rainfall-fertigation-event.component';
import { RainEt0EtcTrendComponent } from './Component/Charts/rain-et0-etc-trend/rain-et0-etc-trend.component';
import { PrecipitationComponent } from './Component/Charts/precipitation/precipitation.component';
import { DividerModule } from 'primeng/divider';
import { dataGrottaglie } from './Models/Grottaglie copy/ArrayObjectGrottaglie';
import { CommonModule } from '@angular/common';
import {MultiSelectModule } from 'primeng/multiselect';
import { TablesDashboardComponent } from './Component/Tables/tables-dashboard/tables-dashboard.component';
import { DataSourceGrottaglieService } from './Services/data-source-grottaglie.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';



// import { FormControl, FormGroup } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    TableBasic,
    HeaderComponent,
    DashboardComponent,
    ButtonSeCampaignSelectorComponent,
    TabsGroupBarComponent,
    TablesDashboardComponent,

//Grafici Precipitazioni Et0 Etc
Et0EtcTrendComponent,
PrecipitationComponent,
RainfallFertigationEventComponent,
RainEt0EtcTrendComponent,

//Grafici andamento Precipitazioni
//Grafici Irrigazioni
    

  //  ===============================================================

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    ChartModule,
    MatTabsModule,
    MatDividerModule,
    MatIconModule,
  TabMenuModule,
    BadgeModule,
    SplitterModule,
    FormsModule,
    // FormControl,
  //   FormGroup,
    SelectButtonModule,
    DividerModule,
    CommonModule,
    MultiSelectModule,
    TableModule,
    ButtonModule,
    DialogModule

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideClientHydration(),
    // FileService
    DataSourceGrottaglieService,
    dataGrottaglie
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }