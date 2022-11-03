<template>
  <div class="text-white px-5">
    <div v-if="fetching">
      <!-- <button
        class="border-2 border-blue-300 rounded px-3 py-1"
        @click="connectUserWallet"
      >
        Connected
      </button> -->
      <button
        class="border-2 border-blue-300 rounded px-3 py-1"
        @click="onConnect"
      >
        Connected
      </button>
      <h3>Address: {{ walletObj.userAddress }}</h3>
      <h3>ChainId: {{ walletObj.chainId }}</h3>
      <h3>Balance: {{ balance }}</h3>
      <button
        class="border-2 border-red-300 rounded px-3 py-1"
        @click="disconnect"
      >
        Disconnect
      </button>
    </div>
    <!-- <button
      v-else
      class="border-2 border-blue-300 rounded px-3 py-1"
      @click="onConnect"
    >
      Connected
    </button> -->
    <template v-if="walletObj.web3">
      <button
        class="border-2 border-gray-300 rounded px-3 py-1"
        @click="getBalanceOf"
      >
        BalanceOf
      </button>
      <button
        class="border-2 border-gray-300 rounded px-3 py-1"
        @click="allowance"
      >
        allowance
      </button>
      <button
        class="border-2 border-gray-300 rounded px-3 py-1"
        @click="usdtApprove"
      >
        usdtApprove
      </button>
      <button
        class="border-2 border-gray-300 rounded px-3 py-1"
        @click="nftApprove"
      >
        nftApprove
      </button>
      <button
        class="border-2 border-gray-300 rounded px-3 py-1"
        @click="basicMint"
      >
        basicMint
      </button>
    </template>
    <!-- class="flex bg-[url(~/assets/images/titlebox_bg_phone.png)] bg-cover px-16 py-3" -->
    <Title class="mb-5 mx-auto pt-6">NFT簡介</Title>
    <p class="text-center">
      2022/12/20 奢華質感的靈骨塔生命園區 - 喜悅帝寶正式完工。
      持有永續傳承NFT者，可立即使用賦能，兌換成折價券，享有全市場最優惠簽約價！
      購買喜悅帝寶，將持有土地權狀與建物權狀。
    </p>
    <Separator class="my-8"></Separator>
    <Title class="mb-5 mx-auto">發行計畫</Title>
    <p class="text-center">
      <span class="text-lg">販售時間</span>
      <br />
      <span class="block text-4xl mb-4">2022.10.20 9:00pm</span>
      永續傳承 NFT 黃金版 100件<br />每件 $900 USDT
      <Separator
        class="w-16 border-lightblue mt-[30px] mb-6 mx-auto"
      ></Separator>
      永續傳承 NFT 標準版 100件<br />每件$750 USDT
      <span class="block text-titlered text-2xl mt-[30px] mb-3">
        首波賦能兌換期
      </span>
      喜悅帝寶靈骨塔優惠專案<br />2022.10.20 9:00am 至<br />2023.01.31 9:00am
    </p>
    <Separator class="my-8"></Separator>
    <div class="px-1">
      <div
        class="text-center bg-secondaryblack border border-primarygray mb-9 px-8 pt-6 pb-10"
      >
        <Title class="mb-5 mx-auto">賦能介紹</Title>
        <p class="mb-6">
          超強賦能，永世服務！<br />首波賦能：喜悅帝寶靈骨塔優惠折抵
        </p>
        <div class="md:flex md:gap-x-40">
          <div>
            <div class="bg-[#888] w-full pb-[100%] mb-3"></div>
            <p class="text-xl">
              ▪標準版▪<br /><br />持標準版NFT<br />首波賦能，持有者於喜悅帝寶購買靈骨塔位，可折抵
              NT $22,500 盡享獨家優惠
            </p>
            <button
              type="button"
              class="border border-lightblue text-lightblue rounded-full mt-5 mb-8 px-[66px] py-3"
            >
              ＋ 看更多
            </button>
          </div>
          <div>
            <div class="bg-[#888] w-full pb-[100%] mb-3"></div>
            <p class="text-xl">
              ▪黃金版▪<br /><br />持黃金版NFT<br />首波賦能，持有者於喜悅帝寶購買靈骨塔位，可折抵
              NT $27,000 享獨家優惠與代祭拜服務
            </p>
            <button
              type="button"
              class="border border-lightblue text-lightblue rounded-full mt-5 px-[66px] py-3"
            >
              ＋ 看更多
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex -mx-5 mb-8 px-[13px] bg-lightblue text-secondaryblack text-2xl overflow-x-hidden"
    >
      <div
        v-for="i of 2"
        :key="i"
        class="flex flex-none flex-row pt-3.5 pb-2.5 animate-scroll"
      >
        永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸
        永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸
        永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸
        永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸
        永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承 ▸ 永續傳承
      </div>
    </div>
    <Title class="mb-6 mx-auto">RoadMap</Title>
    <div class="flex flex-col items-center text-center">
      <span class="border border-primarygray h-12 mb-3"></span>
      <p class="mb-4">
        <span class="block text-2xl text-titlered font-black mb-2">
          2022.10.20 - 2023.1.31
        </span>
        永世傳承NFT開始發行, 首次賦能優惠兌換期
      </p>
      <span class="border border-primarygray h-12 mb-3"></span>
      <p class="mb-4">
        <span class="block text-2xl text-titlered font-black mb-2">2023.3</span>
        新服務與賦能上線<br />首波NFT持有者直接成為VIP創始會員
      </p>
      <span class="border border-primarygray h-12 mb-3"></span>
      <p class="mb-4">
        <span class="block text-2xl text-titlered font-black mb-2">2024.4</span>
        永世鏈服務升級，所有NFT持有者將享有<br />【家族時空罐】服務，將先人影音資料上傳永世保存，或購買者預錄影音並指定開啟日期等服務
      </p>
      <span class="border border-primarygray h-12 mb-3"></span>
      <p class="mb-4">
        <span class="block text-2xl text-titlered font-black mb-2"
          >2024.12
        </span>
        永世鏈服務升級，VIP創始會員將享有<br />【家族元宇宙】之虛擬土地與數位家族祠堂。2025年3月
        永世鏈升級，VIP創始會員將享有【擬真VR人物】服務未來永世鏈將持續服務
      </p>
    </div>
    <Separator class="mt-9 mb-10"></Separator>
    <Title class="mb-6 mx-auto">Q&A</Title>
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
// import UseWallet from '@/composables/wallet'
// const { onConnect } = UseWallet()
// import { CONTRACT_ADDRESS, providerOptions } from '@/web3/config'
const INITIAL_STATE = {
  web3: null,
  provider: null,
  userAddress: '',
  connected: false,
  chainId: 5,
  networkId: 5,
}

