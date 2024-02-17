<template>
  <div class="w-full h-full px-2 bg-[#1f1e2a] xl:p-0 text-black">
    <div
      class="w-full mx-auto flex flex-col py-2 lg:flex-row lg:gap-4 lg:h-[570px] xl:container xl:h-[680px] 2xl:h-[831px] 2xl:max-w-[90%] 3xl:h-[1105px]"
    >
      <div
        class="flex flex-col justify-between w-full h-full bg-[#252c3d] lg:w-[72%]"
      >
        <Notice/>
        <div class="relative h-full">
          <!-- Dplayer -->
        </div>
        <!-- Bottom video -->
        <div
          class="rounded-b-lg w-full flex items-center justify-between bg-white"
        >
          <div class="w-1/2 p-2 flex items-center gap-1 xl:gap-2">
            <div
              class="bg-[#f9e32e] border-[#f9e32e] rounded-full border-2 h-12 w-12 xl:border-4 xl:h-16 xl:w-16 2xl:w-20 2xl:h-20"
            >
              <img
                src="https://api.553328.com/uploads/avatar/1694853817.jpg"
                alt=""
                class="h-full w-full rounded-full object-cover"
              />
            </div>
            <div class="flex flex-col w-10/12">
              <p class="font-bold uppercase text-xs xl:text-base 2xl:text-lg">
                BGD D1: Bashundhara Kings
                <span class="text-primary text-lg xl:text-2xl">0 - 1</span>
                Rahmatganj MFS
              </p>
              <div
                class="flex items-center space-x-2 text-xs xl:text-base 2xl:text-base"
              >
                <span class="font-semibold uppercase"
                  >BLV TRƯƠNG THANH MS: 01</span
                >
                <div class="flex items-center">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABJCAYAAACesWDiAAAA4WlDQ1BzUkdCAAAYlWNgYDzNAARMDgwMuXklRUHuTgoRkVEKDEggMbm4gAE3YGRg+HYNRDIwXNYNLGHlx6MWG+AsAloIpD8AsUg6mM3IAmInQdgSIHZ5SUEJkK0DYicXFIHYQBcz8BSFBDkD2T5AtkI6EjsJiZ2SWpwMZOcA2fEIv+XPZ2Cw+MLAwDwRIZY0jYFhezsDg8QdhJjKQgYG/lYGhm2XEWKf/cH+ZRQ7VJJaUQIS8dN3ZChILEoESzODAjQtjYHh03IGBt5IBgbhCwwMXNEQd4ABazEwoEkMJ0IAAHLYNoSjH0ezAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEsklEQVR4nO2cQVLjOBSG/ydg1ZA2VewAt3ID5gSdPgHhBB1O0HACenazm/QJGk7Q4QRNn2CYE0QoQFEFCzdkQRH7aRZxUk6IEdOW48yUvipXxc7Ti/wjPcl+EoDH4/F4FhYqw6mUUsZxLMvwncfy8nKklDp37deZQFLKgJkPAHwCELjy+y9RzHzS7/fbURRFLhw6EUhKKZn5OwDpwp8DlBDig1JKFXUkHFQGCyYOAEhm/ubCUeEWtL293SKir1OXIyJyHg9ewhizg+ddu6W1Pinid7lIYQAQQnw0xozPjTGdh4eHfVcx4LVIKQNjzFdjTDNTlxaAQgIV7mLpX27MYDA4nLc4AKCUiojoMHuNiHby7F+Lixg00axvbm6UA5+/xIygXHg0dRKk/88UjkGukFJKALvp6amLIdoFC9GCpJQHzNxl5nZ6dKWUB1XXC1gAgdJJ5p/T15n5KAiCqmbkYyoXKEmSvJEmePPmzW7Od3OjcoFewhgz9+nCNJULtLS0dGaMUdPXkyRR19fXpxVUaYLKBVJKRcy8lySJMsbAGIMkSRSAvarrBizIMH91dXUOoL6xsfGeiH7e3t7O9TnuJRZCoBF3d3c/qq7DNJV3sUXHC2TBC2TBC2TBC2TBC2TBC2TBC2RhLhNFKeVOHMcBAPT7/fPpd9ZbW1uNZxVbXj5XSo3tZmVry8qmTvxGmc5HMPM3IYQEgFqtdhBF0Zfs90KI7zPKIAzDttb6MD0/EkK0Ztg4SxLOovQuJqVsIJNUzKZlpjHGdAAcE1EnvXSwtbV1NGWmABynh8IwSfhMYFeULhAzfwTGNw8iauS9KTTGtLXW+xcXF3sAPgPAdKsBcKa13tda7ydJMnril5ubm4VTPLOYR5BuAsObJ6IzAFhdXf1kK2SMuUg/yjyb9C0AAICI3haqZQ6lCrS9vd3EMDelLi8vf2Rb0UvlpJSBEGIXAIwxZ3l2YRh+Hn2O4/giz64IpQZpIpq4SSHEKTO3iahRr9ffdbvdiZsSQnTCMIyYWWYuTwR0AM0wDBsYCh+k/ttlJSxLa0FSygBACwCIqBmGYTcbTAeDQWtGsdGwroiow8yNXq/XmWEHAFEqfKvX6x3m2BSmtBaUJEmTaLx4JDvviQAEafD9PVuGmVuXl5e2l2YdrfW+s4paKK0FZWLIsda6PjqEEL+lJnLWBHHRKEUgKaXMzHcmuohSSo1GMwDvy/h9l5TVxSIhRAMAlFLPukwcx4crKytvhRA/AWBke39//3eewyRJvqysrBw/Pj6WMlrlUXiFWRiGJnuutS5l5exrcV0f/zRvwQtkwQtkwQtkwQtkwQtkwQtkwQtkwQtkwQtkwQtkwQtkwQtkwQtkwQtkwQtkwQtkwQtkwYVAE0tZ6vX6Owc+f4l0z1mWwns9Cgs0vbs5juN2FduY0k29E9uqjDGF1w4Vzmow80k2105EzVqt1lhbW5vrdgJmfrYtnIiOi/p1koEIw/AvAKUsPymA0lrXizpxEqSfnp72MFzMtCiop6enDy4cLblw0u/3o/X19RNjzCOG63mq2koZMfMfDw8P+3d3dzcuHJb173F2AJSyoCkPIlLTy2k8Ho/nv84//6Lr71vGjuoAAAAASUVORK5CYII="
                    alt=""
                    class="h-8 object-contain"
                  />
                  <p class="font-medium">Tải APP có thể kết nối với TV</p>
                </div>
              </div>
            </div>
          </div>
          <div class="w-1/2 relative h-full">
            <img
              src="https://luongson18.tv/static/media/bg_sp_room.631d6cd08f934760520f.png"
              alt=""
              class="rounded-br-md w-full h-full"
            />
            <div
              class="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-0 xl:px-4 xl:py-2"
            >
              <div class="ml-auto mr-0 xl:w-10/12 2xl:w-10/12">
                <div
                  class="w-full flex justify-between items-center gap-0.5 flex-col xl:gap-2 xl:items-center 2xl:gap-1"
                >
                  <div
                    class="w-full h-full flex justify-center items-center gap-1 text-stone-950 font-bold md:justify-center md:w-auto xl:gap-2"
                  >
                    <button
                      class="btnMatchHot bg-gradient-to-b from-[#f9e82e] to-[#c16809] rounded-2xl flex items-center justify-center gap-1 px-2 py-1 whitespace-nowrap text-[10px] w-1/4 md:w-2/3 md:gap-2 md:text-sm 2xl:text-base"
                    >
                      CƯỢC NGAY<span
                        role="img"
                        aria-label="double-right"
                        class="anticon anticon-double-right"
                        ><svg
                          viewBox="64 64 896 896"
                          focusable="false"
                          data-icon="double-right"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            d="M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"
                          ></path></svg
                      ></span>
                    </button>
                    <div class="flex gap-2 w-3/4">
                      <button
                        class="bg-gradient-to-l from-amber-500 to-red-500 rounded-2xl text-white font-medium flex items-center justify-center gap-2 px-2 py-1 transition-transform duration-300 hover:-translate-y-[2px] w-1/3 lg:w-14 lg:text-sm xl:w-20 xl:text-md 2xl:text-base"
                      >
                        789BET</button
                      ><button
                        class="bg-gradient-to-l from-amber-500 to-red-500 text-white font-medium rounded-2xl flex items-center justify-center gap-2 px-2 py-1 transition-transform duration-300 hover:-translate-y-[2px] w-1/3 lg:w-14 lg:text-sm xl:w-20 xl:text-md 2xl:text-base"
                      >
                        NEW88</button
                      ><button
                        class="bg-sky-500 text-white font-medium rounded-2xl flex items-center justify-center gap-2 px-2 py-1 transition-transform duration-300 hover:-translate-y-[2px] w-1/3 lg:w-14 lg:text-sm xl:w-20 xl:text-md 2xl:text-base"
                      >
                        Jun88
                      </button>
                    </div>
                  </div>
                  <div
                    class="w-full flex justify-end items-center font-bold text-xs gap-1 md:gap-2 md:h-10 xl:justify-end 2xl:text-md 2xl:text-base"
                  >
                    <button
                      class="truncate bg-white rounded-full flex items-center justify-center transition-transform duration-300 hover:-translate-y-[2px] hover:text-primary w-1/3 gap-1 py-0.5 px-1 md:w-28 lg:py-1 lg:px-2 xl:w-32 2xl:w-40 2xl:gap-2 2xl:text-base"
                    >
                      <img
                        src="https://luongson18.tv/static/media/icon_zalo.140ceee24e440437d06f.webp"
                        alt=""
                        class="rounded-full object-contain h-5 xl:h-6"
                      />Nhóm Kèo Vàng</button
                    ><button
                      class="truncate bg-white rounded-full flex items-center justify-center transition-transform duration-300 hover:-translate-y-[2px] hover:text-primary w-1/3 gap-1 py-0.5 px-1 md:w-28 lg:py-1 lg:px-2 xl:w-32 2xl:w-40 2xl:gap-2 2xl:text-base"
                    >
                      <img
                        src="https://luongson18.tv/static/media/icon_tele.b4ced12b19596361151a.webp"
                        alt=""
                        class="rounded-full object-contain h-5 xl:h-6"
                      />Nhóm Kèo Vàng</button
                    ><button
                      class="truncate bg-white rounded-full flex items-center justify-center transition-transform duration-300 hover:-translate-y-[2px] hover:text-primary w-1/3 gap-1 py-0.5 px-1 md:w-28 lg:py-1 lg:px-2 xl:w-32 2xl:w-40 2xl:gap-2 2xl:text-base"
                    >
                      <img
                        src="https://luongson18.tv/static/media/icon_facebook.54f481a6087529645c45.webp"
                        alt=""
                        class="rounded-full object-contain h-5 xl:h-6"
                      />Page Kèo Vàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="bg-gray-900 p-1 rounded-lg border border-[#f9e82e] flex flex-col gap-1 w-full h-full lg:w-[28%]"
      >
        <div
          class="bg-gradient-to-b from-yellow-400 to-amber-500 rounded-md font-bold flex items-center justify-center h-[32px]"
        >
          PHÒNG CHAT
          <div class="w-6 h-6 p-1">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAmCAYAAABH/4KQAAAA4WlDQ1BzUkdCAAAYlWNgYDzNAARMDgwMuXklRUHuTgoRkVEKDEggMbm4gAE3YGRg+HYNRDIwXNYNLGHlx6MWG+AsAloIpD8AsUg6mM3IAmInQdgSIHZ5SUEJkK0DYicXFIHYQBcz8BSFBDkD2T5AtkI6EjsJiZ2SWpwMZOcA2fEIv+XPZ2Cw+MLAwDwRIZY0jYFhezsDg8QdhJjKQgYG/lYGhm2XEWKf/cH+ZRQ7VJJaUQIS8dN3ZChILEoESzODAjQtjYHh03IGBt5IBgbhCwwMXNEQd4ABazEwoEkMJ0IAAHLYNoSjH0ezAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACVUlEQVRYhe3YPVLbQBTA8f/bNDT6cEcKaZQbULo0N3AZqsAJQk4AnCAlZdwlXeAE4I6S3MAjOIC0blxpU+DJEHslrXZVMbzy7Xr1G+/q7RvBe7zBkLaBPM/PgQsgBRZKqavVarUa46FFUaTGmN/GmBlQAYuyLL/tzvtg+3GWZacicg0cbFNHxpj5ZDK5raqqCoU1TXMHTLepA2AaRRFa6+Xrucq2gIh8ta3bNM1dURTFCLCj3TGl1OlergXX9u94A7tg29h7phVnjLntes5QoAOMpmludnPWM1fX9UOSJACzlrVS1zPoCLt8fn6+csJtgctQYAisExcKDIX14nyBY8CgowjvRp7nF8Blx5SVUuoYqMaADcK5AnkpCcEwcNjW1+GyxcDhGLDBOHACWmMoDDxwMBzoA4MOXJZl88lkcp0kyXkURR+11vc+wDZYnueXSZJ8j+P4c5qm1HX9xwm37Up+AgVwKCKzOI4LrfV/11ofsA2WZdli21wcikgBzJMkqeu6fng9z3q3KqW+7OZE5DTLsh+7+bIsr7C8wT2wvfWBvU6o7eIvbPkuoDHmTETugcemac4HwsDSlVjrXF89M8Ysnp6eztrGbdEDs67Z1pUs4zj+JCLWYioiR7Yz6AsDHtfr9clms9n04gC01jdjAF1gWutjW2fTWedCgSGwXlwIMBTmhPMBjgGDgV2Jyxv3Yg2HDca5AHvCGQYeF3/fFo8FA8+uxAM4GAaeOBgE9IJBAA6cgN4wCMRBJzAIBiPg4B8wFZEpUBljfq3X65PQL1Lv8SbjLx0C8paY1LuXAAAAAElFTkSuQmCC"
              alt=""
              class="w-full h-full object-contain animated-arrow-bottom"
            />
          </div>
        </div>
        <div class="rounded-lg" style="height: calc(100% - 32px)">

          <!-- Iframe chatbox here -->
           <div class="w-full h-full bg-zinc-100 border-inherit rounded-[inherit] relative">


          </div>
        </div>
      </div>
    </div>
    <!-- Mo phong - tran dau - ty le keo  -->
    <div
      class="mt-8 container mx-auto w-full flex gap-2 flex-row h-[730px] overflow-hidden"
    >
    <!-- Mo phong tran dau -->
      <div class="w-3/4 bg-white rounded">
        <div class="flex flex-col gap-2 w-full bg-white md:border md:rounded">
          <div
            class="w-full flex items-center justify-center border-b border-neutral-300"
          >
            <ul class="flex gap-12">
              <li
                class="font-bold cursor-pointer py-2 lg:text-sm xl:text-lg hover:text-primary"
              >
                TRẬN ĐẤU
              </li>
              <li
                class="font-bold cursor-pointer py-2 lg:text-sm xl:text-lg hover:text-primary"
              >
                TỶ LỆ KÈO
              </li>
              <li
                class="font-bold text-primary border-b-4 border-primary cursor-pointer py-2 lg:text-sm xl:text-lg"
              >
                ĐỐI ĐẦU
              </li>
              <li
                class="font-bold cursor-pointer py-2 lg:text-sm xl:text-lg hover:text-primary"
              >
                BẢNG XẾP HẠNG
              </li>
            </ul>
          </div>
          <div>
            <ul
              class="flex gap-4 px-2 py-2 rounded bg-zinc-100 text-sm uppercase"
            >
              <li
                class="bg-zinc-300 py-1 px-2 rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:bg-gradient-to-b hover:from-[#F9E82E] hover:to-[#C16809] bg-gradient-to-b from-[#F9E82E] to-[#C16809]"
              >
                Toàn Bộ
              </li>
              <li
                class="bg-zinc-300 py-1 px-2 rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:bg-gradient-to-b hover:from-[#F9E82E] hover:to-[#C16809] false"
              >
                Chủ Nhà - Bashundhara Kings
              </li>
              <li
                class="bg-zinc-300 py-1 px-2 rounded-lg font-semibold cursor-pointer transition-all duration-300 hover:bg-gradient-to-b hover:from-[#F9E82E] hover:to-[#C16809] false"
              >
                Đội Khách - Rahmatganj MFS
              </li>
            </ul>
            <div class="px-2">
              <div class="">
                <div
                  class="w-full my-3 px-2 py-2 bg-zinc-100 rounded-lg flex justify-start items-start gap-2 text-stone-900 text-sm font-bold uppercase"
                >
                  CÁC TRẬN ĐỐI ĐẦU
                </div>
                <div class="text-md text-center"></div>
                <div
                  class="scrollbarCustom overflow-y-scroll h-[565px] relative border-inherit scroll-smooth"
                >
                  <div
                    class="flex justify-between items-center my-1 border-b border-gay-300 pb-1 font-semibold text-sm w-full"
                  >
                    <div class="w-1/6">28-04-2023</div>
                    <div class="flex justify-start w-1/6 items-center">
                      <div class="flex justify-start items-center gap-2">
                        <div class="">BGD D1</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-start flex-col items-start gap-2 w-2/5"
                    >
                      <div class="flex justify-start gap-x-3 items-center">
                        <div class="w-[25px] h-[25px]">
                          <img
                            class="w-[25px] h-[25px] object-cover"
                            src="http://zq.titan007.com/Image/team/images/28597/1gr5yygtp31c.png?win007=sell"
                            alt=""
                          />
                        </div>
                        <div class="bg-zinc-200 rounded-md px-2 py-1">
                          Rahmatganj MFS
                        </div>
                      </div>
                      <div class="flex justify-start gap-x-3 items-center">
                        <div class="w-[25px] h-[25px]">
                          <img
                            class="w-[25px] h-[25px] object-cover"
                            src="http://zq.titan007.com/Image/team/images/34436/1gryz2byb21c.png?win007=sell"
                            alt=""
                          />
                        </div>
                        <div class="bg-transparent rounded-md px-2 py-1">
                          Bashundhara Kings
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-between items-center w-1/2">
                      <div class="text-center w-1/2">
                        <div>0</div>
                        <div>4</div>
                      </div>
                      <div class="text-white font-bold w-1/8"></div>
                    </div>
                  </div>
                  <div
                    class="flex justify-between items-center my-1 border-b border-gay-300 pb-1 font-semibold text-sm w-full"
                  >
                    <div class="w-1/6">31-12-2022</div>
                    <div class="flex justify-start w-1/6 items-center">
                      <div class="flex justify-start items-center gap-2">
                        <div class="">BGD D1</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-start flex-col items-start gap-2 w-2/5"
                    >
                      <div class="flex justify-start gap-x-3 items-center">
                        <div class="w-[25px] h-[25px]">
                          <img
                            class="w-[25px] h-[25px] object-cover"
                            src="http://zq.titan007.com/Image/team/images/34436/1gryz2byb21c.png?win007=sell"
                            alt=""
                          />
                        </div>
                        <div class="bg-zinc-200 rounded-md px-2 py-1">
                          Bashundhara Kings
                        </div>
                      </div>
                      <div class="flex justify-start gap-x-3 items-center">
                        <div class="w-[25px] h-[25px]">
                          <img
                            class="w-[25px] h-[25px] object-cover"
                            src="http://zq.titan007.com/Image/team/images/28597/1gr5yygtp31c.png?win007=sell"
                            alt=""
                          />
                        </div>
                        <div class="bg-transparent rounded-md px-2 py-1">
                          Rahmatganj MFS
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-between items-center w-1/2">
                      <div class="text-center w-1/2">
                        <div>2</div>
                        <div>0</div>
                      </div>
                      <div class="text-white font-bold w-1/8"></div>
                    </div>
                  </div>
                  <div
                    class="flex justify-between items-center my-1 border-b border-gay-300 pb-1 font-semibold text-sm w-full"
                  >
                    <div class="w-1/6">21-06-2022</div>
                    <div class="flex justify-start w-1/6 items-center">
                      <div class="flex justify-start items-center gap-2">
                        <div class="">BGD D1</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-start flex-col items-start gap-2 w-2/5"
                    >
                      <div class="flex justify-start gap-x-3 items-center">
                        <div class="w-[25px] h-[25px]">
                          <img
                            class="w-[25px] h-[25px] object-cover"
                            src="http://zq.titan007.com/Image/team/images/28597/1gr5yygtp31c.png?win007=sell"
                            alt=""
                          />
                        </div>
                        <div class="bg-zinc-200 rounded-md px-2 py-1">
                          Rahmatganj MFS
                        </div>
                      </div>
                      <div class="flex justify-start gap-x-3 items-center">
                        <div class="w-[25px] h-[25px]">
                          <img
                            class="w-[25px] h-[25px] object-cover"
                            src="http://zq.titan007.com/Image/team/images/34436/1gryz2byb21c.png?win007=sell"
                            alt=""
                          />
                        </div>
                        <div class="bg-transparent rounded-md px-2 py-1">
                          Bashundhara Kings
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-between items-center w-1/2">
                      <div class="text-center w-1/2">
                        <div>0</div>
                        <div>2</div>
                      </div>
                      <div class="text-white font-bold w-1/8"></div>
                    </div>
                  </div>
                  <div
                    class="flex justify-between items-center my-1 border-b border-gay-300 pb-1 font-semibold text-sm w-full"
                  >
                    <div class="w-1/6">22-02-2022</div>
                    <div class="flex justify-start w-1/6 items-center">
                      <div class="flex justify-start items-center gap-2">
                        <div class="">BGD D1</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-start flex-col items-start gap-2 w-2/5"
                    >
                      <div class="flex justify-start gap-x-3 items-center">
                        <div class="w-[25px] h-[25px]">
                          <img
                            class="w-[25px] h-[25px] object-cover"
                            src="http://zq.titan007.com/Image/team/images/34436/1gryz2byb21c.png?win007=sell"
                            alt=""
                          />
                        </div>
                        <div class="bg-zinc-200 rounded-md px-2 py-1">
                          Bashundhara Kings
                        </div>
                      </div>
                      <div class="flex justify-start gap-x-3 items-center">
                        <div class="w-[25px] h-[25px]">
                          <img
                            class="w-[25px] h-[25px] object-cover"
                            src="http://zq.titan007.com/Image/team/images/28597/1gr5yygtp31c.png?win007=sell"
                            alt=""
                          />
                        </div>
                        <div class="bg-transparent rounded-md px-2 py-1">
                          Rahmatganj MFS
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-between items-center w-1/2">
                      <div class="text-center w-1/2">
                        <div>3</div>
                        <div>2</div>
                      </div>
                      <div class="text-white font-bold w-1/8"></div>
                    </div>
                  </div>
                  <div
                    class="flex justify-between items-center my-1 border-b border-gay-300 pb-1 font-semibold text-sm w-full"
                  >
                    <div class="w-1/6">26-06-2021</div>
                    <div class="flex justify-start w-1/6 items-center">
                      <div class="flex justify-start items-center gap-2">
                        <div class="">BGD D1</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-start flex-col items-start gap-2 w-2/5"
                    >
                      <div class="flex justify-start gap-x-3 items-center">
                        <div class="w-[25px] h-[25px]">
                          <img
                            class="w-[25px] h-[25px] object-cover"
                            src="http://zq.titan007.com/Image/team/images/34436/1gryz2byb21c.png?win007=sell"
                            alt=""
                          />
                        </div>
                        <div class="bg-zinc-200 rounded-md px-2 py-1">
                          Bashundhara Kings
                        </div>
                      </div>
                      <div class="flex justify-start gap-x-3 items-center">
                        <div class="w-[25px] h-[25px]">
                          <img
                            class="w-[25px] h-[25px] object-cover"
                            src="http://zq.titan007.com/Image/team/images/28597/1gr5yygtp31c.png?win007=sell"
                            alt=""
                          />
                        </div>
                        <div class="bg-transparent rounded-md px-2 py-1">
                          Rahmatganj MFS
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-between items-center w-1/2">
                      <div class="text-center w-1/2">
                        <div>2</div>
                        <div>1</div>
                      </div>
                      <div class="text-white font-bold w-1/8"></div>
                    </div>
                  </div>
                  <div
                    class="flex justify-between items-center my-1 border-b border-gay-300 pb-1 font-semibold text-sm w-full"
                  >
                    <div class="w-1/6">27-01-2021</div>
                    <div class="flex justify-start w-1/6 items-center">
                      <div class="flex justify-start items-center gap-2">
                        <div class="">BGD D1</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-start flex-col items-start gap-2 w-2/5"
                    >
                      <div class="flex justify-start gap-x-3 items-center">
                        <div class="w-[25px] h-[25px]">
                          <img
                            class="w-[25px] h-[25px] object-cover"
                            src="http://zq.titan007.com/Image/team/images/28597/1gr5yygtp31c.png?win007=sell"
                            alt=""
                          />
                        </div>
                        <div class="bg-zinc-200 rounded-md px-2 py-1">
                          Rahmatganj MFS
                        </div>
                      </div>
                      <div class="flex justify-start gap-x-3 items-center">
                        <div class="w-[25px] h-[25px]">
                          <img
                            class="w-[25px] h-[25px] object-cover"
                            src="http://zq.titan007.com/Image/team/images/34436/1gryz2byb21c.png?win007=sell"
                            alt=""
                          />
                        </div>
                        <div class="bg-transparent rounded-md px-2 py-1">
                          Bashundhara Kings
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-between items-center w-1/2">
                      <div class="text-center w-1/2">
                        <div>0</div>
                        <div>3</div>
                      </div>
                      <div class="text-white font-bold w-1/8"></div>
                    </div>
                  </div>
                  <div
                    class="flex justify-between items-center my-1 border-b border-gay-300 pb-1 font-semibold text-sm w-full"
                  >
                    <div class="w-1/6">22-12-2020</div>
                    <div class="flex justify-start w-1/6 items-center">
                      <div class="flex justify-start items-center gap-2">
                        <div class="">BDFC</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-start flex-col items-start gap-2 w-2/5"
                    >
                      <div class="flex justify-start gap-x-3 items-center">
                        <div class="w-[25px] h-[25px]">
                          <img
                            class="w-[25px] h-[25px] object-cover"
                            src="http://zq.titan007.com/Image/team/images/34436/1gryz2byb21c.png?win007=sell"
                            alt=""
                          />
                        </div>
                        <div class="bg-zinc-200 rounded-md px-2 py-1">
                          Bashundhara Kings
                        </div>
                      </div>
                      <div class="flex justify-start gap-x-3 items-center">
                        <div class="w-[25px] h-[25px]">
                          <img
                            class="w-[25px] h-[25px] object-cover"
                            src="http://zq.titan007.com/Image/team/images/28597/1gr5yygtp31c.png?win007=sell"
                            alt=""
                          />
                        </div>
                        <div class="bg-transparent rounded-md px-2 py-1">
                          Rahmatganj MFS
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-between items-center w-1/2">
                      <div class="text-center w-1/2">
                        <div>3</div>
                        <div>0</div>
                      </div>
                      <div class="text-white font-bold w-1/8"></div>
                    </div>
                  </div>
                  <div
                    class="flex justify-between items-center my-1 border-b border-gay-300 pb-1 font-semibold text-sm w-full"
                  >
                    <div class="w-1/6">04-03-2020</div>
                    <div class="flex justify-start w-1/6 items-center">
                      <div class="flex justify-start items-center gap-2">
                        <div class="">BGD D1</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-start flex-col items-start gap-2 w-2/5"
                    >
                      <div class="flex justify-start gap-x-3 items-center">
                        <div class="w-[25px] h-[25px]">
                          <img
                            class="w-[25px] h-[25px] object-cover"
                            src="http://zq.titan007.com/Image/team/images/28597/1gr5yygtp31c.png?win007=sell"
                            alt=""
                          />
                        </div>
                        <div class="bg-zinc-200 rounded-md px-2 py-1">
                          Rahmatganj MFS
                        </div>
                      </div>
                      <div class="flex justify-start gap-x-3 items-center">
                        <div class="w-[25px] h-[25px]">
                          <img
                            class="w-[25px] h-[25px] object-cover"
                            src="http://zq.titan007.com/Image/team/images/34436/1gryz2byb21c.png?win007=sell"
                            alt=""
                          />
                        </div>
                        <div class="bg-transparent rounded-md px-2 py-1">
                          Bashundhara Kings
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-between items-center w-1/2">
                      <div class="text-center w-1/2">
                        <div>1</div>
                        <div>2</div>
                      </div>
                      <div class="text-white font-bold w-1/8"></div>
                    </div>
                  </div>
                  <div
                    class="flex justify-between items-center my-1 border-b border-gay-300 pb-1 font-semibold text-sm w-full"
                  >
                    <div class="w-1/6">05-01-2020</div>
                    <div class="flex justify-start w-1/6 items-center">
                      <div class="flex justify-start items-center gap-2">
                        <div class="">BDFC</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-start flex-col items-start gap-2 w-2/5"
                    >
                      <div class="flex justify-start gap-x-3 items-center">
                        <div class="w-[25px] h-[25px]">
                          <img
                            class="w-[25px] h-[25px] object-cover"
                            src="http://zq.titan007.com/Image/team/images/28597/1gr5yygtp31c.png?win007=sell"
                            alt=""
                          />
                        </div>
                        <div class="bg-zinc-200 rounded-md px-2 py-1">
                          Rahmatganj MFS
                        </div>
                      </div>
                      <div class="flex justify-start gap-x-3 items-center">
                        <div class="w-[25px] h-[25px]">
                          <img
                            class="w-[25px] h-[25px] object-cover"
                            src="http://zq.titan007.com/Image/team/images/34436/1gryz2byb21c.png?win007=sell"
                            alt=""
                          />
                        </div>
                        <div class="bg-transparent rounded-md px-2 py-1">
                          Bashundhara Kings
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-between items-center w-1/2">
                      <div class="text-center w-1/2">
                        <div>1</div>
                        <div>2</div>
                      </div>
                      <div class="text-white font-bold w-1/8"></div>
                    </div>
                  </div>
                  <div
                    class="flex justify-between items-center my-1 border-b border-gay-300 pb-1 font-semibold text-sm w-full"
                  >
                    <div class="w-1/6">03-07-2019</div>
                    <div class="flex justify-start w-1/6 items-center">
                      <div class="flex justify-start items-center gap-2">
                        <div class="">BGD D1</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-start flex-col items-start gap-2 w-2/5"
                    >
                      <div class="flex justify-start gap-x-3 items-center">
                        <div class="w-[25px] h-[25px]">
                          <img
                            class="w-[25px] h-[25px] object-cover"
                            src="http://zq.titan007.com/Image/team/images/28597/1gr5yygtp31c.png?win007=sell"
                            alt=""
                          />
                        </div>
                        <div class="bg-zinc-200 rounded-md px-2 py-1">
                          Rahmatganj MFS
                        </div>
                      </div>
                      <div class="flex justify-start gap-x-3 items-center">
                        <div class="w-[25px] h-[25px]">
                          <img
                            class="w-[25px] h-[25px] object-cover"
                            src="http://zq.titan007.com/Image/team/images/34436/1gryz2byb21c.png?win007=sell"
                            alt=""
                          />
                        </div>
                        <div class="bg-transparent rounded-md px-2 py-1">
                          Bashundhara Kings
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-between items-center w-1/2">
                      <div class="text-center w-1/2">
                        <div>2</div>
                        <div>3</div>
                      </div>
                      <div class="text-white font-bold w-1/8"></div>
                    </div>
                  </div>
                  <div
                    class="flex justify-between items-center my-1 border-b border-gay-300 pb-1 font-semibold text-sm w-full"
                  >
                    <div class="w-1/6">14-02-2019</div>
                    <div class="flex justify-start w-1/6 items-center">
                      <div class="flex justify-start items-center gap-2">
                        <div class="">BGD D1</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-start flex-col items-start gap-2 w-2/5"
                    >
                      <div class="flex justify-start gap-x-3 items-center">
                        <div class="w-[25px] h-[25px]">
                          <img
                            class="w-[25px] h-[25px] object-cover"
                            src="http://zq.titan007.com/Image/team/images/34436/1gryz2byb21c.png?win007=sell"
                            alt=""
                          />
                        </div>
                        <div class="bg-zinc-200 rounded-md px-2 py-1">
                          Bashundhara Kings
                        </div>
                      </div>
                      <div class="flex justify-start gap-x-3 items-center">
                        <div class="w-[25px] h-[25px]">
                          <img
                            class="w-[25px] h-[25px] object-cover"
                            src="http://zq.titan007.com/Image/team/images/28597/1gr5yygtp31c.png?win007=sell"
                            alt=""
                          />
                        </div>
                        <div class="bg-transparent rounded-md px-2 py-1">
                          Rahmatganj MFS
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-between items-center w-1/2">
                      <div class="text-center w-1/2">
                        <div>1</div>
                        <div>0</div>
                      </div>
                      <div class="text-white font-bold w-1/8"></div>
                    </div>
                  </div>
                  <div
                    class="flex justify-between items-center my-1 border-b border-gay-300 pb-1 font-semibold text-sm w-full"
                  >
                    <div class="w-1/6">14-12-2018</div>
                    <div class="flex justify-start w-1/6 items-center">
                      <div class="flex justify-start items-center gap-2">
                        <div class="">BDIC</div>
                      </div>
                    </div>
                    <div
                      class="flex justify-start flex-col items-start gap-2 w-2/5"
                    >
                      <div class="flex justify-start gap-x-3 items-center">
                        <div class="w-[25px] h-[25px]">
                          <img
                            class="w-[25px] h-[25px] object-cover"
                            src="http://zq.titan007.com/Image/team/images/34436/1gryz2byb21c.png?win007=sell"
                            alt=""
                          />
                        </div>
                        <div class="bg-zinc-200 rounded-md px-2 py-1">
                          Bashundhara Kings
                        </div>
                      </div>
                      <div class="flex justify-start gap-x-3 items-center">
                        <div class="w-[25px] h-[25px]">
                          <img
                            class="w-[25px] h-[25px] object-cover"
                            src="http://zq.titan007.com/Image/team/images/28597/1gr5yygtp31c.png?win007=sell"
                            alt=""
                          />
                        </div>
                        <div class="bg-transparent rounded-md px-2 py-1">
                          Rahmatganj MFS
                        </div>
                      </div>
                    </div>
                    <div class="flex justify-between items-center w-1/2">
                      <div class="text-center w-1/2">
                        <div>2</div>
                        <div>2</div>
                      </div>
                      <div class="text-white font-bold w-1/8"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<!--End Mo phong tran dau -->

