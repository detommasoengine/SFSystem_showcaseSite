import { Component, OnInit } from '@angular/core';
import dataMontemesolaAnno2Winter from '../../../../Models/Montemesola/dataArrayMontemesola2022Winter';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-montemesola-winter2022-et0-etc-trend',
  templateUrl: './montemesola-winter2022-et0-etc-trend.component.html',
  styleUrl: './montemesola-winter2022-et0-etc-trend.component.css',
  standalone:true,
  imports:[ChartModule]
})
export class MontemesolaWinter2022Et0EtcTrendComponent implements OnInit
{
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
  const filteredData = dataMontemesolaAnno2Winter.filter(obj => obj.Cultivar !== null);
   
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
                data: et0Data
            },
            {
                label: 'Etc',
                fill: false,
                borderColor: documentStyle.getPropertyValue('--orange-500'),
                yAxisID: 'y1',
                tension: 0,
                data: etcData
            }
        ]
    };
    
    this.options = {
        stacked: false,
        maintainAspectRatio: false,
        aspectRatio: 0.7,
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
    };
}
}
