import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { headerMenu } from '@app/faker/header-menu.faker';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [InputTextModule, FormsModule, RouterModule, CommonModule],
  standalone: true
})

export class HeaderComponent {
  public fullText = "";
  public menu = headerMenu;

  constructor() {
    console.log(this.menu)
  }
}
