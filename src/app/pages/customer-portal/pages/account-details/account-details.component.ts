import { Component } from '@angular/core';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrl: './account-details.component.scss'
})
export class AccountDetailsComponent {
  public editMode = false;

  public editProfile() {
    this.editMode = true;
  }
  
  public save() {
    this.editMode = false;
  }

  public cancel() {
    this.editMode = false;
  }
}
