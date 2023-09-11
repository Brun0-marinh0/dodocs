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

  showOption(router:String) {
   this.selected = router
  }
  out(){
    this.selected = ''
  }
}
