import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-router-selected',
  templateUrl: './show-router-selected.component.html',
  styleUrls: ['./show-router-selected.component.scss']
})
export class ShowRouterSelectedComponent {
  @Input() selected : string = ''
}
