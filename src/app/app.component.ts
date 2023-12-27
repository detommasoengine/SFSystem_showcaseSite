
import { DataSourceService } from './data-source.service';
import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface PeriodicElement {
  data: Date;
  tempMedia: number;
  tempMin: number;
  tempMax: number;
  puntoRugiada: number;
  umiditaRelativa: number;
  visibilitaKm: number;
  ventoMediaSpeed: number;
  ventoMaxSpeed: number;
  pressioneSlm: number;
  pioggiamm: number;
  irraggiamento: number;
}


// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

// /**
//  * @title Basic use of `<table mat-table>`
//  */
@Component({
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [MatTableModule],
})
export class AppComponent implements OnInit{
  displayedColumns: string[] = [
    'data',
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
    'irraggiamento',];
    dataSource = new MatTableDataSource<PeriodicElement>([]);
  
    constructor(private dataSourceService: DataSourceService) {}
  
    ngOnInit() {
      this.dataSourceService.readExcel('../assets/data.xlsx')
        .then((jsonData) => {
          this.dataSource.data = jsonData as PeriodicElement[];
        })
        .catch((error) => {
          console.error('Errore nella lettura del file Excel:', error);
        });
    }
  }