<!-- Du lieu tran dau -->
      <div class="w-1/4 rounded">
        <div class="w-full h-full">
          <div
            class="w-full rounded p-2 bg-neutral-200 items-center justify-center hidden lg:flex"
          >
            <p class="font-bold text-center text-xl">DỮ LIỆU TRẬN ĐẤU</p>
          </div>
          <div
            class="w-full h-full mt-0 bg-neutral-200 border-b border-neutral-300 lg:rounded xl:mt-2"
          >
            <ul
              class="w-full flex items-center sticky top-0 z-10 bg-neutral-200 py-2"
            >
              <li class="w-2/5 font-bold text-xs uppercase p-1 truncate">
                Bashundhara Kings
              </li>
              <li class="w-1/5 font-bold text-md uppercase text-center">
                0 - 1
              </li>
              <li
                class="w-2/5 font-bold text-xs uppercase p-1 text-right truncate"
              >
                Rahmatganj MFS
              </li>
            </ul>
            <div
              class="bg-white scrollbarCustom overflow-y-scroll h-[635px] relative border-inherit scroll-smooth"
            >
              <div class="w-full">
                <div
                  class="w-full grid grid-cols-12 bg-white p-2 text-xs font-semibold lg:text-sm"
                >
                  <div class="col-span-2 text-center pb-2">1</div>
                  <div class="col-span-8 text-center pb-2">Số lần dứt điểm</div>
                  <div class="col-span-2 text-center pb-2">1</div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 relative w-full rounded-s"
                  >
                    <span
                      class="stat-bar fr h-2 bg-black absolute rounded-s right-0"
                      style="width: 50%"
                    ></span>
                  </div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 rounded-e relative w-full"
                  >
                    <span
                      class="stat-bar fr h-2 bg-red-500 absolute rounded-e left-0"
                      style="width: 50%"
                    ></span>
                  </div>
                </div>
              </div>
              <div class="w-full">
                <div
                  class="w-full grid grid-cols-12 bg-white p-2 text-xs font-semibold lg:text-sm"
                >
                  <div class="col-span-2 text-center pb-2">0</div>
                  <div class="col-span-8 text-center pb-2">Sút trúng đích</div>
                  <div class="col-span-2 text-center pb-2">1</div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 relative w-full rounded-s"
                  >
                    <span
                      class="stat-bar fr h-2 bg-black absolute rounded-s right-0"
                      style="width: 0px"
                    ></span>
                  </div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 rounded-e relative w-full"
                  >
                    <span
                      class="stat-bar fr h-2 bg-red-500 absolute rounded-e left-0"
                      style="width: 100%"
                    ></span>
                  </div>
                </div>
              </div>
              <div class="w-full">
                <div
                  class="w-full grid grid-cols-12 bg-white p-2 text-xs font-semibold lg:text-sm"
                >
                  <div class="col-span-2 text-center pb-2">2</div>
                  <div class="col-span-8 text-center pb-2">Phạt góc</div>
                  <div class="col-span-2 text-center pb-2">0</div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 relative w-full rounded-s"
                  >
                    <span
                      class="stat-bar fr h-2 bg-black absolute rounded-s right-0"
                      style="width: 100%"
                    ></span>
                  </div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 rounded-e relative w-full"
                  >
                    <span
                      class="stat-bar fr h-2 bg-red-500 absolute rounded-e left-0"
                      style="width: 0px"
                    ></span>
                  </div>
                </div>
              </div>
              <div class="w-full">
                <div
                  class="w-full grid grid-cols-12 bg-white p-2 text-xs font-semibold lg:text-sm"
                >
                  <div class="col-span-2 text-center pb-2">63%</div>
                  <div class="col-span-8 text-center pb-2">Kiểm soát bóng</div>
                  <div class="col-span-2 text-center pb-2">37%</div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 relative w-full rounded-s"
                  >
                    <span
                      class="stat-bar fr h-2 bg-black absolute rounded-s right-0"
                      style="width: 63%"
                    ></span>
                  </div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 rounded-e relative w-full"
                  >
                    <span
                      class="stat-bar fr h-2 bg-red-500 absolute rounded-e left-0"
                      style="width: 37%"
                    ></span>
                  </div>
                </div>
              </div>
              <div class="w-full">
                <div
                  class="w-full grid grid-cols-12 bg-white p-2 text-xs font-semibold lg:text-sm"
                >
                  <div class="col-span-2 text-center pb-2">33</div>
                  <div class="col-span-8 text-center pb-2">Tấn công</div>
                  <div class="col-span-2 text-center pb-2">18</div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 relative w-full rounded-s"
                  >
                    <span
                      class="stat-bar fr h-2 bg-black absolute rounded-s right-0"
                      style="width: 64.7059%"
                    ></span>
                  </div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 rounded-e relative w-full"
                  >
                    <span
                      class="stat-bar fr h-2 bg-red-500 absolute rounded-e left-0"
                      style="width: 35.2941%"
                    ></span>
                  </div>
                </div>
              </div>
              <div class="w-full">
                <div
                  class="w-full grid grid-cols-12 bg-white p-2 text-xs font-semibold lg:text-sm"
                >
                  <div class="col-span-2 text-center pb-2">31</div>
                  <div class="col-span-8 text-center pb-2">
                    Tấn công nguy hiểm
                  </div>
                  <div class="col-span-2 text-center pb-2">10</div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 relative w-full rounded-s"
                  >
                    <span
                      class="stat-bar fr h-2 bg-black absolute rounded-s right-0"
                      style="width: 75.6098%"
                    ></span>
                  </div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 rounded-e relative w-full"
                  >
                    <span
                      class="stat-bar fr h-2 bg-red-500 absolute rounded-e left-0"
                      style="width: 24.3902%"
                    ></span>
                  </div>
                </div>
              </div>
              <div class="w-full">
                <div
                  class="w-full grid grid-cols-12 bg-white p-2 text-xs font-semibold lg:text-sm"
                >
                  <div class="col-span-2 text-center pb-2">63%</div>
                  <div class="col-span-8 text-center pb-2">
                    Kiểm soát bóng hiệp 1
                  </div>
                  <div class="col-span-2 text-center pb-2">37%</div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 relative w-full rounded-s"
                  >
                    <span
                      class="stat-bar fr h-2 bg-black absolute rounded-s right-0"
                      style="width: 63%"
                    ></span>
                  </div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 rounded-e relative w-full"
                  >
                    <span
                      class="stat-bar fr h-2 bg-red-500 absolute rounded-e left-0"
                      style="width: 37%"
                    ></span>
                  </div>
                </div>
              </div>
              <div class="w-full">
                <div
                  class="w-full grid grid-cols-12 bg-white p-2 text-xs font-semibold lg:text-sm"
                >
                  <div class="col-span-2 text-center pb-2">0</div>
                  <div class="col-span-8 text-center pb-2">Thẻ đỏ</div>
                  <div class="col-span-2 text-center pb-2">0</div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 relative w-full rounded-s"
                  >
                    <span
                      class="stat-bar fr h-2 bg-black absolute rounded-s right-0"
                      style="width: 0px"
                    ></span>
                  </div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 rounded-e relative w-full"
                  >
                    <span
                      class="stat-bar fr h-2 bg-red-500 absolute rounded-e left-0"
                      style="width: 0px"
                    ></span>
                  </div>
                </div>
              </div>
              <div class="w-full">
                <div
                  class="w-full grid grid-cols-12 bg-white p-2 text-xs font-semibold lg:text-sm"
                >
                  <div class="col-span-2 text-center pb-2">0</div>
                  <div class="col-span-8 text-center pb-2">Việt vị</div>
                  <div class="col-span-2 text-center pb-2">0</div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 relative w-full rounded-s"
                  >
                    <span
                      class="stat-bar fr h-2 bg-black absolute rounded-s right-0"
                      style="width: 0px"
                    ></span>
                  </div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 rounded-e relative w-full"
                  >
                    <span
                      class="stat-bar fr h-2 bg-red-500 absolute rounded-e left-0"
                      style="width: 0px"
                    ></span>
                  </div>
                </div>
              </div>
              <div class="w-full">
                <div
                  class="w-full grid grid-cols-12 bg-white p-2 text-xs font-semibold lg:text-sm"
                >
                  <div class="col-span-2 text-center pb-2">0</div>
                  <div class="col-span-8 text-center pb-2">
                    Thủ môn Cứu thua
                  </div>
                  <div class="col-span-2 text-center pb-2">0</div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 relative w-full rounded-s"
                  >
                    <span
                      class="stat-bar fr h-2 bg-black absolute rounded-s right-0"
                      style="width: 0px"
                    ></span>
                  </div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 rounded-e relative w-full"
                  >
                    <span
                      class="stat-bar fr h-2 bg-red-500 absolute rounded-e left-0"
                      style="width: 0px"
                    ></span>
                  </div>
                </div>
              </div>
              <div class="w-full">
                <div
                  class="w-full grid grid-cols-12 bg-white p-2 text-xs font-semibold lg:text-sm"
                >
                  <div class="col-span-2 text-center pb-2">0</div>
                  <div class="col-span-8 text-center pb-2">Phạm lỗi</div>
                  <div class="col-span-2 text-center pb-2">0</div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 relative w-full rounded-s"
                  >
                    <span
                      class="stat-bar fr h-2 bg-black absolute rounded-s right-0"
                      style="width: 0px"
                    ></span>
                  </div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 rounded-e relative w-full"
                  >
                    <span
                      class="stat-bar fr h-2 bg-red-500 absolute rounded-e left-0"
                      style="width: 0px"
                    ></span>
                  </div>
                </div>
              </div>
              <div class="w-full">
                <div
                  class="w-full grid grid-cols-12 bg-white p-2 text-xs font-semibold lg:text-sm"
                >
                  <div class="col-span-2 text-center pb-2">0</div>
                  <div class="col-span-8 text-center pb-2">Thẻ Vàng</div>
                  <div class="col-span-2 text-center pb-2">0</div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 relative w-full rounded-s"
                  >
                    <span
                      class="stat-bar fr h-2 bg-black absolute rounded-s right-0"
                      style="width: 0px"
                    ></span>
                  </div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 rounded-e relative w-full"
                  >
                    <span
                      class="stat-bar fr h-2 bg-red-500 absolute rounded-e left-0"
                      style="width: 0px"
                    ></span>
                  </div>
                </div>
              </div>
              <div class="w-full">
                <div
                  class="w-full grid grid-cols-12 bg-white p-2 text-xs font-semibold lg:text-sm"
                >
                  <div class="col-span-2 text-center pb-2">0</div>
                  <div class="col-span-8 text-center pb-2">
                    Tổng số đường chuyền
                  </div>
                  <div class="col-span-2 text-center pb-2">0</div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 relative w-full rounded-s"
                  >
                    <span
                      class="stat-bar fr h-2 bg-black absolute rounded-s right-0"
                      style="width: 0px"
                    ></span>
                  </div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 rounded-e relative w-full"
                  >
                    <span
                      class="stat-bar fr h-2 bg-red-500 absolute rounded-e left-0"
                      style="width: 0px"
                    ></span>
                  </div>
                </div>
              </div>
              <div class="w-full">
                <div
                  class="w-full grid grid-cols-12 bg-white p-2 text-xs font-semibold lg:text-sm"
                >
                  <div class="col-span-2 text-center pb-2">0</div>
                  <div class="col-span-8 text-center pb-2">
                    Dứt điểm ra ngoài
                  </div>
                  <div class="col-span-2 text-center pb-2">0</div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 relative w-full rounded-s"
                  >
                    <span
                      class="stat-bar fr h-2 bg-black absolute rounded-s right-0"
                      style="width: 0px"
                    ></span>
                  </div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 rounded-e relative w-full"
                  >
                    <span
                      class="stat-bar fr h-2 bg-red-500 absolute rounded-e left-0"
                      style="width: 0px"
                    ></span>
                  </div>
                </div>
              </div>
              <div class="w-full">
                <div
                  class="w-full grid grid-cols-12 bg-white p-2 text-xs font-semibold lg:text-sm"
                >
                  <div class="col-span-2 text-center pb-2">0</div>
                  <div class="col-span-8 text-center pb-2">Sút bị chặn</div>
                  <div class="col-span-2 text-center pb-2">0</div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 relative w-full rounded-s"
                  >
                    <span
                      class="stat-bar fr h-2 bg-black absolute rounded-s right-0"
                      style="width: 0px"
                    ></span>
                  </div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 rounded-e relative w-full"
                  >
                    <span
                      class="stat-bar fr h-2 bg-red-500 absolute rounded-e left-0"
                      style="width: 0px"
                    ></span>
                  </div>
                </div>
              </div>
              <div class="w-full">
                <div
                  class="w-full grid grid-cols-12 bg-white p-2 text-xs font-semibold lg:text-sm"
                >
                  <div class="col-span-2 text-center pb-2">0</div>
                  <div class="col-span-8 text-center pb-2">Đá phạt</div>
                  <div class="col-span-2 text-center pb-2">0</div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 relative w-full rounded-s"
                  >
                    <span
                      class="stat-bar fr h-2 bg-black absolute rounded-s right-0"
                      style="width: 0px"
                    ></span>
                  </div>
                  <div
                    class="col-span-6 text-center h-2 bg-gray-200 rounded-e relative w-full"
                  >
                    <span
                      class="stat-bar fr h-2 bg-red-500 absolute rounded-e left-0"
                      style="width: 0px"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
