import React from "react";
import ChildComponent from "./ChildComponent";

const App = () => {
  // const userName = "Gaurav";
  // const email = "gaurav@gmail.com";
  // const section = "CSE19";

  const user = {
    userName: "Gaurav",
    email: "gaurav@gmail.com",
    section: "CSE19",
  };
  return (
    <div>
      <ChildComponent user={user} />
    </div>
  );
};

export default App;
