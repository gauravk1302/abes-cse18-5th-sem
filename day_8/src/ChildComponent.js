import React from 'react'

const ChildComponent = (props) => {
    console.log(props.user.userName);
    console.log(props.user.email);
    console.log(props.user.section);

  return (
    <div>Hello!!
        <div>UserName: {props.user.userName} </div>
        <div>Email: {props.user.email} </div>
        <div>Section: {props.user.section}</div>
    </div>
    
  )
}

export default ChildComponent