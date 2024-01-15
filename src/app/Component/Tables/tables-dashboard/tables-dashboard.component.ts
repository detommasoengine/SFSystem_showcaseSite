import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
// import { dataGrottaglie } from '../../../Models/Grottaglie copy/ArrayObjectGrottaglie';
// import dataGinosaAnno1Summer from '../../../Models/Ginosa/dataArrayGinosa2021Summer';
import { DataSourceGrottaglieService } from '../../../Services/data-source-grottaglie.service';
import { DataModel } from '../../../Models/dataModel.model';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import FileSaver from 'file-saver';
// import {DialogModule} from 'primeng/dialog'







interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
  fixed?: boolean;    //proprietà che imposta una colonna fissa e non deselezionabile
}

interface ExportColumn {
  title: string;
  dataKey: string;
}

@Component({
  selector: 'app-tables-dashboard',
  standalone: false,
  // imports: [TableModule, ButtonModule, MultiSelectModule, FormsModule],
  templateUrl: './tables-dashboard.component.html',
  styleUrls: ['./tables-dashboard.component.css'],
})
export class TablesDashboardComponent implements OnInit {
  dati!: DataModel[]; // Assicurati di specificare il percorso corretto

  // dialogVisible: boolean = true;


  selectedData!: DataModel[];

  
  constructor(
    private dataService: DataSourceGrottaglieService,
    private cd: ChangeDetectorRef,
    
  ) {}

  cols!: Column[];


  
  selectedColumns!: Column[];

  exportColumns!: ExportColumn[];

  ngOnInit() {
    this.dataService.getDataSet().then((data) => {
      this.dati = data;
      this.cd.markForCheck();
    });

    //  this.cols = [
    //      { field: 'cols!: Column[];

    this.cols = [
      { field: 'DATA', header: 'Data'},
      { field: 'tempMedia', header: 'TMedia °C' },
      { field: 'tempMin', header: 'Tmin °C' },
      { field: 'tempMax', header: 'TMAX °C' },
      { field: 'puntoRugiada', header: 'PUNTO RUGIADA °C' },
      { field: 'umiditaRelativa', header: 'UMIDITA %' },
      { field: 'visibilitaKm', header: 'VISIBILITA km' },
      { field: 'ventoMediaSpeed', header: 'VENTO MEDIA km/h' },
      { field: 'ventoMaxSpeed', header: 'VENTO MAX km/h' },
      { field: 'pressioneSlm', header: 'PRESSIONE SLM mb' },
      { field: 'pioggiamm', header: 'PIOGGIA mm' },
      { field: 'precipitazioni', header: 'Precipitazioni' },
      { field: 'irraggiamento', header: 'Irraggiamento [Wh/m²]' },
      { field: 'Cultivar', header: 'Cultivar' },
      { field: 'giornoCultivar', header: 'giorno Cultivar' },
      { field: 'faseFenologica', header: 'Fase Fenologica' },
      { field: 'irrigazioni1', header: 'IRRIGAZIONI 1' },
      { field: 'irrigazioni2', header: 'IRRIGAZIONI 2' },
      { field: 'turnoIrriguoHmm', header: 'Turno irriguo H (mm)' },
      { field: 'turnoIrriguoHmm1', header: 'Turno irriguo H (mm)' },
      { field: 'et0', header: 'ET0' },
      { field: 'kc', header: 'kc' },
      { field: 'etc', header: 'Etc' },
      { field: 'etcHargPioggiaEffettiva', header: 'Etc Harg. - pioggia Effettiva'},
      { field: 'turnoIrrigoHarg', header: 'Turno irriguo Harg. (mm)' },
      { field: 'turnoIrrigoHarg1', header: 'Turno irriguo Harg. (mm)' },
    ];



    
    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));

    this.selectedColumns = this.cols;

//     // Assicurati che la colonna "DATA" sia presente nelle colonne selezionate
// const dataColumn = this.cols.find(col => col.field === 'DATA');
// if (dataColumn) {
//   this.selectedColumns.unshift(dataColumn);
// }
  }


//   showDialog() {
//     this.dialogVisible = true;
 
    
// }





//   exportPdf() {
//     import('jspdf').then((jsPDF) => {
//         import('jspdf-autotable').then((x) => {
//             const doc = new jsPDF.default('p', 'px', 'a4');
//             (doc as any).autoTable(this.exportColumns, this.dati);
//             doc.save('dati_analitici.pdf');
//         });
//     });
// }


exportExcel() {
    import('xlsx').then((xlsx) => {
        const worksheet = xlsx.utils.json_to_sheet(this.dati);
        const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, 'analisidati');
    });
}


saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);

  }
}
