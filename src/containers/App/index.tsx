import React, { useState } from "react";
import axios from "axios";
import { API_URI } from "../../constants";

interface Props {
  signOut: () => void;
}

const App: React.FC<Props> = ({ signOut }) => {
  const [user, setUser] = useState(null);
  return (
    <div>
      Timesheets
      <p>Hey! Let's clock in.</p>
      <button onClick={signOut}>Log out</button>
      <button
        onClick={async () => {
          const data = await axios.get(`${API_URI}/auth/me`, {
            withCredentials: true
          });
          console.log(data);
        }}
      >
        Get me
      </button>
      <pre>{user}</pre>
    </div>
  );
};

export default App;
