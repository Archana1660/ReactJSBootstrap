import React, { useEffect } from  'react';
import { Button } from '@material-ui/core';
import { withRouter } from "react-router-dom";

 const GoogleLogin = (props) => {

  const { history } = props;

    useEffect( () => {
        insertGapiScript();
    },[]);
  
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
            client_id: '324133888500-4nka470k9oki5ne49t9b66l63qomrgvu.apps.googleusercontent.com',
            scope: 'email'
          })
          console.log('Api inited')
    
          window.gapi.load('signin2', () => {
            const params = {
              onsuccess: (googleUser) => {
                console.log('User has finished signing in!');

                  var profile = googleUser.getBasicProfile();
                  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

                  var id_token = googleUser.getAuthResponse().id_token;
                
                history.push('/home')
              }
            }
            window.gapi.signin2.render('loginButton', params)
          })
        })
      }
/*
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: JSON.stringify({ title: 'React Hooks POST Request Example' })
    };
    fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
        .then(response => response.json())
        .then(data => setPostId(data.id));

    */
        return (
          <div className="App">
            <Button id="loginButton" variant="contained">
                Sign in with Google
            </Button>
          </div>
        );
    }

    export default withRouter(GoogleLogin);