"use client";

import Image from "next/image";
import styled from "styled-components";
import { Autoplay, EffectCube, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";

const swiperData = [
  {
    badge: "💡 Idea Sharing",
    tag: "Innovation",
    title: "Turn Your Ideas Into Reality",
    description:
      "Share breakthrough startup concepts with a global community of innovators ready to collaborate.",
    image:
      "https://plus.unsplash.com/premium_vector-1682306851104-12c5cfd3c9b4?w=600&auto=format&fit=crop",
    accent: "#5e41de",
  },
  {
    badge: "🚀 Launch",
    tag: "Startups",
    title: "From Concept to Company",
    description:
      "Validate your startup idea, get real feedback, and connect with co-founders who share your vision.",
    image:
      "https://plus.unsplash.com/premium_vector-1682270078523-e4e510331133?w=600&auto=format&fit=crop",
    accent: "#7c3aed",
  },
  {
    badge: "🌍 Community",
    tag: "Networking",
    title: "Connect With Innovators",
    description:
      "Join thousands of entrepreneurs, investors, and builders shaping the future of technology.",
    image:
      "https://images.unsplash.com/vector-1741240041552-237362a08363?w=600&auto=format&fit=crop",
    accent: "#6d28d9",
  },
  {
    badge: "⚡ Trending",
    tag: "Tech & AI",
    title: "Discover What's Next",
    description:
      "Explore the hottest startup concepts across AI, SaaS, FinTech, HealthTech, and more.",
    image:
      "https://plus.unsplash.com/premium_vector-1682306851104-12c5cfd3c9b4?w=600&auto=format&fit=crop",
    accent: "#8b5cf6",
  },
  {
    badge: "🏆 Validate",
    tag: "Validation",
    title: "Validate Before You Build",
    description:
      "Get community votes, expert feedback, and real-world insights before writing a single line of code.",
    image:
      "https://plus.unsplash.com/premium_vector-1682270078523-e4e510331133?w=600&auto=format&fit=crop",
    accent: "#5e41de",
  },
];

const HeroSwiper = () => {
  return (
    <StyledWrapper>
      <Swiper
        effect="cube"
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 24,
          shadowScale: 0.92,
        }}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true, hideOnClick: true }}
        navigation={false}
        modules={[EffectCube, Autoplay, Navigation, Pagination]}
        className="w-full rounded-2xl"
      >
        {swiperData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="overflow-hidden rounded-2xl border border-[#5e41de]/20 bg-white shadow-2xl shadow-[#5e41de]/20 dark:border-[#5e41de]/25 dark:bg-zinc-900 dark:shadow-[#5e41de]/30">
              {/* Image */}
              <div className="relative h-52 w-full overflow-hidden sm:h-64">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Bottom gradient fade */}
                <div className="absolute inset-x-0 bottom-0 h-12 bg-linear-to-t from-white/60 to-transparent dark:from-zinc-900/60" />
                {/* Tag pill */}
                <span className="absolute right-3 top-3 rounded-full bg-[#5e41de] px-3 py-1 text-xs font-semibold text-white shadow-md shadow-[#5e41de]/40">
                  {slide.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="mb-1.5 text-sm font-semibold text-[#5e41de] dark:text-[#a78bfa]">
                  {slide.badge}
                </p>
                <h3 className="mb-2.5 text-xl font-bold leading-snug text-zinc-900 dark:text-zinc-50">
                  {slide.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  width: 100%;

  .swiper {
    padding-bottom: 44px !important;
  }

  /* Cube bottom shadow → purple tint */
  .swiper-cube-shadow {
    background: rgba(94, 65, 222, 0.18) !important;
    filter: blur(16px) !important;
  }

  /* Slide face shadows → purple tint */
  .swiper-slide-shadow-left,
  .swiper-slide-shadow-right,
  .swiper-slide-shadow-top,
  .swiper-slide-shadow-bottom {
    background-image: linear-gradient(
      to left,
      rgba(94, 65, 222, 0.22),
      rgba(94, 65, 222, 0)
    ) !important;
  }

  .swiper-pagination {
    bottom: 12px !important;
    left: 50% !important;
    transform: translateX(-50%) !important;
    width: auto !important;
    display: flex !important;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }

  .swiper-pagination-bullet {
    width: 8px;
    height: 8px;
    border-radius: 20px;
    background: #5e41de;
    opacity: 0.25;
    margin: 0 !important;
    transition: all 0.35s ease;
  }

  .swiper-pagination-bullet-active {
    width: 28px;
    opacity: 1;
    background: #5e41de;
  }
`;

export default HeroSwiper;
