import { Component } from '@angular/core';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {MatIconModule} from '@angular/material/icon';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import { TabMenuModule } from 'primeng/tabmenu';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';


/**
 * @title Using tabs with a custom label template
 */

@Component({
  selector: 'app-table-group-bar',
  templateUrl: './tabs-group-bar.component.html',
  styleUrls: ['./tabs-group-bar.component.css'],
  standalone: false,
  // imports: [TabMenuModule,MatDividerModule,MatIconModule,MatTabsModule, CommonModule],
})
export class TabsGroupBarComponent {
  

  selectedTab: number = 0;  // Inizializza il tab selezionato a 0
  activeButtonId: string | null = null;  // Id del pulsante attivo


  buttons = [
    { label: 'Ginosa', id: 'ginosea' },
    { label: 'Grottaglie', id: 'grottaglieae' },
    { label: 'Montemesola', id: 'montemesolae' }
  ];

  tabs = [
    { label: '2021', id: '2021' },
    { label: '2022', id: '2022' }
  ];

  campaigns = [
    { label: 'Estate', id: 'estate' },
    { label: 'Inverno', id: 'inverno' }
  ];

  constructor() { }

  handleButtonClick(id: string): void {
    console.log(`Button clicked: ${id}`);
    this.activeButtonId = id;  // Aggiorna il pulsante attivo
    // Aggiungi qui la logica per gestire il click del pulsante
  }

  handleTabChange(index: number): void {
    console.log(`Tab changed: ${this.tabs[index].id}`);
    // Aggiungi qui la logica per gestire il cambio tab
    this.selectedTab = index;  // Aggiorna il tab selezionato
  }
}