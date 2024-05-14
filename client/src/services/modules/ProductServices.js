import { makeRequest } from "../fetch/makeRequest.js";

/**
 * Get all products contracted by a customer
 * @param {String} clientId
 */
export const getClientProducts = async (clientId) => {
  const jsonResponse = await makeRequest(
    new Request(`http://localhost:3000/products/?customerId=${clientId}`, {
      headers: new Headers({ "Content-Type": "application/json" }),
    })
  );
  return jsonResponse;
};