export default {
  name: 'IndexPage',
  data() {
    return {
      walletObj: Object.assign({}, INITIAL_STATE),
      fetching: false,
      balance: 0,
      web3: null,
      web3Modal: null,
      provider: null,
    }
  },
  computed: {
    // address({ $store }) {
    //   return $store.state.wallet.address
    // },
    // chainId({ $store }) {
    //   return $store.state.wallet.chainId
    // },
    // balance({ $store }) {
    //   return $store.state.wallet.balance
    // },
    // status({ $store }) {
    //   return $store.state.status
    // },
    usdtContract({ walletObj }) {
      const web3 = walletObj.web3
      console.log(walletObj)
      return web3
        ? new web3.eth.Contract(USDT_ABI, USDT_CONTRACT_ADDRESS)
        : null
    },
    nftContract({ walletObj }) {
      const web3 = walletObj.web3
      console.log(walletObj)
      return web3 ? new web3.eth.Contract(NFT_ABI, NFT_CONTRACT_ADDRESS) : null
    },
  },
  mounted() {
    // this.web3Modal = new Web3Modal({
    //   // network: 'rinkeby',
    //   cacheProvider: false, // optional
    //   providerOptions, // required
    //   theme: 'dark',
    //   accentColor: 'blackWhite',
    // })
    const _this = this
    this.web3Modal = new Web3Modal({
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

      this.walletObj.web3 = web3
      this.walletObj.provider = provider
      this.walletObj.connected = true
      this.walletObj.userAddress = address
      this.walletObj.chainId = chainId
      this.walletObj.networkId = networkId
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
        _this.walletObj.userAddress = accounts[0]
        await _this.getAccountAssets()
      })
      provider.on('chainChanged', async (chainId) => {
        console.log('333', chainId)
        const networkId = await _this.walletObj?.web3?.eth?.net.getId()
        _this.walletObj.chainId = chainId
        _this.walletObj.networkId = networkId
        await _this.getAccountAssets()
      })
    },
    async disconnect() {
      const _this = this
      const { web3 } = this.walletObj
      if (web3 && web3.currentProvider && web3.currentProvider.close) {
        await web3.currentProvider.close()
      }

      this.web3Modal.clearCachedProvider()
      this.balance = 0
      Object.keys(INITIAL_STATE).forEach((e) => {
        _this.walletObj[e] = INITIAL_STATE[e]
      })
    },
    async getAccountAssets() {
      const _this = this
      this.fetching = true
      // get account balances

      this.balance = await _this.getUserBalance()
    },
    getUserBalance() {
      const _this = this
      return _this.walletObj.web3.eth
        .getBalance(_this.walletObj.userAddress)
        .then((res) => (res ? utils.fromWei(res.toString(), 'ether') : 0))
    },
    async getBalanceOf() {
      const _this = this
      const balanceResult = await this.nftContract.methods
        .balanceOf(_this.walletObj.userAddress)
        .call()
      console.log(balanceResult)
    },
    async allowance() {
      const _this = this
      const result = await this.usdtContract.methods
        .allowance(_this.walletObj.userAddress, USDT_CONTRACT_ADDRESS)
        .call()
      console.log(result)
    },
    async usdtApprove() {
      const _this = this
      const result = await this.usdtContract.methods
        .approve(USDT_CONTRACT_ADDRESS, 750000000)
        .send({ from: _this.walletObj.userAddress })
      console.log(result)
    },
    async nftApprove() {
      const _this = this
      const result = await this.nftContract.methods
        .approve(NFT_CONTRACT_ADDRESS, 750000000)
        .send({ from: _this.walletObj.userAddress })
      console.log(result)
    },
    async basicMint() {
      const _this = this
      const result = await this.nftContract.methods
        .basicMint(1)
        .send({ from: _this.walletObj.userAddress })
      console.log(result)
    },
  },
}
</script>
