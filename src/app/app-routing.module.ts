import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { TableBasicExample } from './Component/table-data/table-data.component';
import { GinosaComponent } from './Component/ginosa/ginosa.component';
import { GrottaglieComponent } from './Component/grottaglie/grottaglie.component';
import { MontemesolaComponent } from './Component/montemesola/montemesola.component';

const routes: Routes = [
{path:'', component:TableBasicExample},
{path:'Dati', component:TableBasicExample},
{path:'Ginosa', component:GinosaComponent},
{path:'Grottaglie', component:GrottaglieComponent},
{path:'Montemesola', component:MontemesolaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
