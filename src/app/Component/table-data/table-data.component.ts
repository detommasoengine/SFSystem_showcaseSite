// dashboard.component.ts
// import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import * as xlsx from 'xlsx';
import { read, utils, writeFile } from 'xlsx';
import { Component, OnInit } from '@angular/core';
import { FileService } from '../../Services/FileServices';


@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-data.component.css'],
  templateUrl: 'table-data.component.html',
  standalone: false,
  // imports: [MatTableModule],
})
export class TableBasicExample implements OnInit {
  ExcelData: any[] = []; // Usato per la tabella

  constructor(private fileService: FileService) {}

  ngOnInit(): void {
    // Chiamare la funzione per leggere il file quando il componente viene inizializzato
    this.loadExcelData();
  }

  loadExcelData(): void {
    const filePath = 'assets/data.xlsx'; // Percorso del file Excel

    this.fileService.readExcel(filePath)
      .then((data) => {
        // Dati letti con successo
        console.log('Dati letti:', data);
        this.ExcelData = data;
      })
      .catch((error) => {
        // Gestione degli errori
        console.error('Errore durante la lettura del file:', error);
      });
      
  }
}
