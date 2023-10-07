import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './views/home/home.component'
import { ItensComponent} from './views/itens/itens.component'

const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "itens",
  component: ItensComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
