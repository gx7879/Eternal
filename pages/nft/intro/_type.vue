<template>
  <div class="px-5 text-center text-white md:mx-auto md:max-w-7xl">
    <div class="mb-12 md:flex md:gap-x-[90px]">
      <div class="mx-auto mb-5 max-w-[278px] md:w-full md:max-w-none md:flex-1">
        <div
          class="w-full rounded-md bg-[#888] bg-cover pb-[100%]"
          :style="{
            backgroundImage: `url(https://phoenix.un05.com/${bg})`,
          }"
        ></div>
      </div>
      <div class="text-center md:flex-1 md:text-left">
        <h2 class="mb-3 text-2xl text-gold">
          {{ title }}
        </h2>
        <span class="text-lg text-primarygray">可購買, 剩餘100個</span>
        <div class="text-[40px]">{{ price }} USDT</div>
        <span class="mb-5 block text-primarygray">
          冷錢包專屬方案：NT $32,000 ( Visa、Master )
          購買NFT之後，請撥打080-080-3344 聯繫 參觀、服務；簽約優惠諮詢
        </span>
        <div class="mx-auto mb-9 flex max-w-[240px] flex-col md:mx-0">
          <label
            for="count"
            class="mb-[3px] text-left text-primarygray md:text-lg"
          >
            數量
          </label>
          <div class="flex h-12 flex-row rounded-md border border-primarygray">
            <button
              class="h-full w-16 cursor-pointer rounded-l text-white outline-none"
              @click="decrement"
            >
              <span class="m-auto text-2xl font-thin">−</span>
            </button>
            <input
              id="count"
              v-model="count"
              type="number"
              class="w-full flex-1 bg-transparent text-center focus:outline-none"
            />
            <button
              class="h-full w-16 cursor-pointer rounded-r text-white"
              @click="increment"
            >
              <span class="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
        <div
          class="mx-auto flex max-w-[200px] flex-col gap-2 md:max-w-none lg:flex-row"
        >
          <template v-if="contractSetting.can_buy === 'on'">
            <button
              type="button"
              class="flex h-[50px] items-center justify-center rounded-full border border-lightblue text-lightblue md:h-[58px] md:w-60 md:text-xl"
              @click="mint"
            >
              虛擬貨幣購買
            </button>
            <button
              type="button"
              class="flex h-[50px] items-center justify-center rounded-full border border-lightblue text-lightblue md:h-[58px] md:w-60 md:text-xl"
            >
              法幣購買
            </button>
          </template>
          <template v-else>
            <button
              type="button"
              class="flex h-[50px] items-center justify-center rounded-full border border-primarygray text-primarygray md:h-[58px] md:w-60 md:text-xl"
            >
              已售完
            </button>
          </template>
        </div>
      </div>
    </div>
    <h3 class="mb-2.5 text-center text-xl text-lightblue md:text-left">
      首波四大賦能說明
    </h3>
    <p class="md:text-left md:text-lg">
      1. 持黃金版NFT，購買喜悅帝寶靈骨塔位，總金額可折抵NT $27,000<br />2.
      代為祭拜：持黃金版NFT並完成簽約，立即享有三年期的誦經法會暨拜飯服務與初一、十五、八大節日、忌日、冥誕代為祭祀。<br />3.
      三年期清明節專車接送服務，讓您更便利的緬懷先人（定點制，如台北車站至喜悅帝寶園區來回接送）<br />4.
      永世傳承NFT持有者，未來將可直接升級為本NFT的VIP
    </p>
    <Separator class="mt-6 mb-8 md:mt-9 md:mb-14 lg:-mx-5"></Separator>
    <div class="md:mx-auto md:max-w-[1080px]">
      <Title class="mx-auto mb-6 md:mb-8">關於喜悅帝寶</Title>
      <p class="mb-6 text-center md:mb-10 md:text-lg">
        了解到大部分的業者不是真心為了服務每個人的最後一哩路，而是不斷的想透過法規的漏洞來詐取消費者。了解到事態日趨嚴重的我們，秉持著『永續經營、從一而終』的理念，延請三位老師根據這理想，設計出了｢喜悅帝寶｣這項產品。
        ｢喜悅帝寶｣有別於其他市面上的產品從土地、建物、產權、合約、維護、服務六項指標提供完整保障，讓先人們能永永久久的安居於此。所以我們將這擁有完整保障的產品命名為永久住宅。為了普及永久住宅，我們規劃出了鳳凰藝術園區這是實現我們理念的第一步也是未來我們與賓客們共生共榮的永恆居所。
      </p>
      <div class="-mx-5 mb-8 md:mx-0 md:mb-16">
        <iframe
          class="aspect-video w-full"
          src="https://www.youtube.com/embed/12V8Ik4xmV4"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="mb-8 px-1 md:mb-16">
        <div
          class="border border-primarygray pt-6 pb-12 text-center md:pt-12 md:pb-16"
        >
          <Title class="mx-auto mb-5 md:mb-8">永世價值</Title>
          <p class="mb-8 md:mb-10 md:text-lg">擁有土地與建物所有權狀</p>
          <div class="mb-6 w-full overflow-x-auto">
            <img
              class="max-w-none md:mx-auto"
              src="~/assets/images/table_1.png"
              alt=""
            />
          </div>
          <div class="w-full md:overflow-x-auto">
            <div
              class="grid grid-cols-2 gap-x-12 gap-y-8 px-12 md:grid-cols-[repeat(4,140px)] md:gap-x-[76px] md:px-0 lg:justify-center"
            >
              <div class="flex flex-col">
                <img
                  class="mb-6 md:mb-2.5"
                  src="~/assets/images/img_phone_1.png"
                  alt=""
                />
                <span>重建委員會</span>
              </div>
              <div class="flex flex-col">
                <img
                  class="mb-6 md:mb-2.5"
                  src="~/assets/images/img_phone_2.png"
                  alt=""
                />
                <span>建物所有權狀</span>
              </div>
              <div class="flex flex-col">
                <img
                  class="mb-6 md:mb-2.5"
                  src="~/assets/images/img_phone_3.png"
                  alt=""
                />
                <span>土地所有權狀</span>
              </div>
              <div class="flex flex-col">
                <img
                  class="mb-6 md:mb-2.5"
                  src="~/assets/images/img_phone_4.png"
                  alt=""
                />
                <span>永久使用權狀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-8 px-1">
        <div
          class="border border-primarygray pt-6 pb-8 text-center md:pt-12 md:pb-14"
        >
          <Title class="mx-auto mb-5 md:mb-8">公辦民營/永世保障</Title>
          <div class="w-full overflow-x-auto">
            <img
              class="max-w-none md:mx-auto"
              src="~/assets/images/table_2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="mb-14 px-1 md:mb-16">
        <div
          class="border border-primarygray pt-6 pb-9 text-center md:pt-12 md:pb-10"
        >
          <Title class="mx-auto mb-5 md:mb-8">信託基金重建</Title>
          <p class="mb-8 px-8 text-lg">
            喜悅帝寶園區僅有2500戶，每戶費用將撥出2萬元成立【永久重建基金】，以基金複利支付未來修建資金，後人將不再負擔重建費用。重建基金定存年息0.8%計算表如下：
          </p>
          <div class="mb-[35px] w-full overflow-x-auto md:mb-9">
            <img
              class="max-w-none md:mx-auto"
              src="~/assets/images/table_3.png"
              alt=""
            />
          </div>
          <p class="px-8 text-left text-primarygray">
            重建及裝修費用試算<br />
            100年 4725萬 （198坪*20萬/1坪,加計25%=4725萬）<br />
            200年 5906萬 （4725萬加計25%=5906萬）<br />
            300年 7382萬 （5906萬加計25%=7382萬）<br />
            建物面積共189坪*重建及裝修成本每坪20萬(通貨膨脹另加計25%)
          </p>
        </div>
      </div>
      <NuxtLink
        :to="{ path: '/nft/activity', query: { type } }"
        class="mb-[93px] inline-block rounded-full border border-lightblue px-20 py-3 text-lightblue"
      >
        前往賦能兌換頁
      </NuxtLink>
    </div>
  </div>
