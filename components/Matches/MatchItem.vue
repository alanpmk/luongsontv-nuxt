<script setup>
const props = defineProps({
  match: {
    type: Object,
  },
});
</script>
<template>
  <a
    class="block z-10 w-full h-full border border-primary rounded-lg bg-gray-900 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
    href="#!"
    ><div
      class="flex items-center justify-between py-1 px-2 border-b border-primary w-full h-1/5"
    >
      <p
        class="truncate text-primary font-bold text-xs md:text-sm xl:text-base"
      >
        BÀN LUẬN BÓNG ĐÁ
      </p>
      <p class="truncate text-white font-bold text-xs md:text-sm xl:text-base">
        BLV VƯƠNG ANH BLBĐ
      </p>
    </div>
    <div
      class="flex items-center justify-center text-primary py-2 px-1 md:py-4 md:px-2 w-full h-3/5"
    >
      <div class="flex flex-col items-center justify-center w-1/3">
        <div class="flex items-center w-8 h-8 md:w-14 md:h-14">
          <img
            class="object-contain rounded-full w-full h-full bg-white"
            src="https://api.553328.com/uploads/team_logo/1707845744.jpg"
            alt=""
          />
        </div>
        <p class="text-white text-xs text-center truncate w-full mt-1">
          BÀN LUẬN BÓNG ĐÁ
        </p>
      </div>
      <div class="flex flex-col items-center justify-center w-1/3">
        <div
          class="flex flex-col items-center justify-center text-xs gap-1 md:flex-row xl:text-base"
        >
          <span class="text-white whitespace-nowrap">15:00</span
          ><span class="text-white whitespace-nowrap">14/02</span>
        </div>
        <p class="font-bold">VS</p>
      </div>
      <div class="flex flex-col items-center justify-center w-1/3">
        <div class="flex items-center w-8 h-8 md:w-14 md:h-14">
          <img
            class="object-contain rounded-full w-full h-full bg-white"
            src="https://api.553328.com/uploads/team_logo/1707845747.jpg"
            alt=""
          />
        </div>
        <p class="text-white text-xs text-center truncate w-full mt-1">
          BÀN LUẬN BÓNG ĐÁ
        </p>
      </div>
    </div>
    <div
      class="bg-neutral-900 flex items-center rounded-b-lg justify-between border-t border-primary w-full h-1/5"
    >
      <div class="flex items-center justify-center gap-2 h-full w-full py-1">
        <span
          class="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"
        ></span>
        <p class="text-white uppercase text-center text-xs xl:text-sm">
          Sắp diễn ra
        </p>
      </div>
    </div></a
  >
</template>
