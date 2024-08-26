import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]'
})
export class InfiniteScrollDirective {

  @Output() scrolled = new EventEmitter<void>();
  @Input() threshold: number = 100;
  @Input() isLoading: boolean = false;

  constructor() {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.isLoading) return;

    const scrollPosition = window.innerHeight + window.scrollY;
    const threshold = document.body.offsetHeight - this.threshold;

    if (scrollPosition >= threshold) {
      this.scrolled.emit();
    }
  }

}
