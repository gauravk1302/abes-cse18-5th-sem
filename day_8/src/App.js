import React from "react";
import ChildComponent from "./ChildComponent";
import "./App.css";

const App = () => {
  const user = {
    userName: "Gaurav",
    email: "gaurav@gmail.com",
    section: "CSE19",
    age: 21,
    isStudent: true,
  };

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
  ];

  const courses = [
    {
      id: 1,
      name: "React",
      duration: "2 Months",
    },
    {
      id: 2,
      name: "JavaScript",
      duration: "3 Months",
    },
    {
      id: 3,
      name: "Node.js",
      duration: "2 Months",
    },
  ];

  const handleMessage = () => {
    alert("Hello from Parent Component!");
  };

  return (
    <div className="app">
      <h1>Student Profile</h1>

      <ChildComponent
        {...user}
        skills={skills}
        courses={courses}
        onMessage={handleMessage}
      />
    </div>
  );
};

export default App;