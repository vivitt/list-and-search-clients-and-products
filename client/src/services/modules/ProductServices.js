import { makeRequest } from "../fetch/makeRequest.js";

/**
 * Get all products contracted by a customer
 * @param {String} clientId
 */
export const getClientProducts = async (clientId) => {
  const jsonResponse = await makeRequest(
    new Request(
      `https://prova-tecnica-parlem.vercel.app/products/?customerId=${clientId}`,
      {
        headers: new Headers({ "Content-Type": "application/json" }),
      }
    )
  );
  return jsonResponse;
};
