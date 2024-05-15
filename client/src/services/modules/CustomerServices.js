import { makeRequest } from "../fetch/makeRequest.js";

/**
 * Get all customers
 */
export const getAllCustomers = async () => {
  const jsonResponse = await makeRequest(
    new Request(`https://prova-tecnica-parlem.vercel.app/customers/`, {
      mode: "cors",
      headers: new Headers({ "Content-Type": "application/json" }),
    })
  );
  return jsonResponse;
};

/**
 * Get one customer info
 * @param {String} clientId
 */
export const getSingleCustomer = async (clientId) => {
  const jsonResponse = await makeRequest(
    new Request(
      `https://prova-tecnica-parlem.vercel.app/customers/${clientId}/`,
      {
        headers: new Headers({ "Content-Type": "application/json" }),
      }
    )
  );
  return jsonResponse;
};
