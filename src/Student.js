import React, { useState } from "react";

function Student(Props) {
  console.log(Props);
  return (
    <div>
      <h1>Hello</h1>
      <h4>Name : {Props.name}</h4>
      <h4>Email : {Props.email}</h4>
      <h4>City: {Props.other.city}</h4>
      <h4>Mobile: {Props.other.mobile}</h4>
    </div>
  );
}
export default Student;
