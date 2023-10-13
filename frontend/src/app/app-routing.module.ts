import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent} from './views/home/home.component'
import { ItensComponent} from './views/itens/itens.component'
import { CriarItemComponent } from './components/itens/criar-item/criar-item.component';
import { AtualizarItemComponent } from './components/itens/atualizar-item/atualizar-item.component';
import { ExcluirItemComponent } from './components/itens/excluir-item/excluir-item.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},{
  path: "itens",
  component: ItensComponent
},{
  path: "itens/criar",
  component: CriarItemComponent
},{
  path: "itens/atualizar/:id",
  component: AtualizarItemComponent
},{
  path: "itens/deletar/:id",
  component: ExcluirItemComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
