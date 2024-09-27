import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '@services/user.service';
import { AppRoutes } from '@shared/const/app.routes';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router, private userService: UserService) { }

    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        // Skip token check if 'Skip-Auth' header is present
        if (req.headers.has('Skip-Auth')) {
            const modifiedReq = req.clone({
                headers: req.headers.delete('Skip-Auth')
            });
            return next.handle(modifiedReq);  // Allow the request to pass through without token check
        }

        const token = this.getToken();  // Replace with actual logic to retrieve the token

        // If token is not present, redirect to login page and drop the request
        if (!token) {
            this.router.navigateByUrl(AppRoutes.login);
            return of();  // Drop the request
        }

        // If token is present, clone the request and add the Authorization header
        // TODO: uncomment code when you actually need to add token
        // const authReq = req.clone({
        //     setHeaders: {
        //         Authorization: `Bearer ${token}`
        //     }
        // });
        // return next.handle(authReq);
        return next.handle(req);
    }

    // function to get the token
    private getToken(): string | null {
        const user = this.userService.loggedInUser
        if (user) {
            return btoa(JSON.stringify(user));
        }
        return null;
    }
}
