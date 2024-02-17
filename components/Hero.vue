
<script setup>
import { ref, onMounted } from 'vue';

</script>
<style lang="css" scoped>
.wrapper {
  background-image: url("~/assets/img/public.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
}
</style>
<template>
  <div class="wrapper w-full lg:py-4 xl:py-2">
    <div class="container mx-auto h-full flex flex-col">
      <div
        class="mx-auto flex gap-2 w-full lg:h-[570px] xl:h-[635px] lg:px-2 xl:gap-4 xl:p-0 2xl:w-5/6 3xl:h-[765px]"
      >
        <div class="flex flex-col justify-start w-full h-full gap-2 lg:w-3/4">
          <Notice />
          <div class="h-full px-2 flex flex-col gap-2 lg:p-0">
            <div class="h-full rounded-md md:rounded-lg">
              <!-- DP PLAYER ADDED HERE -->
              <!-- <p v-if="pending">Pending.....</p>
               <pre v-else-if="error">Could not load quote: {{ error.data }}</pre> -->
              <Dplayer :videoUrl="`https://vip.opstream13.com/20240203/2570_59f7e0d8/index.m3u8`"/>
            </div>
            <CTAGroupBtn />
          </div>
        </div>
        <div
          class="h-full hidden flex-col justify-start lg:flex lg:gap-2 lg:w-1/4"
        >
          <div
            class="h-auto bg-gradient-to-b from-yellow-400 to-amber-500 rounded-lg border border-yellow-300 font-medium p-1 text-sm text-white flex item-center justify-center btnMatchHot"
          >
            <p>CÁC TRẬN HOT</p>
          </div>
          <MatchesListHotMatch/>
        </div>
      </div>
    </div>
  </div>
</template>
