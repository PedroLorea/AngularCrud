import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
import { Item } from '../item.module';

@Component({
  selector: 'app-criar-item',
  templateUrl: './criar-item.component.html',
  styleUrls: ['./criar-item.component.css']
})
export class CriarItemComponent {

  item: Item = {
    nome: '',
    preco: null
  }

  constructor(private itemServico: ItemService, 
    private router: Router){ }

    criarItem(): void {
      this.itemServico.criar(this.item).subscribe(() => {
        this.itemServico.mostrarMensagem('Produto criado com sucesso!')
        this.router.navigate(['/itens'])
      })

    }

    cancelar(): void {
      this.router.navigate(['/itens'])
    }
  
}
