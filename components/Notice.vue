<style>
.marquee-container {
  overflow: hidden;
  width: 100%;
}
.marquee-box {
  display: flex;
  animation: marquee 23s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
<template>
  <div class="lg:p-0">
    <div
      class="border-y border-[#F9E82E] text-white flex items-center w-full bg-gray-900 lg:border lg:rounded-lg"
    >
      <div class="relative w-full flex">
        <div class="px-1 py-[2px] md:px-2 md:py-1">
          <img
            src="data:image/png;base64,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"
            alt=""
            class="w-5"
          />
        </div>
        <div class="marquee-container flex items-center w-full overflow-hidden">
          <div class="marquee-box">
            <p
              class="text-white w-full text-xs md:text-[14px] whitespace-nowrap"
            >
              <span class="font-medium"
                >⚽️ 🏆 🥇 LUONGSONTV - Link dự phòng:<span
                  class="text-primary"
                ></span
                ><a
                  href="https://luongson1.tv/"
                  rel="noreferrer"
                  target="_blank"
                  class="text-[#f9e82e] font-medium pl-1"
                  >bit.ly/m/luongsontv</a
                >🔥🔥🔥</span
              >
              Youtube:<a
                href="https://youtube.com/@fanluongsontv"
                rel="noreferrer"
                target="_blank"
                class="text-[#f9e82e] font-medium pl-1"
                >FAN Lương Sơn TV</a
              >
              -
              <a
                href="https://youtube.com/@luongsontvofficial"
                rel="noreferrer"
                target="_blank"
                class="text-[#f9e82e] font-medium pl-1"
                >Lương Sơn TV OFFICIAL</a
              >, Tiktok:<a
                href="https://www.tiktok.com/@fanluongsontv"
                rel="noreferrer"
                class="text-[#f9e82e] font-medium pl-1"
                target="_blank"
                >FAN Lương Sơn TV -</a
              ><a
                href="https://www.tiktok.com/@luongsontv_official"
                rel="noreferrer"
                class="text-[#f9e82e] font-medium pl-1"
                target="_blank"
                >LƯƠNG SƠN TV OFFICIAL</a
              >, Telegram hỗ trợ:<a
                href="https://t.me/luongsontv"
                rel="noreferrer"
                target="_blank"
                class="text-[#f9e82e] font-medium pl-1"
                >Nhóm Kèo Vàng</a
              ><a
                rel="noreferrer"
                target="_blank"
                class="text-[#f9e82e] font-medium pl-1"
              ></a
              >, Email:<a
                href="mailto:luongson@okvip.com"
                rel="noreferrer"
                target="_blank"
                class="text-[#f9e82e] font-medium pl-1"
                >luongson@okvip.com</a
              >🥇🥈🥉🎖🏆️
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
