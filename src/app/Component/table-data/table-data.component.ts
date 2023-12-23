import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import * as xlsx from 'xlsx'



export interface DataSource {
  data: Date
  tempMedia: number;
  tempMin: number;
  tempMax: number;
  puntoRugiada: number;
  umiditàRelativa: number;
  visibilitaKm: number;
  ventoMediaSpeed: number;
  ventoMaxSpeed: number;
  pressioneSlm: number;
  pioggiamm: number;
  irraggiamento: number;

  // name: string;
  // position: number;
  // weight: number;
  // symbol: string;
}

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

// const ELEMENT_DATA: tableData = [
// ];
/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-data.component.css'],
  templateUrl: 'table-data.component.html',
  standalone: true,
  imports: [MatTableModule],
})
export class TableBasicExample {

  ExcelData: DataSource[] = [];
  displayedColumns: string[] = [
    'data',
    'tempMedia',
    'tempMin',
    'tempMax',
    'puntoRugiada',
    'umiditàRelativa',
    'visibilitaKm',
    'ventoMediaSpeed',
    'ventoMaxSpeed',
    'pressioneSlm',
    'pioggiamm',
    'irraggiamento',
  ];

  constructor() {}

  ReadExcelFile(event: any) {
    let file = event.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsBinaryString(file);

    fileReader.onload = (e) => {
      var workBook = xlsx.read(fileReader.result, { type: 'binary' });
      var sheetNames = workBook.SheetNames;
      this.ExcelData = xlsx.utils.sheet_to_json(workBook.Sheets[sheetNames[0]]);
    };
// ExcelData:any;
// displayedColumns: any;
//   constructor() { }

//   ReadExcelFile(event:any){

//     let file=event.target.files[0];

//     let fileReader = new FileReader();
//     fileReader.readAsBinaryString(file);
// console.log(file)
//     fileReader.onload= (e)=>{

//       var workBook = xlsx.read(fileReader.result,{type:'binary'});
//       var sheetNames= workBook.SheetNames;
//       xlsx.utils.sheet_to_json(workBook.Sheets[sheetNames[0]])
//      this.ExcelData= xlsx.utils.sheet_to_json(workBook.Sheets[sheetNames[0]])
    
//     }
 



//       // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
//       displayedColumns: string[] = ['data', 'tempMedia', 'tempMin', 'tempMax', 'puntoRugiada', 'umiditàRelativa', 'visibilitaKm', 'ventoMediaSpeed', 'ventoMaxSpeed', 'pressioneSlm', 'pioggiamm', 'irraggiamento'];
//       // dataSource = ELEMENT_DATA;
    
  }
}

