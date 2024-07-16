import { inject } from "@angular/core";
import { BaseComponent } from "./base.component";
import { ActivatedRoute } from "@angular/router";

export class SearchBaseComponent extends BaseComponent {
  public activatedRoute:ActivatedRoute = inject(ActivatedRoute);
}