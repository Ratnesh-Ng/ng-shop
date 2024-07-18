import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { headerMenu } from '@app/faker/header-menu.faker';
import { BaseComponent } from '@core/base/base.component';
import { removeExtraSpaces, removeSpecialCharacter } from '@core/utils/string.util';
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

  public search() {
    const searchedKeyword = removeSpecialCharacter(removeExtraSpaces(this.fullText), "@/#");
    const route = searchedKeyword?.split(" ")?.join('-');
    this.router.navigateByUrl(`/${route}?rawQuery=${searchedKeyword}`)
  }
}
