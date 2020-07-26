import React from "react";
import { Switch, Route, RouteComponentProps } from "react-router-dom";
import App from "../../containers/App";
import Login from "../../containers/Login";
import { useQuery } from "@apollo/react-hooks";
import IsAuthenticated from "../../constants/graphql/queries/isAuthenticated.graphql";
import ForgotPassword from "../../containers/ForgotPassword";
import RequestAccess from "../../containers/RequestAccess";
import UpdatePassword from "../../containers/UpdatePassword";

const AppRouter: React.FC = () => {
  const { data: { isAuthenicated = false } = {}, client } = useQuery(
    IsAuthenticated
  );
  return isAuthenicated ? (
    <Switch>
      <Route
        exact
        path="/"
        component={() => <App signOut={() => client.resetStore()} />}
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
              history.push({ pathname: "/forgot-password" })
            }
            navigateToRequestAccess={() => {
              history.push({ pathname: "/request-access" });
            }}
            navigateToUpdatePassword={() =>
              history.push({ pathname: "/update-password" })
            }
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
