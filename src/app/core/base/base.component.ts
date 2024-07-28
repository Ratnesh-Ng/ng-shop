import { inject } from "@angular/core";
import { Router } from "@angular/router";
import { AppRoutes } from "@shared/const/app.routes";
import { Observable } from 'rxjs';
export class BaseComponent {
    //#region DI
    public router = inject(Router);
    //#endregion DI

    public appRoutes = AppRoutes

    protected postData<T>(observable: Observable<T>) {
        const promise = new Promise<T>((resolve, reject) => {
            observable.subscribe({
                next: (value) => {
                    resolve(value);
                },
                error: (err) => {
                    reject(err);
                },
            })
        })
        return promise;
    }
}