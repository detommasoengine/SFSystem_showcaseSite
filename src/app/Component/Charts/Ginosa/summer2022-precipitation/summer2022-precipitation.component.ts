import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-ginosa-summer2022-precipitation',
  templateUrl: './summer2022-precipitation.component.html',
  styleUrls: ['./summer2022-precipitation.component.css'],
  standalone:true,
  imports:[ChartModule]
})
export class GinosaSummer2022PrecipitationComponent implements OnInit{

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
//     const filteredData = dataGrottaglieAnno1Summer.filter(obj => obj.Cultivar !== null );
 
//     const etcData = filteredData.map(obj => obj.etc);
//   const et0Data = filteredData.map(obj => obj.et0);

//   // const dateLabels= filteredData.map(obj => obj.DATA);


      this.data = {
          labels: ['APRILE', 'MAGGIO', 'GIUGNO'],
          datasets: [

            {
                type: 'line',
                label: 'Etc',
                borderColor: documentStyle.getPropertyValue('--black-700'),
                borderWidth: 4,
                fill: true,
                tension: 0,
                data: [0.47, 1.12, 4.81]
            },
            {
                type: 'bar',
                label: 'Precipitazioni',
                backgroundColor: documentStyle.getPropertyValue('--orange-500'),
                data: [0.10, 1.12, 1.42],
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