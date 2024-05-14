import { fetchProducts } from './modules/API';
import { initCart } from './modules/cart';
import { initChoices } from './modules/choices';
import { initChoicesType } from './modules/choicesType';
import { filterProducts } from './modules/filterProducts';
import initHeaderFixer from './modules/headerFixer';
import { renderProducts } from './modules/renderProducts';
import { initSearchProducts } from './modules/searchProducts';

const init = () => {
  initHeaderFixer();
  initChoices();
  initChoicesType();
  initCart();
  initSearchProducts();
  //   fetchProducts({ type: 'bouquets' });
  renderProducts();
  filterProducts();
};
init();
