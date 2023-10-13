import { Component } from '@angular/core';
import { Item } from '../item.module';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-lista-itens',
  templateUrl: './lista-itens.component.html',
  styleUrls: ['./lista-itens.component.css']
})


export class ListaItensComponent{
  
  itens: Item[] = [];
  displayedColumns = ['id', 'nome', 'preco']

  constructor(private itemServico: ItemService) { }

  ngOnInit(): void {
    this.itemServico.lista().subscribe(itens => {
      this.itens = itens
    })
  }
  
}
