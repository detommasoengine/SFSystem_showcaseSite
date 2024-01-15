import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SelectButtonModule } from 'primeng/selectbutton';

@Component({
  selector: 'app-button-se-campaign-selector',
  templateUrl: './button-se-campaign-selector.component.html',
  styleUrls: ['./button-se-campaign-selector.component.css'],
  // standalone:true,
  // imports:[SelectButtonModule, FormsModule]
})
export class ButtonSeCampaignSelectorComponent {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stateOptions: any[] = [
    {label: 'Invernale', value: 'invernale'}, 
    {label: 'Estiva', value: 'estiva'}];

    value: string = 'off';
}
