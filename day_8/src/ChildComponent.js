import React from "react";

const ChildComponent = (props) => {
  return (
    <div className="card">

      <h2>{props.userName}</h2>

      <p>
        <b>Email:</b> {props.email}
      </p>

      <p>
        <b>Section:</b> {props.section}
      </p>

      <p>
        <b>Age:</b> {props.age}
      </p>

      {props.isStudent ? (
        <p className="student">Student</p>
      ) : (
        <p className="not-student">Not a Student</p>
      )}

      <hr />

      <h3>Skills</h3>

      <ul>
        {props.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Courses</h3>

      <div>
        {props.courses.map((course) => (
          <div className="course" key={course.id}>
            <b>{course.name}</b>
            <p>{course.duration}</p>
          </div>
        ))}
      </div>

      <button onClick={props.onMessage}>
        Click Me
      </button>

    </div>
  );
};

export default ChildComponent;