const BASE_URL = 'https://api.exchangerate.host/latest';

export const getCurrencyFromServer = async () => {
  const response = await fetch(`${BASE_URL}`);

  return response.json();
};