import { Component } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private headerService: HeaderService) { }

  get titulo(): string {
    return this.headerService.headerData.titulo
  }

  get icone(): string {
    return this.headerService.headerData.icone
  }
}
