<template>
  <div class="px-5 text-center text-white md:mx-auto md:max-w-7xl">
    <div class="mb-12 items-center md:flex md:gap-x-[90px]">
      <div class="mx-auto mb-5 max-w-[278px] md:w-full md:max-w-none md:flex-1">
        <div class="w-full rounded-md bg-[#888] bg-cover pb-[100%]"></div>
        <!-- :style="{ backgroundImage: `url(https://phoenix.un05.com/${bg})` }" -->
      </div>
      <div class="text-center md:flex-1 md:text-left">
        <h2 class="mb-3 px-9 text-[32px] md:mb-[35px] md:px-0 md:text-4xl">
          即刻購買永世傳承NFT，專享首波創始優惠！
        </h2>
        <span class="mb-5 block text-left md:mb-0 md:text-lg">
          專案期間購買喜悅帝寶靈骨塔，除了享有首波優惠折扣與賦能之外，未來更能直接升級成為本NFT的VIP創始會員，並享有「家族時空罐」、「家族元宇宙
          - 虛擬土地與數位家族祠堂」、「擬真VR人物」等後續永世服務。
        </span>
      </div>
    </div>

    <Separator class="mt-6 mb-8 md:mt-16 md:mb-14 lg:-mx-5"></Separator>
    <Title class="mb-8 md:mb-16">
      NFT
      <template #icon>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="absolute -right-8 h-6 w-6"
          @click="refreshNft"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </template>
    </Title>
    <div class="mb-[100px] grid grid-cols-2 gap-8 px-[11px] lg:grid-cols-3">
      <div v-for="item of activity" :key="item.token_id">
        <div
          class="mb-6 w-full rounded-md bg-[#888] bg-contain bg-center bg-no-repeat pb-[100%] md:mb-8"
          :style="{ backgroundImage: `url(${item.image})` }"
        ></div>
        <button
          v-if="!item.is_redeem"
          type="button"
          class="rounded-full border border-lightblue px-[18px] py-2 text-lightblue md:px-[82px] md:py-3.5"
          @click="redeem(item)"
        >
          Redeem
        </button>
      </div>
    </div>
    <Modal :show.sync="show" @close="close">
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
  async asyncData({ $redreamerApi, store }) {
    let activity = []
    if (store.state.token) {
      const {
        data: { data: list },
      } = await $redreamerApi.redreamer.getNft()
      activity = await store.dispatch('nft/refreshNft', list)
    }

    return {
      activity,
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
        data: { data: activityRename },
      } = await this.$redreamerApi.redreamer.getNft()
      const activity = await this.$store.dispatch(
        'nft/refreshNft',
        activityRename
      )
      this.activity = activity
      // this.refreshNft(activity)
    },
    async redeem(nft) {
      const _this = this
      const { contract_address, token_id } = nft
      const campaignId = 'aafeca06-8711-4701-b41d-309720b405b2'
      const address = this.walletObj.address
      const sign = () => {
        return new Promise((resolve, reject) =>
          _this.web3.eth.personal.sign(
            utils.fromUtf8(
              `campaign_id:${campaignId},contract_address:${contract_address},token_id:${token_id}`
            ),
            address,
            (err, signature) => {
              if (err) reject(err)
              resolve({ err, signature })
            }
          )
        )
      }
      try {
        const { signature } = await sign()
        this.$loading.open()
        const { data } = await this.$redreamerApi.redreamer.redeem({
          contract_address,
          token_id,
          signature,
        })
        _this.qrcode = data.qr_code
        _this.show = true
      } catch (error) {
        console.log(error)
      } finally {
        this.$loading.hide()
      }
    },
    async close() {
      this.qrcode = ''
      await this.refreshNft()
      // await this.refreshNft(this.activity)
    },
    async refreshNft() {
      const activity = await this.$store.dispatch(
        'nft/refreshNft',
        this.activity
      )
      this.activity = activity
    },
    // async refreshNft(activity) {
    //   if (activity.length === 0) return
    //   this.$loading.open()
    //   const activityCopy = [...activity]
    //   const idCollect = activityCopy.map((item) => item.token_id).join(',')
    //   try {
    //     const { data } = await this.$api.index.nftRefresh({ id: idCollect })
    //     data.response.forEach((nft) => {
    //       activityCopy.forEach((item, index) => {
    //         if (item.token_id === nft.token_id) {
    //           activityCopy[index] = Object.assign({}, item, nft)
    //         }
    //       })
    //     })
    //     console.log(activityCopy)
    //     this.activity = activityCopy
    //   } catch (error) {
    //     console.log(error)
    //   } finally {
    //     this.$loading.hide()
    //   }
    // },
  },
}
</script>

<style></style>
