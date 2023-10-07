import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.css']
})
export class ItensComponent {

  constructor(private router: Router){ }

  navegarParaCriarItem(): void{
    this.router.navigate(['/itens/criar'])
  }


}
