import Link from "next/link";
import { getAccounts } from "./action";

async function Accounts() {
  const accountList = await getAccounts();
  return (
    <div>
      <h1>List of Accounts</h1>
      <table className="min-w-full text-black border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="border border-gray-300 px-4 py-2">Account Name</th>
            <th className="border border-gray-300 px-4 py-2">Account Number</th>
            <th className="border border-gray-300 px-4 py-2">Balance</th>
          </tr>
        </thead>
        <tbody>
          {accountList.map(
            (
              account: {
                id: number;
                name: string;
                accountNumber: string;
                balance: number;
              },
              index: number
            ) => (
              <Link href={`/accounts/${account.id}`} key={index}>
                <tr
                  className={`${
                    index % 2 === 0 ? "bg-white" : "bg-gray-50"
                  } hover:bg-gray-200`}
                >
                  <td className="border border-gray-300 px-4 py-2">
                    {account.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {account.accountNumber}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {account.balance}
                  </td>
                </tr>
              </Link>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Accounts;
