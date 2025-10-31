// page.js
import Link from "next/link";

export default function Page() {
  const assignments = [
    { name: "Week 2", href: "/week-2" },
    { name: "Week 3", href: "/week-3" },
    { name: "Week 4", href: "/week-4" },
    { name: "Week 5", href: "/week-5" },
    { name: "Week 6", href: "/week-6" },
    { name: "Week 7", href: "/week-7" },
    { name: "Week 8", href: "/week-8" },
  ];

  return (
    <main className="min-h-screen bg-emerald-200 flex flex-col items-center py-10">
      <div className="mmax-w-md mx-auto mt-6 bg-emerald-500 p-4 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          CPRG 306: Web Development 2 - Assignments
        </h1>

        <ul>
          {assignments.map((assignment, index) => (
            <li
              key={index}
              className="grid grid-cols-3 gap-4 p-3 bg-emerald-300 rounded-lg shadow-sm hover:shadow-lg hover:scale-[1.02] transition transform mb-2"
            >
              <Link
                href={assignment.href}
                className="text-black font-semibold"
              >
                {assignment.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
