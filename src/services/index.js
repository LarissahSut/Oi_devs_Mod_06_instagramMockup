import { acessKey, BASE_URL } from './config';

export const fetcher = async (endpoint) => {
  const result = await fetch(`${BASE_URL}/${endpoint}/?client_id=${acessKey}`);

  return result.json();
};
