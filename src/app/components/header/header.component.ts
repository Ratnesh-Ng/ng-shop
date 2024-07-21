import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { headerMenu } from '@app/faker/header-menu.faker';
import { HeaderCategory, HeaderMenu } from '@app/modals/header-menu';
import { BaseComponent } from '@core/base/base.component';
import { generateRoute, removeExtraSpaces, removeSpecialCharacter, specialCharacters } from '@core/utils/string.util';
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
  public menu: HeaderMenu = headerMenu;
  public currentSubItems: HeaderCategory[] = [];
  public dropdownVisible = false;

  public search() {
    const searchedKeyword = removeSpecialCharacter(removeExtraSpaces(this.fullText), specialCharacters);
    const route = generateRoute(this.fullText);
    this.router.navigateByUrl(`/${route}?rawQuery=${searchedKeyword}`)
  }
  
  public showDropdown(subItems: HeaderCategory[]) {
    this.currentSubItems = subItems;
    this.dropdownVisible = true;
  }

  public hideDropdown() {
    this.dropdownVisible = false;
  }

  public keepDropdownVisible() {
    this.dropdownVisible = true;
  }

}
