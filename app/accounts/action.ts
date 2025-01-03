"use server";

export async function getAccounts() {
  const url = new URL(process.env.ACCOUNT_MANAGER_API_URL + "/accounts");
  const response = await fetch(url.toString());
  const accounts = await response.json();
  return accounts;
}
