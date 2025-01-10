"use client";

import { useRouter } from "next/navigation";
interface Account {
  id: number;
  name: string;
  accountNumber: string;
  balance: number;
}

function Table({
  tableData,
  list
}: {
  tableData: { columns: string[] };
  list:Account[];
}) {
  const router = useRouter();
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
      <tbody>
        {list.map((account: Account, index: number) => (
          <tr
            key={index}
            onClick={() => router.push(`/accounts/${account.id}`)}
            className={`${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            } hover:bg-gray-200`}
          >
            <td className="border border-gray-300 px-4 py-2">{account.name}</td>
            <td className="border border-gray-300 px-4 py-2">
              {account.accountNumber}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {account.balance}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
