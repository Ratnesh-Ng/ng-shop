import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { headerMenu } from '@app/faker/header-menu.faker';
import { BaseComponent } from '@core/base/base.component';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [InputTextModule, FormsModule, RouterModule, CommonModule],
  standalone: true
})

export class HeaderComponent extends BaseComponent {
  public fullText = "";
  public menu = headerMenu;

  constructor() {
    super();
    console.log(this.menu)
  }

  search() {
    const url = this.removeExtraSpaces(this.fullText).split(" ").join('-')
    this.router.navigateByUrl(`/${url}?rawQuery=${this.fullText}`)
  }
  
  private removeExtraSpaces(str: string): string {
    // Replace multiple spaces with a single space
    return str.replace(/\s+/g, ' ').trim();
  }
}
