import React from "react";
import { Switch, Route, RouteComponentProps } from "react-router-dom";
import App from "../../containers/App";
import Login from "../../containers/Login";
import ForgotPassword from "../../containers/ForgotPassword";
import RequestAccess from "../../containers/RequestAccess";
import UpdatePassword from "../../containers/UpdatePassword";

const AppRouter: React.FC = () => {
  const isAuthenicated = false;
  return isAuthenicated ? (
    <Switch>
      <Route
        exact
        path="/"
        component={() => <App signOut={() => console.log("signout")} />}
      />
    </Switch>
  ) : (
    <Switch>
      <Route
        exact
        path="/"
        component={({ history }: RouteComponentProps) => (
          <Login
            navigateToForgotPassword={() =>
              history.push({
                pathname: "/forgot-password"
              })
            }
            navigateToRequestAccess={() => {
              history.push({
                pathname: "/request-access"
              });
            }}
          />
        )}
      />
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path="/request-access" component={RequestAccess} />
      <Route
        exact
        path="/update-password"
        component={({ history }: RouteComponentProps) => (
          <UpdatePassword navigateToLogin={() => history.push("/")} />
        )}
      />
    </Switch>
  );
};

export default AppRouter;
