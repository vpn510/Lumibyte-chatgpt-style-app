import React from 'react'

export default function TableView({table}){
  if(!table) return null
  const { columns, rows } = table

  return (
    <div className="table-responsive bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
      <table className="min-w-full text-sm">
        <thead>
          <tr>
            {columns.map((c,i) => <th key={i} className="text-left font-semibold p-2">{c}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((r,ri) => (
            <tr key={ri} className="border-t border-gray-100 dark:border-gray-700">
              {r.map((cell,ci) => <td key={ci} className="p-2">{String(cell)}</td>)}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Mobile stacked view */}
      <div className="sm:hidden mt-4 space-y-2">
        {rows.map((r,ri) => (
          <div key={ri} className="p-3 border rounded bg-gray-50 dark:bg-gray-900">
            {r.map((cell,ci) => (
              <div key={ci} className="flex justify-between">
                <div className="text-xs text-gray-500">{columns[ci]}</div>
                <div className="text-sm">{String(cell)}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
