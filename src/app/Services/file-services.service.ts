// // file-services.service.ts
// import { DataSource } from '@angular/cdk/collections';
// import { Injectable } from '@angular/core';
// import * as XLSX from 'xlsx';
// import { DataModel } from '../Models/dataModel.model';
// import { MatTableDataSource } from '@angular/material/table';

// @Injectable({
//   providedIn: 'root',
// })
// export class FileService {

//   dataSource = new MatTableDataSource<DataModel>([])              //variabile di istanza che verrà utilizzata nel componente utilizzata per fornire i dati che verranno
//   //visualizzati nella tabella attraverso la classe MatTableDataSource fornita dal modulo Angular Material, 
//   //che ha lo scopo di connettere <mat-table> a un set di dati semplificando l'aggiornamento dinamico dei dati
//   // visualizzati nella tabella. I dati sono tipizzati dall'Interfaccia DataModel. 


//   displayedColumns: string[] = []                                 // variabile di istanza utilizzata nel componente per definire quali colonne della tabella devono essere 
//   //visualizzate o in quali colonne devono essere presenti i dati.

  
  
//   constructor() {}

//   // Funzione per leggere e parserizzare il file Excel
//   readExcel(filePath: string): Promise<any[]> {                   //accetta un percorso del file Excel come argomento e restituisce una Promise che risolve in un array di tipo any[].
//     return new Promise((resolve, reject) => {                     //Promise che prende due funzioni di callback come parametri: resolve e reject, utilizzate per risolvere o rigettare la Promise a seconda del risultato.
//       // Percorso del file Excel
//       // Verifica se siamo lato client
//     if (typeof document !== 'undefined') {
//       const fileURL = new URL(filePath, document.baseURI).toString();
//       fetch(new URL(filePath, document.baseURI).toString())       //metodo per effettuare una richiesta HTTP per recuperare il file dal percorso specificato 
//         .then((response) => response.blob())                      //richiamo metodo blob per ottenere dati sotto forma di dati binari.
//         .then((blob) => {                                         //ritorno dei dati binari con successo, esegue il codice all'interno
          
//           //creazione nuovo oggetto 'file' utilizzando il costruttore File
//           const file = new File([blob], filePath, { type: blob.type });

//           const fileReader = new FileReader();                   //creazione oggetto FileReader (che contiene metodi per leggere ed interpretare dati binari), nella variabile fileReader

//           fileReader.onload = (e: any) => {
//             let workbook: XLSX.WorkBook = XLSX.read(fileReader.result, { type: 'binary' });
//             let sheetNames: string[] = workbook.SheetNames;
//             let sheet: XLSX.WorkSheet = workbook.Sheets[sheetNames[0]];
//             let jsonData = XLSX.utils.sheet_to_json(sheet);
//             this.dataSource.data = jsonData as DataModel[];
//             this.displayedColumns = Object.keys(jsonData[0] as string[]);

//             console.log('Dati letti:', jsonData); // Aggiungi questo console.log
//             resolve(jsonData);
//           };

//           fileReader.onerror = (error) => reject(error);

//           fileReader.readAsArrayBuffer(file);
//         })
//         .catch((error) => reject(error));
//       } else {
//         // Siamo lato server (prerendering), restituisci una Promise vuota o un valore di default
//       resolve([]);
//       }
//     });

    

//   }



//   setDisplayedColumns(columns: string[]): void {
//     this.displayedColumns = columns;
//   }

//   getDisplayedColumns(): string[] {
//     return this.displayedColumns;
//   }
  
// }
