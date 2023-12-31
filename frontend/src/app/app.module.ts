import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatSidenavModule }from '@angular/material/sidenav'
import { MatCardModule }from '@angular/material/card'
import { MatListModule }from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';
import { ItensComponent } from './views/itens/itens.component';
import { CriarItemComponent } from './components/itens/criar-item/criar-item.component';
import { MatButtonModule }from '@angular/material/button'
import { MatSnackBarModule }from '@angular/material/snack-bar'

import { HttpClientModule } from '@angular/common/http'

import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'

import { ListaItensComponent } from './components/itens/lista-itens/lista-itens.component'
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AtualizarItemComponent } from './components/itens/atualizar-item/atualizar-item.component';
import { ExcluirItemComponent } from './components/itens/excluir-item/excluir-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ItensComponent,
    CriarItemComponent,
    ListaItensComponent,
    AtualizarItemComponent,
    ExcluirItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

