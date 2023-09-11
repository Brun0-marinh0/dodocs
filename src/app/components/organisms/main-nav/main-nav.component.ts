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

  showOption(router:String) {
   this.selected = router
   this.show = true
  }
  out(){
    this.selected = ''
  }
  close(){
    console.log('oi')
    this.show = false
  }
}
