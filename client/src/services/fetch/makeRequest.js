/**
 * Generic makeRequest method for fetching data.
 * @param requestInfo request information to send with fetch.
 * @returns a Promise containing the response.
 */

export const makeRequest = async (requestInfo) => {
  const jsonResponse = await fetch(requestInfo)
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => {
      return Promise.reject(err);
    });

  return jsonResponse;
};
