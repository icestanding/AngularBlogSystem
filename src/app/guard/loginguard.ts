import { CanActivate,Router } from '@angular/router'
import { Injectable } from '@angular/core'
import { LoginServiceService } from '../service/login/login-service.service'

@Injectable()
export class LoginRouterGuard implements CanActivate {

    constructor(private login: LoginServiceService, private router:Router) {}
    canActivate () {
        if( this.login.islogin()) {
            return true;
        }   else {
            this.router.navigateByUrl('/login');
            return false;
        }
    }
}