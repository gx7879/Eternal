<template>
  <div
    class="mb-6 flex flex-col items-center bg-cover pt-[60px] text-center text-[22px] text-white md:mb-0"
    :class="bg"
  >
    <button
      type="button"
      class="flex items-center rounded-full border border-lightblue bg-secondaryblack px-[22px] py-[13px] text-lightblue"
      :class="{
        'mb-2.5': $route.name === 'index',
        'mb-6 md:order-2 md:mb-0': $route.name !== 'index',
      }"
      @click="onConnect"
    >
      連接錢包
      <img class="ml-[7px]" src="~/assets/images/ic_wallet.png" alt="" />
    </button>
    <template v-if="$route.name === 'index'">
      <picture>
        <source
          srcset="~/assets/images/vision_web.png"
          media="(min-width: 768px)"
        />
        <img src="~/assets/images/vision_phone.png" alt="" />
      </picture>
    </template>
    <template v-else>
      <img src="~/assets/images/ic_logo_phone.png" alt="" />
    </template>
    <h1
      v-if="$route.name === 'index'"
      class="-mb-[23px] md:mb-[164px] md:text-[32px]"
    >
      <span class="md:text-5xl">ETERNAL NFT</span><br />▪ 永世住宅▪全球首發 ▪
    </h1>
  </div>
</template>

<script>
import Web3, { utils } from 'web3'
import Web3Modal from 'web3modal'
import { USDT_ABI, NFT_ABI } from '@/web3/abi'
import {
  providerOptions,
  USDT_CONTRACT_ADDRESS,
  NFT_CONTRACT_ADDRESS,
} from '@/web3/config'
import { getChainData } from '@/web3/tools'
const INITIAL_STATE = {
  // web3: null,
  // provider: null,
  address: '',
  connected: false,
  chainId: 5,
  networkId: 5,
  balance: 0,
}
export default {
  name: 'Header',
  data() {
    return {
      walletObj: INITIAL_STATE,
      web3Modal: null,
    }
  },
  computed: {
    bg() {
      if (this.$route.name === 'index') {
        return [
          'bg-[url(~/assets/images/bg_phone.png)] md:bg-[url(~/assets/images/bg_web.png)]',
        ]
      } else {
        return [
          'md:py-8 md:flex-row md:justify-between md:px-5 md:max-w-[1280px] md:mx-auto',
        ]
      }
    },
    web3({ $store }) {
      return $store.state.web3
    },
    usdtContract({ web3 }) {
      // const web3 = web3.web3
      // console.log(web3)
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
  mounted() {
    const _this = this
    _this.web3Modal = new Web3Modal({
      theme: 'dark',
      network: getChainData(_this.walletObj.chainId).network,
      cacheProvider: false,
      providerOptions,
    })
  },
  methods: {
    async onConnect() {
      const _this = this
      const provider = await _this.web3Modal.connect()

      await _this.subscribeProvider(provider)

      const web3 = new Web3(provider)
      const accounts = await web3.eth.getAccounts()

      const address = accounts[0]

      const networkId = await web3.eth.net.getId()

      const chainId = await web3.eth.getChainId() // 坑逼 注意版本 chainId

      // this.walletObj.web3 = Object.freeze(web3)
      // this.walletObj.provider = Object.freeze(provider)
      // this.walletObj.connected = true
      // this.walletObj.address = address
      // this.walletObj.chainId = chainId
      // this.walletObj.networkId = networkId
      this.walletObj = {
        connect: true,
        address,
        chainId,
        networkId,
      }
      this.$store.commit('SETWALLET', this.walletObj)
      this.$store.commit('SETWEB3', Object.freeze(web3))
      this.$store.commit('SETFETCHING', true)
      await _this.getAccountAssets()
    },
    subscribeProvider(provider) {
      const _this = this
      if (!provider.on) {
        return
      }
      provider.on('close', () => _this.disconnect())
      provider.on('accountsChanged', async (accounts) => {
        // eslint-disable-next-line prefer-destructuring
        console.log('111', accounts)
        _this.walletObj.address = accounts[0]
        await _this.getAccountAssets()
      })
      provider.on('chainChanged', async (chainId) => {
        console.log('333', chainId)
        const networkId = await _this.web3?.eth?.net.getId()
        _this.walletObj.chainId = chainId
        _this.walletObj.networkId = networkId
        await _this.getAccountAssets()
      })
    },
    async disconnect() {
      const _this = this
      const web3 = this.web3
      console.log('123')
      if (web3 && web3.currentProvider && web3.currentProvider.close) {
        await web3.currentProvider.close()
      }

      this.web3Modal.clearCachedProvider()
      this.balance = 0
      Object.keys(INITIAL_STATE).forEach((e) => {
        _this.walletObj[e] = INITIAL_STATE[e]
      })
      this.$store.commit('SETWALLET', _this.walletObj)
      this.$store.commit('SETFETCHING', false)
    },
    async getAccountAssets() {
      const _this = this

      // get account balances
      this.balance = await _this.getUserBalance()
    },
    getUserBalance() {
      const _this = this
      return _this.web3.eth
        .getBalance(_this.walletObj.address)
        .then((res) => (res ? utils.fromWei(res.toString(), 'ether') : 0))
    },
  },
}
</script>

<style></style>
