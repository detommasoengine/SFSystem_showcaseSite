import { Component, OnInit } from '@angular/core';
import dataMontemesolaAnno1Winter from '../../../../Models/Montemesola/dataArrayMontemesola2021Winter';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-montemesola-winter2021-rains-etc-trend',
  templateUrl: './montemesola-winter2021-rains-etc-trend.component.html',
  styleUrl: './montemesola-winter2021-rains-etc-trend.component.css',
  standalone:true,
  imports:[ChartModule]
})
export class MontemesolaWinter2021RainsEtcTrendComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        // Filtra solo i dati con valori non null per Et0 ed Etc
          const filteredData = dataMontemesolaAnno1Winter.filter(obj => obj.Cultivar !== null);
   
          const rainsData = filteredData.map(obj => obj.precipitazioni);
          const etcData = filteredData.map(obj => obj.etc);
          const et0Data = filteredData.map(obj => obj.et0);

       // const dateLabels= filteredData.map(obj => obj.DATA);

      
      
      this.data = {
          labels: filteredData.map(obj => obj.DATA),
          datasets: [

              {
                  type: 'bar',
                  label: 'Precipitazioni',
                  backgroundColor: documentStyle.getPropertyValue('--orange-500'),
                  data: rainsData,
                  borderColor: 'black',
                  borderWidth: 0.3
              },

              {
                  type: 'line',
                  label: 'Et0',
                  borderColor: documentStyle.getPropertyValue('--green-500'),
                  borderWidth: 2,
                  fill: true,
                  tension: 0,
                  data: et0Data,
                  pointRadius: 0, // Imposta il raggio del punto a 0 per nascondere i pallini
              },
              
              {
                  type: 'line',
                  label: 'Etc',
                  borderColor: documentStyle.getPropertyValue('--blue-500'),
                  borderWidth: 2,
                  fill: false,
                  tension: 0,
                  data: etcData,
                  pointRadius: 0, // Imposta il raggio del punto a 0 per nascondere i pallini
              },
              
          ]
      };
      
      this.options = {
          maintainAspectRatio: false,
          aspectRatio: 0.6,
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
                      maxTicksLimit: 6,
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
                      color: textColorSecondary,
                      font: {
                          size: 14,
                          weight: 'bold'
                      }
                  },
                  grid: {
                      color: surfaceBorder
                  },
                  scaleLabel: {
                      display:true,
                      labelString: 'Precipitazioni mm',
                      color: textColor,
                      font: {
                          weight: 'bold'
                      }
                  }
              }
          }
      };
  }
}
