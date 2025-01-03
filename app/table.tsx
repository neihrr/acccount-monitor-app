function Table({ tableData }: { tableData: { columns: string[] } }) {
  return (
    <table className="min-w-full text-black border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-100 text-left">
          {tableData.columns.map((column: string, index: number) => (
            <th className="border border-gray-300 px-4 py-2" key={index}>
              {column}
            </th>
          ))}
        </tr>
      </thead>
    </table>
  );
}

export default Table;
