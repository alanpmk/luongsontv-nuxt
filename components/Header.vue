<template>
  <header class="bg-base-100 w-full sticky top-0 z-50">
    <div
      class="container px-2 w-full h-full mx-auto flex items-end justify-between gap-4 md:items-center xl:p-0"
    >
      <div class="w-full h-full flex items-center justify-between">
        <a href="/"
          ><img
            src="/logo.png"
            alt=""
            class="w-full"
        /></a>
        <ul
          class="items-center hidden h-full gap-4 lg:flex lg:justify-center xl:gap-6"
        >
          <li class="h-full flex flex-col relative">
            <NuxtLink
              to="/"
              class="py-2 rounded transition-colors cursor-pointer font-medium lg:text-sm xl:text-lg 2xl:text-xl"
              active-class="text-primary"
            >
              Trang chủ
            </NuxtLink>

            <div
              v-if="$route.path === '/'"
              class="w-full h-[2px] rounded-full bg-gradient-to-l from-yellow-400 to-amber-500"
            ></div>
          </li>
          <li class="h-full flex flex-col relative">
            <NuxtLink
              to="/schedule"
              class="py-2 rounded transition-colors cursor-pointer font-medium lg:text-sm xl:text-lg 2xl:text-xl"
              active-class="text-primary"
            >
              Lịch thi đấu
            </NuxtLink>
            <div
              v-if="$route.path === '/schedule'"
              class="w-full h-[2px] rounded-full bg-gradient-to-l from-yellow-400 to-amber-500"
            ></div>
          </li>
          <li class="h-full flex flex-col relative">
            <NuxtLink
              to="/odds"
              class="py-2 rounded transition-colors cursor-pointer font-medium lg:text-sm xl:text-lg 2xl:text-xl"
              active-class="text-primary"
            >
              Tỉ lệ kèo
            </NuxtLink>
            <div
              v-if="$route.path === '/odds'"
              class="w-full h-[2px] rounded-full bg-gradient-to-l from-yellow-400 to-amber-500"
            ></div>
          </li>
          <li class="h-full flex flex-col relative">
            <NuxtLink
              to="/highlight"
              class="py-2 rounded transition-colors cursor-pointer font-medium lg:text-sm xl:text-lg 2xl:text-xl"
              active-class="text-primary"
            >
              Highlight
            </NuxtLink>
            <div
              v-if="$route.path === '/highlight'"
              class="w-full h-[2px] rounded-full bg-gradient-to-l from-yellow-400 to-amber-500"
            ></div>
          </li>

        </ul>
        <button class="hidden w-auto lg:w-1/5 lg:inline">
          <img
            src="https://luongson18.tv/static/media/btn-cuocngay.062ba32afae20999ebc4.png"
            alt=""
            class="object-contain rounded-full w-full"
          />
        </button>
      </div>
      <div class="w-2/3 md:hidden">
        <div class="md:hidden">
          <ul class="w-full flex justify-end">
            <li
              class="flex flex-col justify-center text-xs whitespace-nowrap p-1 font-semibold rounded truncat"
            >
              <NuxtLink
                to="/promotions"
                class="text-white pr-2 border-r border-white"
                active-class="text-primary"
              >
                Khuyến mãi
              </NuxtLink>
            </li>
            <li
              class="flex flex-col justify-center text-xs whitespace-nowrap p-1 font-semibold rounded truncat"
            >
              <NuxtLink
                to="/hiring"
                class="text-white pr-2 border-r border-white"
                active-class="text-primary"
              >
                Tuyển dụng
              </NuxtLink>
            </li>
            <li
              class="flex flex-col justify-center text-xs whitespace-nowrap p-1 font-semibold rounded truncat"
            >
              <a
                class="text-primary false"
                href="https://luongson.app"
                target="_blank"
                >Tải app</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
