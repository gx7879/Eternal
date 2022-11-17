<template>
  <div class="px-5 text-center text-white md:mx-auto md:max-w-7xl">
    <div class="mb-12 items-center md:flex md:gap-x-[90px]">
      <div class="mx-auto mb-5 max-w-[278px] md:w-full md:max-w-none md:flex-1">
        <div
          class="w-full rounded-md bg-[#888] bg-cover pb-[100%]"
          :style="{ backgroundImage: `url(https://phoenix.un05.com/${bg})` }"
        ></div>
      </div>
      <div class="text-center md:flex-1 md:text-left">
        <h2 class="mb-3 px-9 text-[32px] md:mb-[35px] md:px-0 md:text-4xl">
          永世傳承黃金版NFT - 首波賦能
        </h2>
        <span class="mb-5 block text-left md:mb-0 md:text-lg">
          1. 持黃金版NFT，購買喜悅帝寶靈骨塔位，總金額可折抵NT $27,000<br />
          2.
          代為祭拜：持黃金版NFT並完成簽約，立即享有三年期的誦經法會暨拜飯服務與初一、十五、八大節日、忌日、冥誕代為祭祀。<br />
          3.
          三年期清明節專車接送服務，讓您更便利的緬懷先人（定點制，如台北車站至喜悅帝寶園區來回接送）<br />
          4. 賦能四：永世傳承NFT持有者，未來將可直接升級為本NFT的VIP
        </span>
      </div>
    </div>

    <Separator class="mt-6 mb-8 md:mt-16 md:mb-14 lg:-mx-5"></Separator>
    <Title class="mb-8 md:mb-16">NFT</Title>
    <div class="mb-[100px] grid grid-cols-2 gap-8 px-[11px] lg:grid-cols-3">
      <div v-for="item of activity" :key="item.id">
        <div
          class="mb-6 w-full rounded-md bg-[#888] bg-contain bg-center bg-no-repeat pb-[100%] md:mb-8"
          :style="{ backgroundImage: `url(${item.image})` }"
        ></div>
        <button
          type="button"
          class="rounded-full border border-lightblue px-[18px] py-2 text-lightblue md:px-[82px] md:py-3.5"
          @click="redeem(item)"
        >
          Redeem
        </button>
      </div>
    </div>
    <Modal :show.sync="show" @close="qrcode = ''">
      <h3 class="mb-[43px] text-2xl">NFT賦能兌換</h3>
      <client-only placeholder="loading...">
        <vue-qr :text="qrcode" :size="288"></vue-qr>
      </client-only>
    </Modal>
    <Modal :show.sync="status">
      <img
        class="mx-auto mb-7"
        src="~/assets/images/ic_pop_success.png"
        alt=""
      />
      <p class="text-2xl">賦能已兌換完成</p>
    </Modal>
  </div>
</template>
<!-- eslint-disable camelcase -->
<script>
import { mapGetters, mapState } from 'vuex'
import { utils } from 'web3'
export default {
  async asyncData({ $redreamerApi, store, query }) {
    let activity = []
    if (store.state.token) {
      const {
        data: { data: list },
      } = await $redreamerApi.redreamer.getNft()
      console.log(list)
      activity = [...list]
    }

    return {
      activity,
      type: query.type,
    }
  },
  data() {
    return {
      count: 0,
      show: false,
      status: false,
      activity: [],
      qrcode: '',
    }
  },
  computed: {
    ...mapState(['walletObj', 'web3']),
    ...mapGetters(['contractSetting']),
    token({ $store }) {
      return $store.state.token
    },
    bg({ type, contractSetting }) {
      return contractSetting[`${type}_before_redeem_image_url`]
    },
  },
  watch: {
    token(val) {
      if (val) {
        this.getNft()
      }
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
    openModal() {
      this.show = true
    },
    async getNft() {
      const {
        data: { data: activity },
      } = await this.$redreamerApi.redreamer.getNft()
      console.log(activity)
      this.activity = activity
    },
    redeem(nft) {
      const _this = this
      const { contract_address, token_id } = nft
      const campaignId = 'aafeca06-8711-4701-b41d-309720b405b2'
      const address = this.walletObj.address
      this.web3.eth.personal.sign(
        utils.fromUtf8(
          `campaign_id:${campaignId},contract_address:${contract_address},token_id:${token_id}`
        ),
        address,
        async (err, signature) => {
          console.log(err, signature)
          const { data } = await this.$redreamerApi.redreamer.redeem({
            contract_address,
            token_id,
            signature,
          })
          console.log(data)
          _this.qrcode = data.qr_code
          _this.show = true
        }
      )
    },
  },
}
</script>

<style></style>
