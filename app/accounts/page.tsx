import Table from "../table";
import { getAccounts } from "./action";

export default async function Accounts() {
  const accountList = await getAccounts();

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6 border-b border-gray-300">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            List of Accounts
          </h1>
        </div>
        <Table
          tableData={{ columns: ["Account Name", "Account Number", "Balance"] }}
          list={accountList}
        />
      </div>
    </div>
  );
}
