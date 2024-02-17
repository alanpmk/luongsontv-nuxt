<script setup>
import { ref, onMounted } from "vue";
import { Swiper } from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

let swiper = ref(null);

onMounted(() => {
  Swiper.use([Navigation, Autoplay]);
  swiper.value = new Swiper(".swiper-blv", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: "auto",
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Autoplay
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
});
</script>
<template>
  <div class="relative w-full py-4">
    <div
      class="swiper swiper-blv swiper-initialized swiper-horizontal !static mx-auto !w-full 2xl:!w-[90%]"
    >
      <div
        class="swiper-wrapper"
        style="
          transition-duration: 1000ms;
          transform: translate3d(-4750px, 0px, 0px);
        "
      >
        <div class="swiper-slide">
          <a href="/"
            ><div class="mx-auto w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20">
              <NuxtImg
                src="https://api.553328.com/uploads/avatar/1706281110.jpg"
                alt=""
                class="h-full w-full rounded-full object-cover"
              />
            </div>
            <p
              class="mt-2 text-white font-normal text-xs md:text-base md:font-semibold"
            >
              BLV LONG NHI MS: 39
            </p></a
          >
        </div>
        <div class="swiper-slide">
          <a href="/"
            ><div class="mx-auto w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20">
              <NuxtImg
                src="https://api.553328.com/uploads/avatar/1701855807.jpg"
                alt=""
                class="h-full w-full rounded-full object-cover"
              />
            </div>
            <p
              class="mt-2 text-white font-normal text-xs md:text-base md:font-semibold"
            >
              BLV CHU ĐỒNG BLBĐ
            </p></a
          >
        </div>
        <div class="swiper-slide">
          <a href="/"
            ><div class="mx-auto w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20">
              <NuxtImg
                src="https://api.553328.com/uploads/avatar/1704813907.jpg"
                alt=""
                class="h-full w-full rounded-full object-cover"
              />
            </div>
            <p
              class="mt-2 text-white font-normal text-xs md:text-base md:font-semibold"
            >
              BLV TRIỆU TỬ LONG MS: 29
            </p></a
          >
        </div>

        <div class="swiper-slide">
          <a href="#!"
            ><div class="mx-auto w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20">
              <NuxtImg
                src="https://api.553328.com/uploads/avatar/1706017561.jpg"
                alt=""
                class="h-full w-full rounded-full object-cover"
              />
            </div>
            <p
              class="mt-2 text-white font-normal text-xs md:text-base md:font-semibold"
            >
              BLV VƯƠNG ANH BLBĐ
            </p></a
          >
        </div>
        <div class="swiper-slide">
          <a href="#!"
            ><div class="mx-auto w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20">
              <NuxtImg
                src="https://api.553328.com/uploads/avatar/1694853405.jpg"
                alt=""
                class="h-full w-full rounded-full object-cover"
              />
            </div>
            <p
              class="mt-2 text-white font-normal text-xs md:text-base md:font-semibold"
            >
              BLV SÀI TIẾN MS: 09
            </p></a
          >
        </div>
        <div class="swiper-slide">
          <a href="#!"
            ><div class="mx-auto w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20">
              <NuxtImg
                src="https://api.553328.com/uploads/avatar/1694853555.jpg"
                alt=""
                class="h-full w-full rounded-full object-cover"
              />
            </div>
            <p
              class="mt-2 text-white font-normal text-xs md:text-base md:font-semibold"
            >
              BLV HOA VINH
            </p></a
          >
        </div>
        <div class="swiper-slide">
          <a href="#!"
            ><div class="mx-auto w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20">
              <NuxtImg
                src="https://api.553328.com/uploads/avatar/1694853679.jpg"
                alt=""
                class="h-full w-full rounded-full object-cover"
              />
            </div>
            <p
              class="mt-2 text-white font-normal text-xs md:text-base md:font-semibold"
            >
              BLV DƯƠNG CHÍ MS: 15
            </p></a
          >
        </div>
        <div class="swiper-slide">
          <a href="/#!"
            ><div class="mx-auto w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20">
              <NuxtImg
                src="https://api.553328.com/uploads/avatar/1698302111.jpg"
                alt=""
                class="h-full w-full rounded-full object-cover"
              />
            </div>
            <p
              class="mt-2 text-white font-normal text-xs md:text-base md:font-semibold"
            >
              BLV VƯƠNG ANH MS: 18
            </p></a
          >
        </div>
        <div class="swiper-slide">
          <a href="#!"
            ><div class="mx-auto w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20">
              <NuxtImg
                src="https://api.553328.com/uploads/avatar/1699091664.png"
                alt=""
                class="h-full w-full rounded-full object-cover"
              />
            </div>
            <p
              class="mt-2 text-white font-normal text-xs md:text-base md:font-semibold"
            >
              BLV QUÁCH THỊNH MS: 20
            </p></a
          >
        </div>
        <div class="swiper-slide">
          <a href="#!"
            ><div class="mx-auto w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20">
              <NuxtImg
                src="https://api.553328.com/uploads/avatar/1696589675.jpg"
                alt=""
                class="h-full w-full rounded-full object-cover"
              />
            </div>
            <p
              class="mt-2 text-white font-normal text-xs md:text-base md:font-semibold"
            >
              BLV TỪ NINH MS: 02
            </p></a
          >
        </div>
        <div class="swiper-slide">
          <a href="#!"
            ><div class="mx-auto w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20">
              <NuxtImg
                src="https://api.553328.com/uploads/avatar/1706086170.jpg"
                alt=""
                class="h-full w-full rounded-full object-cover"
              />
            </div>
            <p
              class="mt-2 text-white font-normal text-xs md:text-base md:font-semibold"
            >
              BLV GIA CÁT LƯỢNG MS: 34
            </p></a
          >
        </div>
        <div class="swiper-slide">
          <a href="#!"
            ><div class="mx-auto w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20">
              <NuxtImg
                src="https://api.553328.com/uploads/avatar/1695190572.webp"
                alt=""
                class="h-full w-full rounded-full object-cover"
              />
            </div>
            <p
              class="mt-2 text-white font-normal text-xs md:text-base md:font-semibold"
            >
              BLV LƯ TUẤN NGHĨA MS: 17
            </p></a
          >
        </div>
        <div class="swiper-slide">
          <a href="#!"
            ><div class="mx-auto w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20">
              <NuxtImg
                src="https://api.553328.com/uploads/avatar/1694853501.jpg"
                alt=""
                class="h-full w-full rounded-full object-cover"
              />
            </div>
            <p
              class="mt-2 text-white font-normal text-xs md:text-base md:font-semibold"
            >
              BLV LÂM XUNG MS: 12
            </p></a
          >
        </div>
        <div class="swiper-slide">
          <a href="#!"
            ><div class="mx-auto w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20">
              <NuxtImg
                src="https://api.553328.com/uploads/avatar/1695218497.webp"
                alt=""
                class="h-full w-full rounded-full object-cover"
              />
            </div>
            <p
              class="mt-2 text-white font-normal text-xs md:text-base md:font-semibold"
            >
              BLV QUAN THẮNG MS: 03
            </p></a
          >
        </div>
        <div class="swiper-slide">
          <a href="#!"
            ><div class="mx-auto w-10 h-10 md:w-14 md:h-14 lg:w-20 lg:h-20">
              <NuxtImg
                src="https://api.553328.com/uploads/avatar/1703619380.jpg"
                alt=""
                class="h-full w-full rounded-full object-cover"
              />
            </div>
            <p
              class="mt-2 text-white font-normal text-xs md:text-base md:font-semibold"
            >
              BLV THẠCH TÚ MS: 24
            </p></a
          >
        </div>
      </div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>
<style scoped>
.swiper-button-prev,
.swiper-button-next {
  @apply text-yellow-500 top-1/3;
}
.swiper-slide {
  @apply md:w-[190px] w-[140px] px-1 md:px-0;
}
</style>
