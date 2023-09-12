import { Component } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent {
  routers: Array<String> = [
    'Sobre',
    'Finalizados',
    'Criar',
    'Andamento'
  ]
  selected: String = ''
  show: Boolean = false
  animationText: Boolean = false

  showOption(router:String) {
   this.selected = router
   this.animationText = true
   this.show = true
  }
  out(){
    this.animationText = false
  }
  close(){
    
    this.show = false
  }
}
