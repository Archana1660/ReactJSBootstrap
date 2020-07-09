import React, { useEffect, useState } from "react";
import { Route, Redirect} from 'react-router-dom';
import LoginPage from "../LoginPage/LoginPage";

//facebook logout
// const faceBookLogout = (history)=> () => {
//   window.FB.logout( (response) => {
//     console.log('u are out of the page');
//   });
//   history.push('/login');
// };

export const HomePage = ({history}) => {

  //fetch user country
  useEffect(() => {
      fetchCountry();
    })

    const fetchCountry = async () => {
      const data = await fetch('//freegeoip.app/json/');
      console.log(data);

      const response = await data.json();
      console.log(response);
    }

  //FACEBOOK SDK
  // const loadFbLoginApi = () => {
  //   window.fbAsyncInit = function () {
  //     window.FB.init({
  //       appId: 323972495296732,
  //       cookie: true, // enable cookies to allow the server to access
  //       // the session
  //       xfbml: true, // parse social plugins on this page
  //       version: "v2.5", // use version 2.1
  //     });
  //   };

  //   console.log("Loading fb api");
  //   // Load the SDK asynchronously
  //   (function (d, s, id) {
  //     var js, fjs = d.getElementsByTagName(s)[0];
  //     console.log(fjs);
  //     if (d.getElementById(id)) return;
  //     js = d.createElement(s);
  //     js.id = id;
  //     js.src = "//connect.facebook.net/en_US/sdk.js";
  //     fjs.parentNode.insertBefore(js, fjs);
  //   })(document, "script", "facebook-jssdk");
  // };

  // const getEmail = async () => {
  //   const response = await fetch(
  //     `https://graph.facebook.com/me?fields=id,name,email,birthday&access_token=${token}`);

  //     const data = await response.json();
  //     console.log(response)
  // }
  

  
 //GOOGLE SDK

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
    console.log('Api inited');
  })
}

  const signOut = () => {
    var auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      history.push('/');
    });
  }

 

  useEffect(() => {
    // loadFbLoginApi();
    insertGapiScript();
    
  }, []);


  return (
      <>
        <h1>Welcome Home</h1>
        <button onClick={signOut}>Logout</button>
        <Route path='/' component={LoginPage}></Route> 
      </>
  )
};
