import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AppRoutes } from "@shared/const/app.routes";
export class BaseComponent {
    public router = inject(Router);

    public appRoutes = AppRoutes
}