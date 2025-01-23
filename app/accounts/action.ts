"use server";
import { getManagerPodIP } from "../utils/k8sConfig";

export async function getAccounts() {
  const managerPodIP =
    process.env.ACCOUNT_MANAGER_API_URL ||
    (await getManagerPodIP());

  const url = new URL(managerPodIP + "/accounts");

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Failed to fetch accounts:", error);
    return [];
  }
}
