/**
 * The key used to store the auth-token in local storage.
 */
export const authtokenKey = 'authtoken';
export const refreshtokenKey = 'refreshtoken';

/**
 * Responsible to manage the authentication token.
 * The local storage is used to store the token.
 */
export default (() => (
  {
    storeAuthToken(token) {
      localStorage.setItem(authtokenKey, token);
    },

    storeRefreshToken(token) {
      localStorage.setItem(refreshtokenKey, token);
    },

    storeTokens(authtoken, refreshtoken) {
      localStorage.setItem(authtokenKey, authtoken);
      localStorage.setItem(refreshtokenKey, refreshtoken);
    },

    getAuthToken() {
      return localStorage.getItem(authtokenKey);
    },

    getRefreshToken() {
      return localStorage.getItem(refreshtokenKey);
    },

    clearAuthToken() {
      localStorage.removeItem(authtokenKey);
      localStorage.removeItem(refreshtokenKey);
    }
  }
))();
