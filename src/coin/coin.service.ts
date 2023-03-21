import { apiCall } from '@helpers/api';

const BASE_URL = 'https://api.coingecko.com/api/v3';

const searchCoins = async (query: string) => {
  const url = new URL(`${BASE_URL}/search`);
  url.searchParams.append('query', query);
  const result = await apiCall({ url: url.href });
  return {
    success: result.success,
    error: result.error,
    data: result.data?.coins,
  }
};

const listCoins = () => {
  const url = `${BASE_URL}/coins/list`;
  return apiCall({ url });
};

const getCoins = (criteria?: string) => {
  return (!criteria) ? listCoins() : searchCoins(criteria as string) ;
};

const getCoin = async (id: string) => {
  const url = new URL(`${BASE_URL}/coins/${id}`);
  url.searchParams.append('tickers', 'false'); 
  url.searchParams.append('market_data', 'true'); 
  url.searchParams.append('community_data', 'false'); 
  url.searchParams.append('developer_data', 'false'); 
  url.searchParams.append('sparkline', 'false'); 
  const result = await apiCall({ url: url.href });
  return {
    success: result.success,
    error: result.error,
    data: result.data,
  }
}

export { getCoins, getCoin };
