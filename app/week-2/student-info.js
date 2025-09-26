// student-info.js
import React from "react";

export default function StudentInfo() {
  const student = {
    name: "Charles Joshua L. Tungol",
    gitlink: "https://github.com/Shijiyo/cprg306-assignments",
  };

  return (
    <div className="max-w-md mx-auto bg-emerald-300 p-4 rounded-lg shadow-sm">
      <p className="text-gray-800 mb-2">
        <strong className="text-black">Name:</strong> {student.name}
      </p>
      <p className="text-gray-800">
        <strong className="text-black">GitHub Link:</strong>{" "}
        <a
          href={student.gitlink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 hover:underline"
        >
          Shijiyo/cprg306-assignments
        </a>
      </p>
    </div>
  );
}
