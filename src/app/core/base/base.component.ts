import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";
import { UserService } from "@services/user.service";
import { AppRoutes } from "@shared/const/app.routes";
@Component({
    template: '',
})
export class BaseComponent {
    //#region DI
    public router = inject(Router);
    public userService = inject(UserService);
    //#endregion DI

    public appRoutes = AppRoutes

}