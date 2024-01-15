import { Component, OnInit } from '@angular/core';
// import dataGrottaglie from '../../../../Models/Grottaglie copy/ArrayObjectGrottaglie';
import dataGrottaglieAnno1Summer from '../../../Models/Grottaglie copy/dataArrayGrottaglie2021Summer';

@Component({
  selector: 'app-et0-etc-trend',
  templateUrl: './et0-etc-trend.component.html',
  styleUrl: './et0-etc-trend.component.css',

})
export class Et0EtcTrendComponent implements OnInit{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any;


  

  ngOnInit() {
    if (typeof window !== 'undefined') {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

      // Filtra solo i dati con valori non null per Et0 ed Etc
    const filteredData = dataGrottaglieAnno1Summer.filter(obj => obj.Cultivar !== null );
     
      const etcData = filteredData.map(obj => obj.etc);
    const et0Data = filteredData.map(obj => obj.et0);

    // const dateLabels= filteredData.map(obj => obj.DATA);

      this.data = {
          labels: filteredData.map(obj => obj.DATA),
          datasets: [
              {
                  label: 'Et0',
                  fill: true,
                  borderColor: documentStyle.getPropertyValue('--blue-500'),
                  yAxisID: 'y',
                  tension: 0,
                  data: et0Data,
                  pointRadius: 0.5 // Imposta il raggio dei punti
              },
              {
                  label: 'Etc',
                  fill: false,
                  borderColor: documentStyle.getPropertyValue('--orange-500'),
                  yAxisID: 'y1',
                  tension: 0,
                  data: etcData,
                  pointRadius: 0.5 // Imposta il raggio dei punti
              }
          ]
      };
      //Configurazione dell'oggetto
      this.options = {
          stacked: false,
          maintainAspectRatio: false,
          responsive: true,
          plugins: {
              legend: {
                  labels: {
                      color: textColor
                  }
              }
          },
          scales: {
              x: {
                  ticks: {
                      color: textColorSecondary,
                      maxTicksLimit: 17,
                      maxRotation: 45, // Imposta l'angolo massimo di rotazione
                      minRotation: 45  // Imposta l'angolo minimo di rotazione
                  },
                  grid: {
                      color: surfaceBorder

                  }
              },
              y: {
                  type: 'linear',
                  display: true,
                  position: 'left',
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder
                  }
              },
              y1: {
                  type: 'linear',
                  display: true,
                  position: 'right',
                  ticks: {
                      color: textColorSecondary
                  },
                  grid: {
                      drawOnChartArea: false,
                      color: surfaceBorder
                  }
              }
            }
          }
      };
  }
}
