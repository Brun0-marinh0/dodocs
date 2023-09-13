import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})

export class MainNavComponent {

  constructor(private routerLink : Router) {}

  routers = [
    {name: 'Sobre', link: '/about'},
    {name: 'Finalizados', link: '/about'},
    {name: 'Criar', link: '/about'},
    {name: 'Andamento', link: '/about'},
  ]

  selected: String = ''
  show: Boolean = false
  animationText: Boolean = false
  open: Boolean = false
  topStyle : number = 0.7
  showOption(router: string) {
   
   this.selected = router
   this.animationText = true
   this.show = true
  }
  out(){
    this.animationText = false
  }
  close(){
    if(!this.open){
      this.show = false
      this.topStyle = 0.7
      
    }
  }
  openLink(link: string){
    this.open = true
    this.topStyle = 0
    // this.routerLink.navigate([link])
  }
}
