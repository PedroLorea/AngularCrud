import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item.module';

@Component({
  selector: 'app-atualizar-item',
  templateUrl: './atualizar-item.component.html',
  styleUrls: ['./atualizar-item.component.css']
})

export class AtualizarItemComponent {

  item: Item = {
    nome: '',
    preco: null
  }

  constructor(private itemServico: ItemService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    if (id !== null) { this.itemServico.procuraItemPorId(id).subscribe((item) => {
      this.item = item;
    });} else {}
  }

  cancelar(){
    this.router.navigate(['/itens'])
  }

  atualizarItem(){
    this.itemServico.atualizar(this.item).subscribe(() => {
      this.itemServico.mostrarMensagem('Produto atualizado com sucesso!')
      this.router.navigate(['/itens'])
    })
  }

}
