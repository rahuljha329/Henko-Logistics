import React, { useState } from "react";

const data = [
  { term: "EXW", values: ["Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer"] },
  { term: "FCA", values: ["Seller","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer"] },
  { term: "FAS", values: ["Seller","Seller","Seller","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer"] },
  { term: "FOB", values: ["Seller","Seller","Seller","Seller","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer","Buyer"] },
  { term: "CFR", values: ["Seller","Seller","Seller","Seller","Seller","Seller","Buyer","Buyer","Buyer","Buyer","Buyer"] },
  { term: "CIF", values: ["Seller","Seller","Seller","Seller","Seller","Seller","Seller","Buyer","Seller","Buyer","Buyer"] },
  { term: "CPT", values: ["Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Buyer","Buyer","Buyer"] },
  { term: "CIP", values: ["Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Buyer","Buyer"] },
  { term: "DAT", values: ["Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Buyer","Buyer"] },
  { term: "DAP", values: ["Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Buyer","Buyer"] },
  { term: "DDP", values: ["Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller"] },
  { term: "DDU", values: ["Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Seller","Buyer"] },
];

const headers = [
  "Export Customs",
  "Carriage Export",
  "Unload Export",
  "Loading Export",
  "Main Carriage",
  "Unload Import",
  "Loading Import",
  "Carriage Destination",
  "Insurance",
  "Import Customs",
  "Import Taxes",
];

export default function Incoterms() {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentRows = data.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Incoterms 2010</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded-xl overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left font-semibold">INCOTERM</th>
              {headers.map((header, index) => (
                <th key={index} className="p-3 text-left text-sm font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {currentRows.map((row, i) => (
              <tr key={i} className="border-t hover:bg-gray-50">
                <td className="p-3 font-semibold">{row.term}</td>
                {row.values.map((val, j) => (
                  <td
                    key={j}
                    className={`p-3 text-sm ${
                      val === "Seller"
                        ? "text-green-600 font-medium"
                        : "text-blue-600"
                    }`}
                  >
                    {val}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
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
