"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiper = new Swiper(".swiper", {
  effect: "cube",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
    hideOnClick: true,
  },
  autoplay: true,
});

const swiperData = [
  {
    image: "https://plus.unsplash.com/premium_vector-1682306851104-12c5cfd3c9b4",
    title: "Slide 1",
    description: "This is the first slide",
  },
  {
    image: "https://plus.unsplash.com/premium_vector-1682270078523-e4e510331133",
    title: "Slide 1",
    description: "This is the first slide",
  },
  {
    image: "https://images.unsplash.com/vector-1741240041552-237362a08363",
    title: "Slide 1",
    description: "This is the first slide",
  },
  {
    image: "https://plus.unsplash.com/premium_vector-1682306851104-12c5cfd3c9b4",
    title: "Slide 1",
    description: "This is the first slide",
  },
  {
    image: "https://plus.unsplash.com/premium_vector-1682306851104-12c5cfd3c9b4",
    title: "Slide 1",
    description: "This is the first slide",
  },
  
]

const HeroSwiper = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>Slide 1</SwiperSlide>

    </Swiper>
  );
};

export default HeroSwiper;
