import { getAccountById, getAccountTransaction } from "./action";

interface Transaction {
  transactionId: number;
  accountId: string;
  type: string;
  amount: number;
  timestamp: string;
  status: boolean;
}

export async function getServerSideProps(context: { params: { id: string } }) {
  const accountId = parseInt(context.params.id);
  const accountTransactions = await getAccountTransaction({ accountId });
  const account = await getAccountById({ accountId });

  return {
    props: {
      account,
      accountTransactions,
    },
  };
}

export default function AccountDetails({
  account,
  accountTransactions,
}: {
  account: { name: string };
  accountTransactions: Transaction[];
}) {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6 border-b border-gray-300">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {account.name}
          </h1>
        </div>
        <div className="p-6">
          {accountTransactions.map((transaction, index) => (
            <div
              key={index}
              className={`p-4 mb-4 rounded-lg shadow-md ${
                index % 2 === 0 ? "bg-gray-50" : "bg-white"
              } hover:bg-gray-100 transition duration-200`}
            >
              <div className="text-lg font-medium text-gray-700 capitalize mb-2">
                {transaction.type}
              </div>
              <div className="text-sm text-gray-500 mb-1">
                {new Date(transaction.timestamp).toLocaleString()}
              </div>
              <div className="text-sm text-gray-500 mb-1">
                Amount: {transaction.amount.toFixed(2)}$
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
