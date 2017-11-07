/**
 * The key used to store the auth-token in local storage.
 */
export const tokenStorageKey = 'token';

/**
 * Responsible to manage the authentication token.
 * The local storage is used to store the token.
 */
export default (() => (
  {
    storeAuthToken(token) {
      localStorage.setItem(tokenStorageKey, token);
    },

    getAuthToken() {
      return localStorage.getItem(tokenStorageKey);
    },

    clearAuthToken() {
      localStorage.removeItem(tokenStorageKey);
    }
  }
))();
