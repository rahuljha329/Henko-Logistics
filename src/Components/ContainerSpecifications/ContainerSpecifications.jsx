import React, { useState } from "react";

const containerData = [
  {
    type: "Standard 20'",
    rows: [
      ["19'4\"", "7'8\"", "7'10\"", "7'8\"", "7'6\"", "1,172 Cft", "4,916 Lbs", "47,900 Lbs"],
      ["5.900 m", "2.350 m", "2.393 m", "2.342 m", "2.280 m", "33.2 Cu.m", "2,230 Kgs", "21,770 Kgs"],
    ],
  },
  {
    type: "Standard 40'",
    rows: [
      ["39'5\"", "7'8\"", "7'10\"", "7'8\"", "7'6\"", "2,390 Cft", "8,160 Lbs", "59,040 Lbs"],
      ["12.036 m", "2.350 m", "2.392 m", "2.340 m", "2.280 m", "67.7 Cu.m", "3,700 Kgs", "26,780 Kgs"],
    ],
  },
  {
    type: "High Cube 20'",
    rows: [
      ["19'4\"", "7'7\"", "7'10\"", "7'6\"", "7'6\"", "1,150 Cft", "5,060 Lbs", "61,996 Lbs"],
      ["5.892 m", "2.311 m", "2.390 m", "2.286 m", "2.280 m", "32.63 Cu.m", "2,300 Kgs", "28,180 Kgs"],
    ],
  },
  {
    type: "High Cube 40'",
    rows: [
      ["39'5\"", "7'8\"", "8'10\"", "7'8\"", "8'5\"", "2,694 Cft", "8,750 Lbs", "58,450 Lbs"],
      ["12.036 m", "2.350 m", "2.697 m", "2.338 m", "2.258 m", "76.3 Cu.m", "3,970 Kgs", "26,510 Kgs"],
    ],
  },
];

const headers = [
  "Inside Length",
  "Inside Width",
  "Inside Height",
  "Door Width",
  "Door Height",
  "Capacity",
  "Tare Weight",
  "Max Cargo",
];

export default function ContainerSpecifications() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2; // per page 2 container types

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = containerData.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(containerData.length / itemsPerPage);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Container Specifications</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left font-semibold">Container Type</th>
              {headers.map((h, i) => (
                <th key={i} className="p-3 text-left text-sm font-semibold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {currentItems.map((container, i) => (
              <React.Fragment key={i}>
                {container.rows.map((row, j) => (
                  <tr key={j} className="border-t hover:bg-gray-50">
                    {j === 0 && (
                      <td
                        rowSpan={container.rows.length}
                        className="p-3 font-semibold align-middle"
                      >
                        {container.type}
                      </td>
                    )}
                    {row.map((cell, k) => (
                      <td key={k} className="p-3 text-sm">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination (same as previous table) */}
      <div className="flex justify-center mt-6 gap-2">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-200"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded border ${
              currentPage === i + 1
                ? "bg-gray-800 text-white"
                : "border-gray-300 hover:bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-200"
        >
          Next
        </button>
      </div>
    </div>
  );
}
