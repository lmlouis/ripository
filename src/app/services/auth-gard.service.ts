import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";
@Injectable() // l'injection d'un service
export class AuthGard implements  CanActivate{
  constructor(private authService: AuthService, private route: Router) { //appel du service auth
  }
  //mettre en place la garde avec la methode canActivate
  // @ts-ignore
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    //si l'utilisateur est autentifier il peut y acceder
    if (this.authService.isAuth){
      return true;
    }else{
      return this.route.navigate(['/auth']);
    }
  }


}
