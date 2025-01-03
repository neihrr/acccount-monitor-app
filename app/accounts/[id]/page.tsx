import { getAccountTransaction } from "./action";

interface AccountDetailsProps {
  params: Promise<{
    id: string;
  }>;
}
async function AccountDetails({params}: AccountDetailsProps) {
    const data = await params;
    const accountTransactions = await getAccountTransaction({
      accountId: parseInt(data.id),
    });
    console.log(accountTransactions);
    return (<div>Account TRansaction History</div>);
}

export default AccountDetails;