const API_URL = 'https://api.coingecko.com/api/v3';

export const fetchCoins = async () => {
  try {
    const response = await fetch(`${API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=es`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchCoin = async (id) => {
  try {
    const response = await fetch(`${API_URL}/coins/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};