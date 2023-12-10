import Swiper from 'swiper';

const initBestSellerSwiper = () => {
  const element = document.getElementById('best-sellers__slider');
  if(!element) return;

  let slider = new Swiper(element, {
    slidesPerView: 3.5,
    spaceBetween: 30
  });
}

export { initBestSellerSwiper };