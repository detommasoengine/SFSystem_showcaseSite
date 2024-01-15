import dataGinosaAnno1Summer from "../../Models/Ginosa/dataArrayGinosa2021Summer";
import { DataModel } from "../../Models/dataModel.model";
import { MatTableModule } from "@angular/material/table";
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";

/**
 * @title Table with pagination
 */
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'table-basic',
  styleUrls: ['table-data.component.css'],
  templateUrl: 'table-data.component.html',
  standalone: false,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class TableBasic implements AfterViewInit {
  displayedColumns: string[] = [
                                'DATA', 
                                'tempMedia', 
                                'tempMin', 
                                'tempMax',
                                'puntoRugiada',
                                'umiditaRelativa',
                                'visibilitaKm',
                                'ventoMediaSpeed',
                                'ventoMaxSpeed',
                                'pressioneSlm',
                                'pioggiamm',
                                'precipitazioni',
                                'irraggiamento',
                                'Cultivar',
                                'giornoCultivar',
                                'faseFenologica',
                                'irrigazioni1',
                                'irrigazioni2',
                                'turnoIrriguoHmm',
                                'turnoIrriguoHmm1',
                                'et0',
                                'kc',
                                'etc',
                                'etcHargPioggiaEffettiva',
                                'turnoIrrigoHarg',
                                'turnoIrrigoHarg1',
                              ];
  dataSource = new MatTableDataSource<DataModel>(Ginosa);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  
  

  ngAfterViewInit() {
    
    this.dataSource.paginator = this.paginator;
  }
}




const Ginosa:DataModel[]=dataGinosaAnno1Summer

// // Stampa l'array di oggetti
// for (const object of Grottaglie) {
//     console.log(object);
//   }