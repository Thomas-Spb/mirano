import { ListType } from './ListType';
import { productStore } from './Store';

export const initChoicesType = () => {
  const typeChoices = document.querySelector('.filter__choices_type');
  const choicesBox = document.querySelector('.filter__choices_box_type');

  const updateTypeChoicesVisibility = () => {
    const categories = productStore.getCategories();

    if (categories.size) {
      typeChoices.classList.display = '';
      choicesBox.textContent = '';
      const listType = ListType([...categories]);
      //   console.log('listType: ', listType);
      choicesBox.append(listType);
    } else {
      typeChoices.classList.display = 'none';
    }
  };

  productStore.subscribe(updateTypeChoicesVisibility);

  updateTypeChoicesVisibility();
};
