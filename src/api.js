const BASE_URL = 'https://api.exchangerate.host/latest?base=UAH&symbols=USD,EUR,PLN';

export const getCurrencyFromServer = async () => {
  try {
    const response = await fetch(`${BASE_URL}`);
    return response.json();
  } catch (error) {
    if ( error && typeof error === 'object') {
      throw new Error('Now you cannot connect the server and get currency');
    } else {
      throw error;
    }
  }
};
  // const response = await fetch(`${BASE_URL}`);

  // return response.json();
