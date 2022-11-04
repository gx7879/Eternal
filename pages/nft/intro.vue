<template>
  <div class="px-5">
    <div class="md:flex md:gap-x-[90px] mb-12">
      <div class="max-w-[278px] mx-auto mb-5">
        <div class="bg-[#888] w-full pb-[100%] rounded-md"></div>
      </div>
      <div class="text-center text-white">
        <h2 class="text-2xl text-gold mb-3">黃金版NFT</h2>
        <span class="text-lg text-primarygray">可購買, 剩餘100個</span>
        <div class="text-[40px]">900 USDT</div>
        <span class="block text-primarygray mb-5">冷錢包專屬方案：NT $32,000 ( Visa、Master ) 購買NFT之後，請撥打080-080-3344 聯繫 參觀、服務；簽約優惠諮詢</span>
        <div class="max-w-[240px] flex flex-col mx-auto mb-9">
          <label for="count" class="text-primarygray text-left mb-[3px]">數量</label>
          <div class="h-12 flex flex-row border border-primarygray rounded-md">
            <button class="text-white h-full w-16 rounded-l cursor-pointer outline-none" @click="decrement">
              <span class="m-auto text-2xl font-thin">−</span>
            </button>
            <input id="count" v-model="count" type="number" class="w-full flex-1 bg-transparent text-center focus:outline-none">
            <button class="text-white h-full w-16 rounded-r cursor-pointer" @click="increment">
              <span class="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div>
        <button type="button" class="border border-lightblue text-lightblue px-20 py-3 rounded-full">購  買</button>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    decrement() {
      let value = Number(this.count);
      if(value === 0) return
      value--;
      this.count = value;
    },
    increment() {
      let value = Number(this.count);
      value++;
      this.count = value;
    }
  }
}
</script>

<style>
</style>