<!--End Du lieu tran dau -->

    </div>

    <div class="container mx-auto w-full flex gap-2 flex-col mt-2 lg:mt-7">
      <h3 class="text-primary text-left font-bold text-sm xl:text-lg">
        LỊCH TRÌNH BÌNH LUẬN VIÊN - BLV TRƯƠNG THANH MS: 01
      </h3>
      <div class="w-full h-full">
        <div class="relative w-full h-full md:py-2">
          <div
            class="swiper swiper-blv swiper-initialized swiper-horizontal !static mx-auto false swiper-backface-hidden"
          >
            <div
              class="swiper-wrapper"
              id="swiper-wrapper-2f71739d82cfa135"
              aria-live="off"
            >
              <div
                class="swiper-slide py-2 h-full swiper-slide-active"
                style="width: 502px; margin-right: 20px"
                role="group"
                aria-label="1 / 2"
              >
                <a
                  class="block z-10 w-full h-full border border-primary rounded-lg bg-gray-900 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                  href="/room/282290528"
                  ><div
                    class="flex items-center justify-between py-1 px-2 border-b border-primary w-full h-1/5"
                  >
                    <p
                      class="truncate text-primary font-bold text-xs md:text-sm xl:text-base"
                    >
                      BGD D1
                    </p>
                    <p
                      class="truncate text-white font-bold text-xs md:text-sm xl:text-base"
                    >
                      BLV TRƯƠNG THANH MS: 01
                    </p>
                  </div>
                  <div
                    class="flex items-center justify-center text-primary py-2 px-1 md:py-4 md:px-2 w-full h-3/5"
                  >
                    <div
                      class="flex flex-col items-center justify-center w-1/3"
                    >
                      <div class="flex items-center w-8 h-8 md:w-14 md:h-14">
                        <img
                          class="object-contain rounded-full w-full h-full bg-white"
                          src="https://img.553328.com/Image/team/images/34436/1gryz2byb21c.png?win007=sell"
                          alt=""
                        />
                      </div>
                      <p
                        class="text-white text-xs text-center truncate w-full mt-1"
                      >
                        Bashundhara Kings
                      </p>
                    </div>
                    <div
                      class="flex flex-col items-center justify-center w-1/3"
                    >
                      <div
                        class="flex flex-col items-center justify-center text-xs gap-1 md:flex-row xl:text-base"
                      >
                        <span class="text-white whitespace-nowrap">19:15</span
                        ><span class="text-white whitespace-nowrap">16/02</span>
                      </div>
                      <p class="font-bold">VS</p>
                    </div>
                    <div
                      class="flex flex-col items-center justify-center w-1/3"
                    >
                      <div class="flex items-center w-8 h-8 md:w-14 md:h-14">
                        <img
                          class="object-contain rounded-full w-full h-full bg-white"
                          src="https://img.553328.com/Image/team/images/28597/1gr5yygtp31c.png?win007=sell"
                          alt=""
                        />
                      </div>
                      <p
                        class="text-white text-xs text-center truncate w-full mt-1"
                      >
                        Rahmatganj MFS
                      </p>
                    </div>
                  </div>
                  <div
                    class="bg-neutral-900 flex items-center rounded-b-lg justify-between border-t border-primary w-full h-1/5"
                  >
                    <div
                      class="flex items-center justify-center gap-2 h-full w-full py-1"
                    >
                      <span class="relative flex h-3 w-3"
                        ><span
                          class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                        ></span
                        ><span
                          class="relative inline-flex rounded-full h-3 w-3 bg-green-500"
                        ></span
                      ></span>
                      <p
                        class="text-white uppercase text-center text-xs xl:text-sm"
                      >
                        Đang live
                      </p>
                    </div>
                  </div></a
                >
              </div>
              <div
                class="swiper-slide py-2 h-full swiper-slide-next"
                role="group"
                aria-label="2 / 2"
                style="width: 502px; margin-right: 20px"
              >
                <a
                  class="block z-10 w-full h-full border border-primary rounded-lg bg-gray-900 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
                  href="/room/364880422"
                  ><div
                    class="flex items-center justify-between py-1 px-2 border-b border-primary w-full h-1/5"
                  >
                    <p
                      class="truncate text-primary font-bold text-xs md:text-sm xl:text-base"
                    >
                      ROM D1
                    </p>
                    <p
                      class="truncate text-white font-bold text-xs md:text-sm xl:text-base"
                    >
                      BLV TRƯƠNG THANH MS: 01
                    </p>
                  </div>
                  <div
                    class="flex items-center justify-center text-primary py-2 px-1 md:py-4 md:px-2 w-full h-3/5"
                  >
                    <div
                      class="flex flex-col items-center justify-center w-1/3"
                    >
                      <div class="flex items-center w-8 h-8 md:w-14 md:h-14">
                        <img
                          class="object-contain rounded-full w-full h-full bg-white"
                          src="https://img.553328.com/Image/team/images/3071/1h5e484h441x.png?win007=sell"
                          alt=""
                        />
                      </div>
                      <p
                        class="text-white text-xs text-center truncate w-full mt-1"
                      >
                        Petrolul Ploiesti
                      </p>
                    </div>
                    <div
                      class="flex flex-col items-center justify-center w-1/3"
                    >
                      <div
                        class="flex flex-col items-center justify-center text-xs gap-1 md:flex-row xl:text-base"
                      >
                        <span class="text-white whitespace-nowrap">23:00</span
                        ><span class="text-white whitespace-nowrap">16/02</span>
                      </div>
                      <p class="font-bold">VS</p>
                    </div>
                    <div
                      class="flex flex-col items-center justify-center w-1/3"
                    >
                      <div class="flex items-center w-8 h-8 md:w-14 md:h-14">
                        <img
                          class="object-contain rounded-full w-full h-full bg-white"
                          src="https://img.553328.com/Image/team/images/1103/1h5bjev11c1f.png?win007=sell"
                          alt=""
                        />
                      </div>
                      <p
                        class="text-white text-xs text-center truncate w-full mt-1"
                      >
                        CSM Politehnica Iasi
                      </p>
                    </div>
                  </div>
                  <div
                    class="bg-neutral-900 flex items-center rounded-b-lg justify-between border-t border-primary w-full h-1/5"
                  >
                    <div
                      class="flex items-center justify-center gap-2 h-full w-full py-1"
                    >
                      <span
                        class="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"
                      ></span>
                      <p
                        class="text-white uppercase text-center text-xs xl:text-sm"
                      >
                        Sắp diễn ra
                      </p>
                    </div>
                  </div></a
                >
              </div>
            </div>
            <div
              class="swiper-button-prev swiper-button-disabled swiper-button-lock"
              tabindex="-1"
              role="button"
              aria-label="Previous slide"
              aria-controls="swiper-wrapper-2f71739d82cfa135"
              aria-disabled="true"
            ></div>
            <div
              class="swiper-button-next swiper-button-disabled swiper-button-lock"
              tabindex="-1"
              role="button"
              aria-label="Next slide"
              aria-controls="swiper-wrapper-2f71739d82cfa135"
              aria-disabled="true"
            ></div>
            <span
              class="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            ></span>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-7 container mx-auto w-full flex flex-col">
      <h3 class="text-primary text-left font-bold text-sm xl:text-lg">
        ĐỀ XUẤT VIDEO
      </h3>
      <div
        class="container px-2 mx-auto w-full grid grid-cols-2 gap-2 sm:grid-cols-2 lg:mt-6 lg:gap-x-10 lg:gap-y-8 lg:grid-cols-3 xl:grid-cols-4 xl:px-0"
      >
        <a
          class="block z-10 w-full h-full border border-primary rounded-lg bg-gray-900 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
          href="/room/282290528"
          ><div
            class="flex items-center justify-between py-1 px-2 border-b border-primary w-full h-1/5"
          >
            <p
              class="truncate text-primary font-bold text-xs md:text-sm xl:text-base"
            >
              BGD D1
            </p>
            <p
              class="truncate text-white font-bold text-xs md:text-sm xl:text-base"
            >
              BLV TRƯƠNG THANH MS: 01
            </p>
          </div>
          <div
            class="flex items-center justify-center text-primary py-2 px-1 md:py-4 md:px-2 w-full h-3/5"
          >
            <div class="flex flex-col items-center justify-center w-1/3">
              <div class="flex items-center w-8 h-8 md:w-14 md:h-14">
                <img
                  class="object-contain rounded-full w-full h-full bg-white"
                  src="https://img.553328.com/Image/team/images/34436/1gryz2byb21c.png?win007=sell"
                  alt=""
                />
              </div>
              <p class="text-white text-xs text-center truncate w-full mt-1">
                Bashundhara Kings
              </p>
            </div>
            <div class="flex flex-col items-center justify-center w-1/3">
              <div
                class="flex flex-col items-center justify-center text-xs gap-1 md:flex-row xl:text-base"
              >
                <span class="text-white whitespace-nowrap">19:15</span
                ><span class="text-white whitespace-nowrap">16/02</span>
              </div>
              <p class="font-bold">VS</p>
            </div>
            <div class="flex flex-col items-center justify-center w-1/3">
              <div class="flex items-center w-8 h-8 md:w-14 md:h-14">
                <img
                  class="object-contain rounded-full w-full h-full bg-white"
                  src="https://img.553328.com/Image/team/images/28597/1gr5yygtp31c.png?win007=sell"
                  alt=""
                />
              </div>
              <p class="text-white text-xs text-center truncate w-full mt-1">
                Rahmatganj MFS
              </p>
            </div>
          </div>
          <div
            class="bg-neutral-900 flex items-center rounded-b-lg justify-between border-t border-primary w-full h-1/5"
          >
            <div
              class="flex items-center justify-center gap-2 h-full w-full py-1"
            >
              <span class="relative flex h-3 w-3"
                ><span
                  class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"
                ></span
                ><span
                  class="relative inline-flex rounded-full h-3 w-3 bg-green-500"
                ></span
              ></span>
              <p class="text-white uppercase text-center text-xs xl:text-sm">
                Đang live
              </p>
            </div>
          </div></a
        ><a
          class="block z-10 w-full h-full border border-primary rounded-lg bg-gray-900 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
          href="/room/386815424"
          ><div
            class="flex items-center justify-between py-1 px-2 border-b border-primary w-full h-1/5"
          >
            <p
              class="truncate text-primary font-bold text-xs md:text-sm xl:text-base"
            >
              THA L2
            </p>
            <p
              class="truncate text-white font-bold text-xs md:text-sm xl:text-base"
            >
              BLV LƯ TUẤN NGHĨA MS: 17
            </p>
          </div>
          <div
            class="flex items-center justify-center text-primary py-2 px-1 md:py-4 md:px-2 w-full h-3/5"
          >
            <div class="flex flex-col items-center justify-center w-1/3">
              <div class="flex items-center w-8 h-8 md:w-14 md:h-14">
                <img
                  class="object-contain rounded-full w-full h-full bg-white"
                  src="https://img.553328.com/Image/team/images/20190706095048.jpg?win007=sell"
                  alt=""
                />
              </div>
              <p class="text-white text-xs text-center truncate w-full mt-1">
                Samut Prakan City
              </p>
            </div>
            <div class="flex flex-col items-center justify-center w-1/3">
              <div
                class="flex flex-col items-center justify-center text-xs gap-1 md:flex-row xl:text-base"
              >
                <span class="text-white whitespace-nowrap">20:00</span
                ><span class="text-white whitespace-nowrap">16/02</span>
              </div>
              <p class="font-bold">VS</p>
            </div>
            <div class="flex flex-col items-center justify-center w-1/3">
              <div class="flex items-center w-8 h-8 md:w-14 md:h-14">
                <img
                  class="object-contain rounded-full w-full h-full bg-white"
                  src="https://img.553328.com/Image/team/images/50214/1gskkg1pgh18.png?win007=sell"
                  alt=""
                />
              </div>
              <p class="text-white text-xs text-center truncate w-full mt-1">
                Singha GB Kanchanaburi
              </p>
            </div>
          </div>
          <div
            class="bg-neutral-900 flex items-center rounded-b-lg justify-between border-t border-primary w-full h-1/5"
          >
            <div
              class="flex items-center justify-center gap-2 h-full w-full py-1"
            >
              <span
                class="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"
              ></span>
              <p class="text-white uppercase text-center text-xs xl:text-sm">
                Sắp diễn ra
              </p>
            </div>
          </div></a
        ><a
          class="block z-10 w-full h-full border border-primary rounded-lg bg-gray-900 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
          href="/room/35a6a44a-a1fb-4a23-977c-c9e0b1d08b61"
          ><div
            class="flex items-center justify-between py-1 px-2 border-b border-primary w-full h-1/5"
          >
            <p
              class="truncate text-primary font-bold text-xs md:text-sm xl:text-base"
            >
              THA L2
            </p>
            <p
              class="truncate text-white font-bold text-xs md:text-sm xl:text-base"
            >
              BLV DƯƠNG QUÁ MS: 28
            </p>
          </div>
          <div
            class="flex items-center justify-center text-primary py-2 px-1 md:py-4 md:px-2 w-full h-3/5"
          >
            <div class="flex flex-col items-center justify-center w-1/3">
              <div class="flex items-center w-8 h-8 md:w-14 md:h-14">
                <img
                  class="object-contain rounded-full w-full h-full bg-white"
                  src="https://img.553328.com/Image/team/images/20190706095048.jpg?win007=sell"
                  alt=""
                />
              </div>
              <p class="text-white text-xs text-center truncate w-full mt-1">
                Samut Prakan City
              </p>
            </div>
            <div class="flex flex-col items-center justify-center w-1/3">
              <div
                class="flex flex-col items-center justify-center text-xs gap-1 md:flex-row xl:text-base"
              >
                <span class="text-white whitespace-nowrap">20:00</span
                ><span class="text-white whitespace-nowrap">16/02</span>
              </div>
              <p class="font-bold">VS</p>
            </div>
            <div class="flex flex-col items-center justify-center w-1/3">
              <div class="flex items-center w-8 h-8 md:w-14 md:h-14">
                <img
                  class="object-contain rounded-full w-full h-full bg-white"
                  src="https://img.553328.com/Image/team/images/50214/1gskkg1pgh18.png?win007=sell"
                  alt=""
                />
              </div>
              <p class="text-white text-xs text-center truncate w-full mt-1">
                Singha GB Kanchanaburi
              </p>
            </div>
          </div>
          <div
            class="bg-neutral-900 flex items-center rounded-b-lg justify-between border-t border-primary w-full h-1/5"
          >
            <div
              class="flex items-center justify-center gap-2 h-full w-full py-1"
            >
              <span
                class="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"
              ></span>
              <p class="text-white uppercase text-center text-xs xl:text-sm">
                Sắp diễn ra
              </p>
            </div>
          </div></a
        ><a
          class="block z-10 w-full h-full border border-primary rounded-lg bg-gray-900 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
          href="/room/226283528"
          ><div
            class="flex items-center justify-between py-1 px-2 border-b border-primary w-full h-1/5"
          >
            <p
              class="truncate text-primary font-bold text-xs md:text-sm xl:text-base"
            >
              BUL D2
            </p>
            <p
              class="truncate text-white font-bold text-xs md:text-sm xl:text-base"
            >
              BLV DOÃN CHÍ BÌNH MS: 38
            </p>
          </div>
          <div
            class="flex items-center justify-center text-primary py-2 px-1 md:py-4 md:px-2 w-full h-3/5"
          >
            <div class="flex flex-col items-center justify-center w-1/3">
              <div class="flex items-center w-8 h-8 md:w-14 md:h-14">
                <img
                  class="object-contain rounded-full w-full h-full bg-white"
                  src="https://img.553328.com/Image/team/images/20130812200826.jpg?win007=sell"
                  alt=""
                />
              </div>
              <p class="text-white text-xs text-center truncate w-full mt-1">
                PFK Montana
              </p>
            </div>
            <div class="flex flex-col items-center justify-center w-1/3">
              <div
                class="flex flex-col items-center justify-center text-xs gap-1 md:flex-row xl:text-base"
              >
                <span class="text-white whitespace-nowrap">20:45</span
                ><span class="text-white whitespace-nowrap">16/02</span>
              </div>
              <p class="font-bold">VS</p>
            </div>
            <div class="flex flex-col items-center justify-center w-1/3">
              <div class="flex items-center w-8 h-8 md:w-14 md:h-14">
                <img
                  class="object-contain rounded-full w-full h-full bg-white"
                  src="https://img.553328.com/Image/team/images/625/1h5bjgg68q2s.png?win007=sell"
                  alt=""
                />
              </div>
              <p class="text-white text-xs text-center truncate w-full mt-1">
                Litex Lovech
              </p>
            </div>
          </div>
          <div
            class="bg-neutral-900 flex items-center rounded-b-lg justify-between border-t border-primary w-full h-1/5"
          >
            <div
              class="flex items-center justify-center gap-2 h-full w-full py-1"
            >
              <span
                class="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"
              ></span>
              <p class="text-white uppercase text-center text-xs xl:text-sm">
                Sắp diễn ra
              </p>
            </div>
          </div></a
        ><a
          class="block z-10 w-full h-full border border-primary rounded-lg bg-gray-900 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
          href="/room/357673525"
          ><div
            class="flex items-center justify-between py-1 px-2 border-b border-primary w-full h-1/5"
          >
            <p
              class="truncate text-primary font-bold text-xs md:text-sm xl:text-base"
            >
              UAE
            </p>
            <p
              class="truncate text-white font-bold text-xs md:text-sm xl:text-base"
            >
              BLV LÂM XUNG MS: 12
            </p>
          </div>
          <div
            class="flex items-center justify-center text-primary py-2 px-1 md:py-4 md:px-2 w-full h-3/5"
          >
            <div class="flex flex-col items-center justify-center w-1/3">
              <div class="flex items-center w-8 h-8 md:w-14 md:h-14">
                <img
                  class="object-contain rounded-full w-full h-full bg-white"
                  src="https://img.553328.com/Image/team/images/2060/1hd5axqvt71a.png?win007=sell"
                  alt=""
                />
              </div>
              <p class="text-white text-xs text-center truncate w-full mt-1">
                Al-Jazira(UAE)
              </p>
            </div>
            <div class="flex flex-col items-center justify-center w-1/3">
              <div
                class="flex flex-col items-center justify-center text-xs gap-1 md:flex-row xl:text-base"
              >
                <span class="text-white whitespace-nowrap">21:25</span
                ><span class="text-white whitespace-nowrap">16/02</span>
              </div>
              <p class="font-bold">VS</p>
            </div>
            <div class="flex flex-col items-center justify-center w-1/3">
              <div class="flex items-center w-8 h-8 md:w-14 md:h-14">
                <img
                  class="object-contain rounded-full w-full h-full bg-white"
                  src="https://img.553328.com/Image/team/images/9325/1gqbr1a2nv1s.png?win007=sell"
                  alt=""
                />
              </div>
              <p class="text-white text-xs text-center truncate w-full mt-1">
                Al Arabi(UAE)
              </p>
            </div>
          </div>
          <div
            class="bg-neutral-900 flex items-center rounded-b-lg justify-between border-t border-primary w-full h-1/5"
          >
            <div
              class="flex items-center justify-center gap-2 h-full w-full py-1"
            >
              <span
                class="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"
              ></span>
              <p class="text-white uppercase text-center text-xs xl:text-sm">
                Sắp diễn ra
              </p>
            </div>
          </div></a
        ><a
          class="block z-10 w-full h-full border border-primary rounded-lg bg-gray-900 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
          href="/room/a71da13a-bc46-4d2d-b78a-520188c52828"
          ><div
            class="flex items-center justify-between py-1 px-2 border-b border-primary w-full h-1/5"
          >
            <p
              class="truncate text-primary font-bold text-xs md:text-sm xl:text-base"
            >
              UAE
            </p>
            <p
              class="truncate text-white font-bold text-xs md:text-sm xl:text-base"
            >
              BLV TRIỆU TỬ LONG MS: 29
            </p>
          </div>
          <div
            class="flex items-center justify-center text-primary py-2 px-1 md:py-4 md:px-2 w-full h-3/5"
          >
            <div class="flex flex-col items-center justify-center w-1/3">
              <div class="flex items-center w-8 h-8 md:w-14 md:h-14">
                <img
                  class="object-contain rounded-full w-full h-full bg-white"
                  src="https://img.553328.com/Image/team/images/2060/1hd5axqvt71a.png?win007=sell"
                  alt=""
                />
              </div>
              <p class="text-white text-xs text-center truncate w-full mt-1">
                Al-Jazira(UAE)
              </p>
            </div>
            <div class="flex flex-col items-center justify-center w-1/3">
              <div
                class="flex flex-col items-center justify-center text-xs gap-1 md:flex-row xl:text-base"
              >
                <span class="text-white whitespace-nowrap">21:25</span
                ><span class="text-white whitespace-nowrap">16/02</span>
              </div>
              <p class="font-bold">VS</p>
            </div>
            <div class="flex flex-col items-center justify-center w-1/3">
              <div class="flex items-center w-8 h-8 md:w-14 md:h-14">
                <img
                  class="object-contain rounded-full w-full h-full bg-white"
                  src="https://img.553328.com/Image/team/images/9325/1gqbr1a2nv1s.png?win007=sell"
                  alt=""
                />
              </div>
              <p class="text-white text-xs text-center truncate w-full mt-1">
                Al Arabi(UAE)
              </p>
            </div>
          </div>
          <div
            class="bg-neutral-900 flex items-center rounded-b-lg justify-between border-t border-primary w-full h-1/5"
          >
            <div
              class="flex items-center justify-center gap-2 h-full w-full py-1"
            >
              <span
                class="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"
              ></span>
              <p class="text-white uppercase text-center text-xs xl:text-sm">
                Sắp diễn ra
              </p>
            </div>
          </div></a
        ><a
          class="block z-10 w-full h-full border border-primary rounded-lg bg-gray-900 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
          href="/room/ecc37561-35ff-4fbb-bf60-bd48c9696016"
          ><div
            class="flex items-center justify-between py-1 px-2 border-b border-primary w-full h-1/5"
          >
            <p
              class="truncate text-primary font-bold text-xs md:text-sm xl:text-base"
            >
              ISL
            </p>
            <p
              class="truncate text-white font-bold text-xs md:text-sm xl:text-base"
            >
              BLV QUAN THẮNG MS: 03
            </p>
          </div>
          <div
            class="flex items-center justify-center text-primary py-2 px-1 md:py-4 md:px-2 w-full h-3/5"
          >
            <div class="flex flex-col items-center justify-center w-1/3">
              <div class="flex items-center w-8 h-8 md:w-14 md:h-14">
                <img
                  class="object-contain rounded-full w-full h-full bg-white"
                  src="https://img.553328.com/Image/team/images/23930/1gxpyczt45p.png?win007=sell"
                  alt=""
                />
              </div>
              <p class="text-white text-xs text-center truncate w-full mt-1">
                Chennai Titans
              </p>
            </div>
            <div class="flex flex-col items-center justify-center w-1/3">
              <div
                class="flex flex-col items-center justify-center text-xs gap-1 md:flex-row xl:text-base"
              >
                <span class="text-white whitespace-nowrap">22:00</span
                ><span class="text-white whitespace-nowrap">16/02</span>
              </div>
              <p class="font-bold">VS</p>
            </div>
            <div class="flex flex-col items-center justify-center w-1/3">
              <div class="flex items-center w-8 h-8 md:w-14 md:h-14">
                <img
                  class="object-contain rounded-full w-full h-full bg-white"
                  src="https://img.553328.com/Image/team/images/20170808175559.png?win007=sell"
                  alt=""
                />
              </div>
              <p class="text-white text-xs text-center truncate w-full mt-1">
                Kerala Blasters FC
              </p>
            </div>
          </div>
          <div
            class="bg-neutral-900 flex items-center rounded-b-lg justify-between border-t border-primary w-full h-1/5"
          >
            <div
              class="flex items-center justify-center gap-2 h-full w-full py-1"
            >
              <span
                class="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"
              ></span>
              <p class="text-white uppercase text-center text-xs xl:text-sm">
                Sắp diễn ra
              </p>
            </div>
          </div></a
        ><a
          class="block z-10 w-full h-full border border-primary rounded-lg bg-gray-900 cursor-pointer transition-transform duration-300 hover:-translate-y-1"
          href="/room/227052523"
          ><div
            class="flex items-center justify-between py-1 px-2 border-b border-primary w-full h-1/5"
          >
            <p
              class="truncate text-primary font-bold text-xs md:text-sm xl:text-base"
            >
              ISL
            </p>
            <p
              class="truncate text-white font-bold text-xs md:text-sm xl:text-base"
            >
              BLV LONG NHI MS: 39
            </p>
          </div>
          <div
            class="flex items-center justify-center text-primary py-2 px-1 md:py-4 md:px-2 w-full h-3/5"
          >
            <div class="flex flex-col items-center justify-center w-1/3">
              <div class="flex items-center w-8 h-8 md:w-14 md:h-14">
                <img
                  class="object-contain rounded-full w-full h-full bg-white"
                  src="https://img.553328.com/Image/team/images/23930/1gxpyczt45p.png?win007=sell"
                  alt=""
                />
              </div>
              <p class="text-white text-xs text-center truncate w-full mt-1">
                Chennai Titans
              </p>
            </div>
            <div class="flex flex-col items-center justify-center w-1/3">
              <div
                class="flex flex-col items-center justify-center text-xs gap-1 md:flex-row xl:text-base"
              >
                <span class="text-white whitespace-nowrap">22:00</span
                ><span class="text-white whitespace-nowrap">16/02</span>
              </div>
              <p class="font-bold">VS</p>
            </div>
            <div class="flex flex-col items-center justify-center w-1/3">
              <div class="flex items-center w-8 h-8 md:w-14 md:h-14">
                <img
                  class="object-contain rounded-full w-full h-full bg-white"
                  src="https://img.553328.com/Image/team/images/20170808175559.png?win007=sell"
                  alt=""
                />
              </div>
              <p class="text-white text-xs text-center truncate w-full mt-1">
                Kerala Blasters FC
              </p>
            </div>
          </div>
          <div
            class="bg-neutral-900 flex items-center rounded-b-lg justify-between border-t border-primary w-full h-1/5"
          >
            <div
              class="flex items-center justify-center gap-2 h-full w-full py-1"
            >
              <span
                class="relative inline-flex rounded-full h-3 w-3 bg-yellow-400"
              ></span>
              <p class="text-white uppercase text-center text-xs xl:text-sm">
                Sắp diễn ra
              </p>
            </div>
          </div></a
        >
      </div>
      <div class="flex items-center justify-center mt-2 lg:mt-10">
        <button
          class="inline cursor-pointer transition-transform duration-300 hover:-translate-y-1"
        >
          <img
            src="https://luongson18.tv/static/media/seemore.d4a4d0295fd45ed4f817.png"
            alt="Các trận đấu khác kèo vip"
            class="object-contain my-2 h-8 md:h-10 lg:h-12"
          />
        </button>
      </div>
    </div>
  </div>
</template>
