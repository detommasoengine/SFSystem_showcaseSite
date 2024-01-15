import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-grottaglie-winter2021-precipitation',
  templateUrl: './grottaglie-winter2021-precipitation.component.html',
  styleUrl: './grottaglie-winter2021-precipitation.component.css',
  standalone:true,
  imports:[ChartModule]
})
export class GrottaglieWinter2021PrecipitationComponent implements OnInit{

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  options: any;

  ngOnInit() {
      const documentStyle = getComputedStyle(document.documentElement);
      const textColor = documentStyle.getPropertyValue('--text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
      
//          // Filtra solo i dati con valori non null per Et0 ed Etc
//     const filteredData = dataGrottaglieAnno1Summer.filter(obj => obj.Cultivar !== null);
 
//     const etcData = filteredData.map(obj => obj.etc);
//   const et0Data = filteredData.map(obj => obj.et0);

//   // const dateLabels= filteredData.map(obj => obj.DATA);


      this.data = {
          labels: ['OTTOBRE', 'NOVEMBRE', 'DICEMBRE', 'GENNAIO'],
          datasets: [

            {
                type: 'line',
                label: 'Etc',
                borderColor: documentStyle.getPropertyValue('--black-700'),
                borderWidth: 4,
                fill: true,
                tension: 0,
                data: [0.25, 0.36, 0.77, 0.90]
            },
            {
                type: 'bar',
                label: 'Precipitazioni',
                backgroundColor: documentStyle.getPropertyValue('--orange-500'),
                data: [0.03, 6.27, 1.37, 0.88],
                borderColor: 'black',
                borderWidth: 3
            },
             
              
          ]
      };
      
      this.options = {
          maintainAspectRatio: false,
          aspectRatio: 0.5,
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
                      color: textColorSecondary
                  },
                  grid: {
                      color: surfaceBorder
                  }
              },
              y: {
                position: 'left', // Posizione dell'asse y
                  ticks: {
                      color: textColorSecondary,
                      font:{
                        size:14, // Modifica la dimensione del carattere
                        weight: 'bold' // Imposta il grassetto
                      }
                  },
                  grid: {
                      color: surfaceBorder
                  },
                  scaleLabel: {
                    display: true,
                    labelString: 'Precipitazioni mm', // Etichetta personalizzata
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