// middleware/authMiddleware.js
import { isAuthenticated } from '../service/AuthService';

export function requireAuth(to, from, next) {
  if (to.path === '/admin' && !isAuthenticated()) {
    // If the user is trying to access admin section and is not authenticated
    next({ name: 'Login' });
  } else if (to.path === '/login' && isAuthenticated()) {
    // If the user is trying to access the login page but is already authenticated
    next({ name: 'AdminHome' }); // Redirect to admin dashboard
  } else {
    next(); // Allow navigation
  }
}
