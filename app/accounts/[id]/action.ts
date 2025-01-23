"use server";

import { getServiceDetails } from "@/app/utils/getServiceDetails";

export async function getAccountTransaction({
  accountId,
}: {
  accountId: number;
}) {
  const serviceDetails = await getServiceDetails();
  if (serviceDetails) {
    const { externalIp, port } = serviceDetails;
    const apiUrl = `http://${externalIp}:${port}/transactions/accounts/${accountId}`;
    const url = new URL(apiUrl);
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
}

export async function getAccountById({ accountId }: { accountId: number }) {
  const serviceDetails = await getServiceDetails();
  if (serviceDetails) {
    const { externalIp, port } = serviceDetails;
    const apiUrl = `http://${externalIp}:${port}/accounts${accountId}`;
    console.log("Making API request to:", apiUrl);
    const url = new URL(apiUrl);
    try {
      const response = await fetch(url.toString(), {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Failed to fetch accounts:", error);
      return [];
    }
  }
}
