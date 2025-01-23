"use server";

import { getServiceDetails } from "@/app/utils/getServiceDetails";
export async function getAccounts() {
  const serviceDetails = await getServiceDetails();
  if(serviceDetails){
    const { externalIp, port } = serviceDetails;
    const apiUrl = `http://${externalIp}:${port}/accounts`;
    console.log("Making API request to:", apiUrl);
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