import { Component } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private headerSerivce: HeaderService){
    headerSerivce.headerData = {
      titulo: 'Início',
      icone: 'home'
    }
  }

}
