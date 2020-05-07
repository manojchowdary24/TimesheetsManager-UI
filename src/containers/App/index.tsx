import React from "react";

interface Props {
  signOut: () => void;
}

const App: React.FC<Props> = ({ signOut }) => {
  return (
    <div>
      Timesheets
      <p>Hey! Let's clock in.</p>
      <button onClick={signOut}>Log out</button>
    </div>
  );
};

export default App;
