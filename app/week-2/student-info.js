export default function StudentInfo() {
  const student = {
    name: "Charles Joshua L. Tungol",
    gitlink: "https://github.com/Shijiyo/cprg306-assignments",
  };

  return (
    <div>
      <p><strong>Name:</strong> {student.name}</p>
      <p>
        <strong>Github Link:</strong>{" "}
        <a href={student.gitlink} target="_blank" rel="noopener noreferrer">
        <u>Shijiyo/cprg306-assignments</u>
        </a>
      </p>
    </div>
  );
}
