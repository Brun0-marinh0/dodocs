import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav-router',
  templateUrl: './nav-router.component.html',
  styleUrls: ['./nav-router.component.scss']
})
export class NavRouterComponent {
  @Input() word : string = ''
  @Input() n : number = 0

   getTesteArray(): string[] {
    return this.word.split('');
  }
}
