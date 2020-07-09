import React, { useEffect } from  'react';

export const GoogleLogin = () => {

    useEffect( () => {
        insertGapiScript();
    });
  
    const insertGapiScript = () =>  {
        const script = document.createElement('script')
        script.src = 'https://apis.google.com/js/api.js'
        script.onload = () => {
          initializeGoogleSignIn()
        }
        document.body.appendChild(script)
      }
    
      const initializeGoogleSignIn = () => {
        window.gapi.load('auth2', () => {
          window.gapi.auth2.init({
            client_id: '324133888500-4nka470k9oki5ne49t9b66l63qomrgvu.apps.googleusercontent.com'
          })
          console.log('Api inited')
    
          window.gapi.load('signin2', () => {
            const params = {
              onsuccess: () => {
                console.log('User has finished signing in!')
              }
            }
            window.gapi.signin2.render('loginButton', params)
          })
        })
      }
    
        return (
          <div className="App">
            <h1>Google Login Demo</h1>
            <a id="loginButton">Sign in with Google</a>
          </div>
        );
    }

