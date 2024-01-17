// import { Injectable, inject } from '@angular/core';
// import {
//   CanActivateFn,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   UrlTree,
// } from '@angular/router';
// // import { AuthService } from './auth.service'; // Assuming an authentication service
// import { Observable } from 'rxjs';

// // No class declaration, directly define a function
// export const adminAuthGuard: CanActivateFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ): boolean | UrlTree | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> => {
// //   const isLoggedIn = inject(AuthService).isLoggedIn();
// //   const isAdmin = inject(AuthService).isAdmin();

//   if (isLoggedIn && isAdmin) {
//     return true; // Allow access
//   } else {
//     return createUrlTree(['/login']); // Redirect to login page
//   }
// };