</template>
<!-- eslint-disable camelcase -->
<script>
import { mapState, mapGetters } from 'vuex'
import { USDT_ABI, NFT_ABI } from '@/web3/abi'
import { USDT_CONTRACT_ADDRESS, NFT_CONTRACT_ADDRESS } from '@/web3/config'
export default {
  asyncData({ params }) {
    const data = {
      normal: {
        title: '標準版NFT',
        price: 750,
      },
      golden: {
        title: '黃金版NFT',
        price: 900,
      },
    }
    return {
      type: params.type,
      ...data[params.type],
    }
  },
  data() {
    return {
      count: 1,
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
    ...mapState(['walletObj']),
    ...mapGetters(['metaData', 'contractSetting']),
    bg({ type, contractSetting }) {
      // const type =
      return contractSetting[`${type}_before_redeem_image_url`]
    },
    web3({ $store }) {
      return $store.state.web3
    },
    usdtContract({ web3 }) {
      return web3
        ? new web3.eth.Contract(USDT_ABI, USDT_CONTRACT_ADDRESS)
        : null
    },
    nftContract({ web3 }) {
      // const web3 = web3.web3
      // console.log(web3)
      return web3 ? new web3.eth.Contract(NFT_ABI, NFT_CONTRACT_ADDRESS) : null
    },
  },
  methods: {
    decrement() {
      let value = Number(this.count)
      if (value === 0) return
      value--
      this.count = value
    },
    increment() {
      let value = Number(this.count)
      value++
      this.count = value
    },
    async usdtApprove() {
      const _this = this
      const result = await this.usdtContract.methods
        .approve(USDT_CONTRACT_ADDRESS, 900000000)
        .send({ from: _this.walletObj.address })
      console.log(result)
    },
    async nftApprove() {
      const _this = this
      const result = await this.nftContract.methods
        .approve(NFT_CONTRACT_ADDRESS, 900000000)
        .send({ from: _this.walletObj.address })
      console.log(result)
    },
    async mint() {
      const _this = this
      if (this.web3) {
        await this.usdtApprove()
        const result = await this.nftContract.methods
          .goldMint(1)
          .send({ from: _this.walletObj.address })
        console.log(result)
      } else {
        console.log('wallet connect')
      }
    },
  },
}
</script>

<style></style>
