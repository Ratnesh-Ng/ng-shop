import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService} from '@services/user.service';
import { AppRoutes } from '@shared/const/app.routes';

export const authGuard: CanActivateFn = () => {
  const userService = inject(UserService); // Inject the UserService
  const router = inject(Router); // Inject the Router

  // Check if the user is logged in
  if (userService.loggedInUser) {
    return true;  // Allow route activation
  } else {
    router.navigateByUrl(AppRoutes.login) // Navigate to login page
    return false;  // Deny route activation
  }
};
