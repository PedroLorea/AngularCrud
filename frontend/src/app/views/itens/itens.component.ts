import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})


export class ItensComponent {

  constructor(private router: Router, private headerService: HeaderService){ 
    headerService.headerData = {
      titulo: 'Cadastro de Produtos',
      icone: 'storefront'
    }
  }

  navegarParaCriarItem(): void{
    this.router.navigate(['/itens/criar'])
  }


}
