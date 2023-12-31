import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss'],
})
export class SmallCardComponent {
  @Input()
  cardTitle: string = '';

  @Input()
  id: number = 0;

  @Input()
  photoCover: string = "";
}
