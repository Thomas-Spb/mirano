import { API_URL } from './API';
import { cartStore } from './Store';

export const CartElem = product => {
  return (
    <li class="cart__item">
      <img src={`${API_URL}${product.photoUrl}`} alt={product.name} class="cart__img" />
      <h4 class="cart__item_title">{product.name}</h4>
      <div class="cart__counter">
        <button
          class="cart__counter_btn"
          onClick={() => {
            cartStore.postCart({ id: product.id, quantity: product.quantity - 1 });
          }}
        >
          -
        </button>
        <input type="number" class="cart__counter_input" max="99" min="0" value={product.quantity} />
        <button
          class="cart__counter_btn"
          onClick={() => {
            cartStore.postCart({ id: product.id, quantity: product.quantity + 1 });
          }}
        >
          +
        </button>
      </div>
      <div class="cart__price">{product.price}&nbsp;₽</div>
    </li>
  );
};
