import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { DbService } from "@core/service/db.service";
import { ApiRoutes } from "@shared/const/api.routes";

@Injectable({
    providedIn: 'root'
})
export class BaseService {
    //#region DI
    protected db: DbService = inject(DbService);
    protected http: HttpClient = inject(HttpClient);
    ////#endregion DI

    protected apiRoutes = ApiRoutes;
}