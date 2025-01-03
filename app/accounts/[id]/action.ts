"use server";

export async function getAccountTransaction({
  accountId,
}: {
  accountId: number;
}) {
  console.log("accountId in action:", accountId);
  const url = new URL(
    process.env.ACCOUNT_MANAGER_API_URL + "/transactions" + "/account"+`/${accountId}`
  );
  const response = await fetch(url.toString());
  const accountTransactions = await response.json();
  return accountTransactions;
}
