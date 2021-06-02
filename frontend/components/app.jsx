import React from "react";
import HomePage from './home_page/home_page';
import { Route, Switch } from 'react-router-dom';
import { LogoutAuthRoute, LoginAuthRoute } from '../util/auth_util';
import LoginContainer from './session_form/login_container';
import SignupContainer from './session_form/signup_container';
import FeedContainer from './home_page/feed_container';
import { validateEmail } from "../util/session_util";

const App = () => (
  <div>
    <Switch>
      <LoginAuthRoute path="/feed" component={FeedContainer} />
      <LogoutAuthRoute path="/login" component={LoginContainer} />
      <LogoutAuthRoute path="/signup" component={() => <SignupContainer validateEmail={validateEmail}/>} />
      <LogoutAuthRoute path="/" component={HomePage} />
    </Switch>
  </div>
);

export default App;