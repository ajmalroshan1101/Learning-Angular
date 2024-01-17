// import { Injectable, inject } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree ,createUrlTreeFromSnapshot} from '@angular/router';
// import { CustomServive } from '../service/custom.service';
// import { Observable } from 'rxjs';

import { inject } from "@angular/core"
import { Router } from "@angular/router"

// export const CustomGuard: CanActivateFn = (
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> => {
//     // Implement your access control logic here
//     const allowAccess = true; // Replace with your actual condition
  
//     if (allowAccess) {
//       return true; // Allow navigation
//     } else {
//         return createUrlTreeFromSnapshot(route, ['/headcompo']);// Redirect if condition not met
//     }
//   };

//Another method for the same function

export const CustomGuard = ()=>{
    const router = inject(Router) 

    const allowAccess = true; // Replace with your actual condition

        if (allowAccess) {
      return true; // Allow navigation
    } else {
         router.navigate(['/headcompo']);// Redirect if condition not met
         return false
    }
}