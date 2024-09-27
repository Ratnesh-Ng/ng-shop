import { HttpClient, HttpHeaders } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { DbService } from "@core/service/db.service";
import { ApiRoutes } from "@shared/const/api.routes";
import { MessageService } from "primeng/api";

@Injectable({
    providedIn: 'root'
})
export class BaseService {
    //#region DI
    protected db: DbService = inject(DbService);
    protected http: HttpClient = inject(HttpClient);
    public messageService: MessageService = inject(MessageService);
    ////#endregion DI

    protected apiRoutes = ApiRoutes;
    public skipAuthHeader = new HttpHeaders({
        'Skip-Auth': 'true'
    })
}