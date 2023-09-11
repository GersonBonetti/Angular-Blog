import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss'],
})
export class BigCardComponent {
  @Input()
  cardTitle: string = '';

  @Input()
  photoCover: string = '';

  @Input()
  cardDescription: string = '';

  @Input()
  id: string = '0';
}
