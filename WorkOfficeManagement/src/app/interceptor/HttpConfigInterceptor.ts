import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable()

export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(private jwtHelper :JwtHelperService) { }
      intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
       const token: string = localStorage.getItem('token');
        if (token) {
            request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
        }
    
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
        }
        request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
    
        const apiReq = request.clone({ url: `https://localhost:44384/${request.url}` });

        return next.handle(apiReq).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }
                return event;
            }));
    }
}