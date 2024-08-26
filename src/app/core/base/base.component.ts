import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { AppRoutes } from "@shared/const/app.routes";
@Component({
    template: '',
})
export class BaseComponent {
    //#region DI
    public router = inject(Router);
    //#endregion DI

    public appRoutes = AppRoutes

}