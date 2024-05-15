import { makeRequest } from "../fetch/makeRequest.js";

const requestOptions = {
  mode: "cors",
  headers: new Headers({ "Content-Type": "application/json" }),
};

/**
 * Get all customers
 */
export const getAllCustomers = async () => {
  const jsonResponse = await makeRequest(
    new Request(
      `https://prova-tecnica-parlem.vercel.app/customers/`,
      requestOptions
    )
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
      `https://prova-tecnica-parlem.vercel.app/customers/?customerId=${clientId}`,
      requestOptions
    )
  );
  return jsonResponse[0];
};
