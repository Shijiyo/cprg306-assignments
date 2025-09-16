// student-info.js
import React from "react";

const StudentInfo = () => {
  const student = {
    name: "Charles Joshua L. Tungol",
    gitlink: "https://github.com/Shijiyo/cprg306-assignments"};

  return (
    <div>
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Github Link:</strong> {student.gitlink}</p>
    </div>
  );
};

export default StudentInfo;
