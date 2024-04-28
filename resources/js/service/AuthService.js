// AuthService.js
const TOKEN_KEY = 'authToken';

export function login(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
}

export function isAuthenticated() {
  return localStorage.getItem(TOKEN_KEY) !== null;
}

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}
