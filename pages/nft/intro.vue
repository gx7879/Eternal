<template>
  <div class="px-5">
    <div class="mb-12 md:flex md:gap-x-[90px]">
      <div class="mx-auto mb-5 max-w-[278px]">
        <div class="w-full rounded-md bg-[#888] pb-[100%]"></div>
      </div>
      <div class="text-center text-white">
        <h2 class="mb-3 text-2xl text-gold">黃金版NFT</h2>
        <span class="text-lg text-primarygray">可購買, 剩餘100個</span>
        <div class="text-[40px]">900 USDT</div>
        <span class="mb-5 block text-primarygray"
          >冷錢包專屬方案：NT $32,000 ( Visa、Master )
          購買NFT之後，請撥打080-080-3344 聯繫 參觀、服務；簽約優惠諮詢</span
        >
        <div class="mx-auto mb-9 flex max-w-[240px] flex-col">
          <label for="count" class="mb-[3px] text-left text-primarygray"
            >數量</label
          >
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
        <button
          type="button"
          class="rounded-full border border-lightblue px-20 py-3 text-lightblue"
        >
          購 買
        </button>
      </div>
    </div>
    <h3 class="text-xl text-lightblue">首波四大賦能說明</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
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
  },
}
</script>

<style></style>
