// file.service.ts
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor() {}

  // Funzione per leggere e parserizzare il file Excel
  readExcel(filePath: string): Promise<any[]> {
    return new Promise((resolve, reject) => {
      // Sostituire con il percorso del tuo file Excel
      fetch(filePath)
        .then((response) => response.blob())
        .then((blob) => {
          const file = new File([blob], 'assets/data.xlsx', { type: 'application/vnd.ms-excel' });

          const reader = new FileReader();

          reader.onload = (e: any) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });

            console.log('Dati letti:', jsonData); // Aggiungi questo console.log
            resolve(jsonData);
          };

          reader.onerror = (error) => reject(error);

          reader.readAsArrayBuffer(file);
        })
        .catch((error) => reject(error));
    });
  }
}
