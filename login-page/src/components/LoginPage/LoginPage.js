import React from "react";
import { Container, Grid } from "@material-ui/core";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { HomePage } from '../HomePage/HomePage';
import FacebookLogin from "../FacebookLogin/FacebookLogin";
import  GoogleLogin  from "../GoogleLogin/GoogleLogin";
import {AppleLogin} from "../AppleLogin/AppleLogin";

const LoginPage = () => {
    
  return (
    <div>
      <Container>
        <Grid>
          <FacebookLogin />
          <GoogleLogin />
        </Grid>
      </Container>
    </div>
  );
};

export default LoginPage;
