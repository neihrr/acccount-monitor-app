"use server";

export async function getAccounts() {
  const url = new URL(process.env.ACCOUNT_MANAGER_API_URL + "/accounts");
  try {
    const response = await fetch(url.toString());
    console.log("accoouuuunts",response);
    if(!response.ok){
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch accounts:", error);
    return [];
  }
}
