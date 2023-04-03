import { env } from "../config/env";

export const getTransactions = async () => {
  const result = await fetch(`${env.BACKEND_URL}/transactions`);
  return result.json();
};

export const createTransaction = async (input: any) =>
  fetch(`${env.BACKEND_URL}/transactions`, {
    method: "POST",
    body: JSON.stringify(input),
  });
