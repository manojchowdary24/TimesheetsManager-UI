import React, { useContext } from "react";
import { Switch, Route, RouteComponentProps } from "react-router-dom";
import App from "../../containers/App";
import Login from "../../containers/Login";
import ForgotPassword from "../../containers/ForgotPassword";
import RequestAccess from "../../containers/RequestAccess";
import UpdatePassword from "../../containers/UpdatePassword";
import { IsAuthenticatedContext } from "../../context/Authenication";

const AppRouter: React.FC = () => {
  const { isAuthenticated } = useContext(IsAuthenticatedContext);
  console.log(isAuthenticated, "IN HERE APP ROUTER");
  return isAuthenticated.isAuthenticated ? (
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
