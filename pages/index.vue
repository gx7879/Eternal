<template>
  <div class="px-5 text-white md:-mt-[72px]">
    <!-- class="flex bg-[url(~/assets/images/titlebox_bg_phone.png)] bg-cover px-16 py-3" -->
    <div class="md:mx-auto md:max-w-[1280px]">
      <Title class="mx-auto mb-5 pt-6 md:mb-8 md:pt-0">NFT簡介</Title>
      <p class="text-center md:text-lg">
        2022/12/20 奢華質感的靈骨塔生命園區 - 喜悅帝寶正式完工。
        <span class="md:block"></span>
        持有永續傳承NFT者，可立即使用賦能，兌換成折價券，享有全市場最優惠簽約價！
        <span class="md:block"></span>
        購買喜悅帝寶，將持有土地權狀與建物權狀。
      </p>
      <Separator class="my-8 md:mt-[67px] md:mb-16"></Separator>
      <Title class="mx-auto mb-5 md:mb-6">發行計畫</Title>
      <div class="text-center">
        <div
          class="flex flex-col md:mb-6 md:flex-row md:items-end md:justify-center"
        >
          <span class="text-lg md:mr-5 md:text-2xl">販售時間</span>
          <span class="mb-4 block text-4xl md:mb-0 md:text-7xl">
            2022.10.20 9:00pm
          </span>
        </div>
        <div
          class="md:mb-10 md:flex md:items-center md:justify-center md:text-2xl"
        >
          永續傳承 NFT 黃金版 100件<br />每件 $900 USDT
          <Separator
            class="mx-auto mt-[30px] mb-6 w-16 border-lightblue md:mx-12 md:mt-0 md:mb-0 md:w-0 md:self-stretch md:border-r"
          ></Separator>
          永續傳承 NFT 標準版 100件<br />每件$750 USDT
        </div>
        <span
          class="mt-[30px] mb-3 block text-2xl text-titlered md:mb-5 md:text-4xl"
        >
          首波賦能兌換期
        </span>
        <span class="md:mb-16 md:block md:text-2xl">
          喜悅帝寶靈骨塔優惠專案<span class="block md:hidden"></span> 2022.10.20
          9:00am 至<span class="block md:hidden"></span>
          2023.01.31 9:00am
        </span>
      </div>
      <Separator class="my-8 md:hidden"></Separator>
      <div class="px-1">
        <div
          class="mb-9 border border-primarygray bg-secondaryblack px-8 pt-6 pb-10 text-center md:mb-[72px] md:pt-12 md:pb-16"
        >
          <Title class="mx-auto mb-5 md:mb-8">賦能介紹</Title>
          <p class="mb-6 md:mb-[70px] md:text-lg">
            超強賦能，永世服務！<br />首波賦能：喜悅帝寶靈骨塔優惠折抵
          </p>
          <div class="md:overflow-x-auto">
            <div class="md:flex md:gap-x-40">
              <div class="flex flex-col items-center">
                <div
                  class="mb-3 aspect-square w-full rounded-md bg-[#888] bg-cover md:mb-6 md:w-[360px]"
                  :style="{
                    backgroundImage: `url(https://phoenix.un05.com/${contractSetting.normal_before_redeem_image_url})`,
                  }"
                ></div>
                <p class="flex-1 text-xl">
                  <span class="mb-3.5 block md:mb-4 md:text-[28px]">
                    ▪標準版▪
                  </span>
                  持標準版NFT<br />首波賦能，持有者於喜悅帝寶購買靈骨塔位，可折抵
                  NT $22,500 盡享獨家優惠
                </p>
                <NuxtLink
                  :to="{ name: 'nft-intro-type', params: { type: 'normal' } }"
                  class="mt-5 mb-8 rounded-full border border-lightblue px-[66px] py-3 text-lightblue md:mt-10 md:mb-0 md:px-[60px] md:py-3.5 md:text-xl"
                >
                  ＋ 看更多
                </NuxtLink>
              </div>
              <div class="flex flex-col items-center">
                <div
                  class="mb-3 aspect-square w-full rounded-md bg-[#888] bg-cover md:mb-6 md:w-[360px]"
                  :style="{
                    backgroundImage: `url(https://phoenix.un05.com/${contractSetting.golden_before_redeem_image_url})`,
                  }"
                ></div>
                <p class="flex-1 text-xl">
                  <span class="mb-3.5 block md:mb-4 md:text-[28px]">
                    ▪黃金版▪
                  </span>
                  持黃金版NFT<br />首波賦能，持有者於喜悅帝寶購買靈骨塔位，可折抵
                  NT $27,000 享獨家優惠與代祭拜服務
                </p>
                <NuxtLink
                  :to="{ name: 'nft-intro-type', params: { type: 'golden' } }"
                  class="mt-5 rounded-full border border-lightblue px-[66px] py-3 text-lightblue md:mt-10 md:px-[60px] md:py-3.5 md:text-xl"
                >
                  ＋ 看更多
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="-mx-5 mb-8 flex overflow-x-hidden bg-lightblue px-[13px] text-2xl text-secondaryblack md:mb-14"
    >
      <div
        v-for="(marquee, index) of marquees"
        :key="index"
        class="flex flex-none animate-scroll flex-row pt-3.5 pb-2.5 md:py-3.5"
      >
        {{ marquee + (index % 2 === 1 ? ' ▸' : '') }}
      </div>
    </div>
    <div class="md:mx-auto md:max-w-[1280px]">
      <Title class="mx-auto mb-6 md:mb-10">RoadMap</Title>
      <div class="flex flex-col items-center text-center md:text-xl">
        <span
          class="mb-3 h-12 border border-primarygray md:mb-6 md:h-16"
        ></span>
        <p class="mb-4">
          <span
            class="mb-2 block text-2xl font-black text-titlered md:text-[32px]"
          >
            2022.10.20 - 2023.1.31
          </span>
          永世傳承NFT開始發行, 首次賦能優惠兌換期
        </p>
        <span
          class="mb-3 h-12 border border-primarygray md:mb-6 md:h-16"
        ></span>
        <p class="mb-4">
          <span
            class="mb-2 block text-2xl font-black text-titlered md:text-[32px]"
          >
            2023.3
          </span>
          新服務與賦能上線<br />首波NFT持有者直接成為VIP創始會員
        </p>
        <span
          class="mb-3 h-12 border border-primarygray md:mb-6 md:h-16"
        ></span>
        <p class="mb-4">
          <span
            class="mb-2 block text-2xl font-black text-titlered md:text-[32px]"
          >
            2024.4
          </span>
          永世鏈服務升級，所有NFT持有者將享有<br />【家族時空罐】服務，將先人影音資料上傳永世保存，或購買者預錄影音並指定開啟日期等服務
        </p>
        <span
          class="mb-3 h-12 border border-primarygray md:mb-6 md:h-16"
        ></span>
        <p class="mb-4">
          <span
            class="mb-2 block text-2xl font-black text-titlered md:text-[32px]"
          >
            2024.12
          </span>
          永世鏈服務升級，VIP創始會員將享有<br />【家族元宇宙】之虛擬土地與數位家族祠堂。2025年3月
          永世鏈升級，VIP創始會員將享有【擬真VR人物】服務未來永世鏈將持續服務
        </p>
      </div>
      <Separator class="mt-9 mb-10 md:mt-[76px] md:mb-16"></Separator>
      <Title class="mx-auto mb-6">Q&A</Title>
    </div>
  </div>
</template>

<!-- eslint-disable camelcase -->
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'IndexPage',
  data() {
    return {
      marquees: [
        '永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承',
        '永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承',
      ],
    }
  },
  head() {
    const { meta_title, meta_keywords, meta_description, fb_og } = this.metaData
    const keywords = JSON.parse(meta_keywords)
      .map((item) => item.value)
      .join(',')
    return {
      title: meta_title,
      meta: [
        { hid: 'description', name: 'description', content: meta_description },
        { hid: 'keywords', name: 'keywords', content: keywords },
        { hid: 'og:title', name: 'og:title', content: fb_og.og_title },
        { hid: 'og:type', name: 'og:type', content: fb_og.og_type },
        { hid: 'og:url', name: 'og:url', content: fb_og.og_url },
        { hid: 'og:image', name: 'og:image', content: fb_og.og_image },
        {
          hid: 'og:description',
          name: 'og:description',
          content: fb_og.og_description,
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: fb_og.og_site_name,
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['metaData', 'contractSetting']),
  },
  methods: {},
}
</script>
