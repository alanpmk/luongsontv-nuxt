<template>
  <div class="demo-player" ref="dplayerContainer">
    <!-- DPlayer will be inserted here -->
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";

const dplayerContainer = ref(null);
let dp = null;  // DPlayer instance

const props = defineProps({
  videoUrl: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
  },
});

watchEffect(() => {
  if (dp) {
    // Save the current state of the video player
    sessionStorage.setItem('videoTime', dp.video.currentTime);
  }
});

onMounted(async () => {
  if (import.meta.env.SSR) return;
  const { default: DPlayer } = await import("dplayer-lite");
  const { default: Hls } = await import("hls.js");

  if (Hls.isSupported()) {
    dp = new DPlayer({
      container: dplayerContainer.value,
      screenshot: false,
      video: {
        url: props.videoUrl,
        pic: props.pic,
        thumbnails: props.pic,
        type: "customHls",
        customType: {
          customHls: function (video) {
            if (Hls.isSupported()) {
              const hls = new Hls();
              hls.loadSource(video.src);
              hls.attachMedia(video);
            }
          },
        },
      },
      autoplay: true,
      controls: true,
      live: true,
      theme: "#ffd900",
    });

    // Save the current time of the video player whenever it changes
    dp.on('timeupdate', () => {
      sessionStorage.setItem('videoTime', dp.video.currentTime);
    });

    // Restore the saved state of the video player
    const videoTime = sessionStorage.getItem('videoTime');
    if (videoTime) {
      dp.video.currentTime = videoTime;
    }
  }
});
</script>
<style>
.demo-player {
  margin: 0 auto;
  /* margin-top: 50px;
  max-width: 640px; */
  height: 100%;
}
</style>
