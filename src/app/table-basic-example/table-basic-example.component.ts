import {Component, OnInit} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { DataSourceService } from '../data-source.service';

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

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.component.css'],
  templateUrl: 'table-basic-example.component.html',
  standalone: true,
  imports: [MatTableModule],
})
export class TableBasicExample implements OnInit {
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
    this.dataSourceService.readExcel('../../assets/data.xlsx')
      .then((jsonData) => {
        this.dataSource.data = jsonData as PeriodicElement[];
      })
      .catch((error) => {
        console.error('Errore nella lettura del file Excel:', error);
      });
  }
}