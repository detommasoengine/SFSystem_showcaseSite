import { Component, OnInit } from '@angular/core';
import dataGinosaAnno1Summer from '../../../../Models/Ginosa/dataArrayGinosa2021Summer';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-ginosa-summer2021-rainfall-fertigation-event',
  templateUrl: './summer2021-rainfall-fertigation-event.component.html',
  styleUrls: ['./summer2021-rainfall-fertigation-event.component.css'],
  standalone:true,
  imports:[ChartModule]
})
export class GinosaSummer2021RainfallFertigationEventComponent implements OnInit{

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
       const filteredData = dataGinosaAnno1Summer.filter(obj => obj.Cultivar !== null);

       const fertigation1data = filteredData.map(obj => obj.irrigazioni1);
       const fertigation2data = filteredData.map(obj => obj.irrigazioni2);
       const hIrriguoData = filteredData.map(obj => obj.turnoIrriguoHmm);
       const hIrriguo1Data = filteredData.map(obj => obj.turnoIrriguoHmm1);
       const rainsData = filteredData.map(obj => obj.precipitazioni);
    

       const etcData = filteredData.map(obj => obj.etc);

    // const dateLabels= filteredData.map(obj => obj.DATA);


    this.data = {
      labels: filteredData.map(obj => obj.DATA),
      datasets: [

            {
              type: 'line',
              label: 'Disonibilità 1',
              borderColor: documentStyle.getPropertyValue('--yellow-500'),
              borderWidth: 2,
              fill: true,
              tension: 0.5,
              data: hIrriguoData,
              pointRadius: 0, // Imposta il raggio del punto a 0 per nascondere i pallini
            },

            {
              type: 'line',
              label: 'Etc',
              borderColor: documentStyle.getPropertyValue('--black-500'),
              borderWidth: 2,
              fill: true,
              tension: 0.5,
              data: etcData,
              pointRadius: 0.3, // Imposta il raggio del punto a 0 per nascondere i pallini
          },

          {
            type: 'line',
            label: 'Disponibilità 2',
            borderColor: documentStyle.getPropertyValue('--green-500'),
            borderWidth: 2,
            fill: true,
            tension: 0.5,
            data: hIrriguo1Data,
            pointRadius: 0.3, // Imposta il raggio del punto a 0 per nascondere i pallini
        },
          
        {
          type: 'bar',
          label: 'IRRIGAZIONI 1',
          backgroundColor: documentStyle.getPropertyValue('--red-500'),
          data: fertigation1data,
          borderColor: 'black',
          borderWidth: 0.1
      },

      {
        type: 'bar',
        label: 'IRRIGAZIONI 2',
        backgroundColor: documentStyle.getPropertyValue('--orange-500'),
        data: fertigation2data,
        borderColor: 'black',
        borderWidth: 0.1
    },

          {
              type: 'bar',
              label: 'Precipitazioni',
              backgroundColor: documentStyle.getPropertyValue('--gray-500'),
              data: rainsData,
              borderColor: 'black',
              borderWidth: 0.1
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
                  maxTicksLimit: 13,
                  maxRotation: 90, // Imposta l'angolo massimo di rotazione
                  minRotation: 90  // Imposta l'angolo minimo di rotazione
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
