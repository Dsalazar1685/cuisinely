import Auth0Lock from 'auth0-lock';
import keys from './Auth_keys';
export default class Auth {  
  constructor (callback) {    
    // Configure Auth0    
    let options = {
      redirect: false, 
      autoclose: true,
      allowSignUp: true,
      auth: {
        params: {param1: 'value1'},
        responseType: 'token',
        redirect: true,
        sso: true
      }
    };
    this.lock = new Auth0Lock(keys.clientId, keys.domain, options);   
    // Add callback for lock `authenticated` event  

    this.lock.on('authenticated', this._doAuthentication.bind(this, callback));    
    // binds login functions to keep this context    
    this.login = this.login.bind(this);  
  }  
  _doAuthentication (callback, authResult) {    
    this.setToken(authResult.idToken);  
    this.lock.hide();  
    callback();  
  }  
  login () {    
    this.lock.show();  
  } 

  loggedIn () {    
    // Checks if there is a saved token and it’s still valid   
    return !!this.getToken();  
  }  
  setToken (idToken) {    
    // Saves user token to localStorage    
    localStorage.setItem('id_token', idToken);  
  }
  getToken () {    
    // Retrieves the user token from localStorage    
    return localStorage.getItem('id_token');  
  }  
  logout () {    
    // Clear user token and profile data from localStorage    
    localStorage.removeItem('id_token');  
  }
}