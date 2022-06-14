import { Component, Input, OnInit } from '@angular/core';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //Variaveis para exebir o titulo e o nome da empresa no html, valores estao ficticios.
  //@Input() title:string= "Inicio"  
  @Input() nomeEmpresa:string="Rafael"

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
  }

  get title(): string{
    return this.headerService.headerData.title
  }

  get routeUrl(): string{
    return this.headerService.headerData.routeUrl
  }

}
