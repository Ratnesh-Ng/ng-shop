import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-card',
  templateUrl: './rating-card.component.html',
  styleUrl: './rating-card.component.scss'
})
export class RatingCardComponent {
  @Input() reviewsCount?: number;
  @Input({ required: true }) rating: number = 0;
  @Input() css: string = 'bg-slate-100 text-[10px]';
  @Input() text?: string;

}
