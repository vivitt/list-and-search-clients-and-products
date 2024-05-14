import { makeRequest } from "../fetch/makeRequest.js";

/**
 * Get all customers
 */
export const getAllCustomers = async () => {
  const jsonResponse = await makeRequest(
    new Request(`http://localhost:3000/customers`, {
      headers: new Headers({ "Content-Type": "application/json" }),
    })
  );
  return jsonResponse;
};
