import React, { useEffect, useState } from "react";
import Application from "./Routers/App";
import { ApolloProvider } from "@apollo/react-hooks";
import apolloClient from "./constants/graphql/client";
import { persistCache } from "apollo-cache-persist";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider, Paper } from "@material-ui/core";
import theme from "./theme";

const App: React.FC = () => {
  const [client, setClient] = useState(null);
  const [err, setError] = useState(null);

  useEffect(() => {
    const { cache } = apolloClient;
    const { localStorage } = window;
    persistCache({ cache, storage: localStorage })
      .then(() => {
        setClient(apolloClient);
      })
      .catch(err => setError(err));
  }, []);

  if (err) {
    return <div>An error occurred</div>;
  }

  if (!client) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Paper>
            <Application />
          </Paper>
        </ThemeProvider>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;
