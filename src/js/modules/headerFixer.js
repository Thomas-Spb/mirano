import { debounce } from './debounce';

const initHeaderFixer = () => {
  const header = document.querySelector('.header');
  const body = document.body;
  let headerHeigth = header.offsetHeight;

  const updateHeaderHeight = () => {
    headerHeigth = header.offsetHeight;
  };

  const handleScroll = () => {
    const scrollDistance = window.scrollY;

    if (scrollDistance > 200) {
      header.classList.add('header_fixed');
      body.style.paddingTop = `${headerHeigth}px`;
    } else {
      header.classList.remove('header_fixed');
      body.style.paddingTop = '0';
    }
  };

  window.addEventListener('resize', debounce(updateHeaderHeight, 100));

  window.addEventListener('scroll', debounce(handleScroll, 100));
};

export default initHeaderFixer;
