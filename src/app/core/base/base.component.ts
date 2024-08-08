import { Component, inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AppRoutes } from "@shared/const/app.routes";
@Component({
    template: '',
})
export class BaseComponent implements OnInit {
    //#region DI
    public router = inject(Router);
    //#endregion DI

    public appRoutes = AppRoutes

    ngOnInit(): void {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

}