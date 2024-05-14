import { ListType } from './ListType';
import { store } from './Store';

export const initChoicesType = () => {
  const typeChoices = document.querySelector('.filter__choices_type');
  const choicesBox = document.querySelector('.filter__choices_box_type');

  const updateTypeChoicesVisibility = () => {
    const categories = store.getCategories();

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

  store.subscribe(updateTypeChoicesVisibility);

  updateTypeChoicesVisibility();
};
