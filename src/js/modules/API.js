import { productStore } from './Store';

const formatQueryString = params => {
  if (Object.keys(params).length === 0) {
    return '';
  }

  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    searchParams.append(key, value);
  });

  return `${searchParams.toString()}`;
};

export const API_URL = 'https://chatter-waiting-path.glitch.me';

export const fetchProducts = async (params = {}) => {
  //   console.log('params: ', params);
  try {
    const response = await fetch(`${API_URL}/api/products?${formatQueryString(params)}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products = await response.json();

    productStore.setProducts(products);
  } catch (error) {
    console.log(`Ошибка при пролучении данных:  ${error}`);
    return [];
  }
};
