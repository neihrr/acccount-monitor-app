"use server";

const ACCOUNT_MANAGER_API_URL = "http://localhost:8080";

export async function getAccounts() {
  const url = new URL(ACCOUNT_MANAGER_API_URL + "/accounts");
  const response = await fetch(url.toString());
  const accounts = await response.json();
  return accounts;
}
