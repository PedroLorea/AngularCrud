import { Component } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item.module';

@Component({
  selector: 'app-excluir-item',
  templateUrl: './excluir-item.component.html',
  styleUrls: ['./excluir-item.component.css']
})

export class ExcluirItemComponent {

  item: Item = {
    nome: '',
    preco: null
  }

  constructor(private itemServico: ItemService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    if(id !== null) { this.itemServico.procuraItemPorId(id).subscribe((item) => {
      this.item = item
    })} else {}
  }

  cancelar() {
    this.router.navigate(['/itens'])
  }

  excluirItem() {
    this.itemServico.excluir(`${this.item.id}`).subscribe(() => {
      this.itemServico.mostrarMensagem('Produto excluído com sucesso!')
      this.router.navigate(['/itens'])
    })
  }
}
