import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})

export class MainNavComponent {

  constructor(public routerLink : Router) {
    routerLink.events.subscribe((val) => {
      this.restart(this.routerLink.url.toString())
    })
  }

  routers = [
    {name: 'Sobre', link: '/about'},
    {name: 'Finalizados', link: '/finilized'},
    {name: 'Criar', link: '/about'},
    {name: 'Andamento', link: '/about'},
  ]



  selected: String = ''
  show: Boolean = false
  animationText: Boolean = false
  open: Boolean = false
  showNavigation: Boolean = true
  topStyle : number = 0.7
  showHeader: Boolean = true

  
  restart(route: string){
    if(route === '/'){
      this.selected = ''
      this.show  = false
      this.animationText = false
      this.open = false
      this.showNavigation = true
      this.topStyle = 0.7
      this.showHeader = true

      return
    }
  }

  showOption(router: string) {
   this.selected = router
   this.animationText = true
   this.show = true
  }
  out(){
    if(!this.open){
      this.animationText = false
    }
  }
  close(){
    if(!this.open){
      this.show = false
      this.topStyle = 0.7
      
    }
  }
  async openLink(link: string){
    this.open = true
    this.showNavigation = false
    this.topStyle = 0
    await setTimeout(() => {
      this.routerLink.navigate([link])
      this.open = false
    }, 2000);
    setTimeout(()=> {
      this.showHeader = false
    },2500)
  }
}
