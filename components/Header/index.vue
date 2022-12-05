<template>
  <div
    class="mb-6 flex flex-col items-center bg-cover text-center text-[22px] text-white md:mb-0"
    :class="bg"
  >
    <div
      class="relative z-50 flex w-full justify-end px-6 py-[22px]"
      :class="{
        // 'md:pt-4': $route.name === 'index',
        'md:order-2 md:px-0': $route.name !== 'index',
      }"
    >
      <button
        type="button"
        class="flex h-6 w-6 items-center justify-center md:hidden"
        @click="menuOpen"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div
        :class="{ hidden: !menu }"
        class="absolute top-full left-0 right-0 bg-secondaryblack px-4 py-4 text-left md:relative md:flex md:space-x-4 md:bg-transparent md:p-0"
      >
        <ul
          class="mb-4 space-y-4 md:mb-0 md:flex md:items-center md:space-y-0 md:space-x-4"
        >
          <li><NuxtLink to="/">首頁</NuxtLink></li>
          <li class="group md:relative">
            <span
              class="flex cursor-pointer items-center justify-between"
              @click="childItemOpen"
            >
              NFT購買
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
            <ul
              :class="{ hidden: !childItem }"
              class="left-0 space-y-2 px-4 py-2 group-hover:block md:absolute md:bg-secondaryblack"
            >
              <li>
                <NuxtLink to="/nft/intro/normal" no-prefetch>一般版</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/nft/intro/golden" no-prefetch>黃金版</NuxtLink>
              </li>
            </ul>
          </li>
          <li><NuxtLink to="/nft/activity" no-prefetch>賦能兌換</NuxtLink></li>
        </ul>
        <template v-if="!walletObj.connected">
          <button
            type="button"
            class="flex items-center rounded-full border border-lightblue bg-secondaryblack px-[22px] py-[13px] text-lightblue"
            @click="onConnect"
          >
            連接錢包
            <img
              class="ml-[7px] h-6 w-6"
              src="~/assets/images/ic_wallet.png"
              alt=""
            />
          </button>
        </template>
        <template v-else>
          <span class="cursor-pointer hover:underline" @click="disconnect">
            Unbinding Wallet:
            {{ walletObj.address.slice(0, 2) }}...
            {{ walletObj.address.slice(-4) }}
          </span>
        </template>
      </div>
    </div>
    <template v-if="$route.name === 'index'">
      <v-loading :show.sync="showLoading"></v-loading>
      <Lottie
        :options="webLottieOptions"
        class="hidden max-w-[1440px] md:block"
        @animCreated="handleAnimation"
      />
      <Lottie
        :options="phoneLottieOptions"
        class="md:hidden"
        @animCreated="handleAnimation"
      />
    </template>
    <template v-else>
      <NuxtLink to="/">
        <img src="~/assets/images/ic_logo_phone.png" alt="" />
      </NuxtLink>
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
import * as webAnimationData from '~/assets/animation/vision_web_key.json'
import * as phoneAnimationData from '~/assets/animation/vision_phone_key.json'
const webData = webAnimationData
const phoneData = phoneAnimationData
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
      menu: false,
      childItem: false,
      showLoading: true,
      webLottieOptions: {
        animationData: Object.freeze(webData).default,
      },
      phoneLottieOptions: {
        animationData: Object.freeze(phoneData).default,
      },
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
      return web3
        ? new web3.eth.Contract(USDT_ABI, USDT_CONTRACT_ADDRESS)
        : null
    },
    nftContract({ web3 }) {
      return web3 ? new web3.eth.Contract(NFT_ABI, NFT_CONTRACT_ADDRESS) : null
    },
  },
  watch: {
    $route() {
      this.menu = false
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
    handleAnimation: function (anim) {
      anim.addEventListener('DOMLoaded', (ani) => {
        // this.$loading.hide()
        this.showLoading = false
      })
    },
    menuOpen() {
      this.menu = !this.menu
      if (!this.menu) {
        this.childItem = false
      }
    },
    childItemOpen() {
      if (window.matchMedia('(max-width: 780px)').matches) {
        this.childItem = !this.childItem
      }
    },
    async onConnect() {
      const _this = this
      try {
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
          connected: true,
          address,
          chainId,
          networkId,
        }
        this.$store.commit('SETWALLET', this.walletObj)
        this.$store.commit('SETWEB3', Object.freeze(web3))
        this.$store.commit('SETFETCHING', true)
        await _this.getAccountAssets()
        await _this.redeemLogin()
        this.menu = false
      } catch (error) {
        console.log(error)
      }
    },
    subscribeProvider(provider) {
      const _this = this
      if (!provider.on) {
        return
      }
      // provider.on('close', () => _this.disconnect())
      provider.on('accountsChanged', async (accounts) => {
        // eslint-disable-next-line prefer-destructuring
        _this.walletObj.address = accounts[0]
        await _this.getAccountAssets()
      })
      provider.on('chainChanged', async (chainId) => {
        const networkId = await _this.web3?.eth?.net.getId()
        _this.walletObj.chainId = chainId
        _this.walletObj.networkId = networkId
        await _this.getAccountAssets()
      })
    },
    async disconnect() {
      const _this = this
      const web3 = this.web3
      if (web3 && web3.currentProvider && web3.currentProvider.close) {
        await web3.currentProvider.close()
      }

      this.web3Modal.clearCachedProvider()
      this.balance = 0
      Object.keys(INITIAL_STATE).forEach((e) => {
        _this.walletObj[e] = INITIAL_STATE[e]
      })
      this.$store.commit('SETWALLET', this.walletObj)
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
    async redeemLogin() {
      // const _this = this
      try {
        // const privateKey =
        //   '895d32dbc192afdbb5db9b6da11873dc6e502453a2e0ce65a42e8520be7d22c7'
        const address = this.walletObj.address
        const {
          data: { nonce },
        } = await this.$redreamerApi.redreamer.nonce({
          address,
        })
        this.web3.eth.personal.sign(
          utils.fromUtf8(`${address.toLowerCase()} ${nonce}`),
          address,
          async (err, signature) => {
            console.log(err)
            const { data } = await this.$redreamerApi.redreamer.login({
              address,
              signature,
            })

            this.$store.commit('SETREDREAMERTOKEN', data.token)
          }
        )
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style></style>
