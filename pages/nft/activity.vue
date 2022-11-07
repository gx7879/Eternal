<template>
  <div class="px-5 text-center text-white">
    <div class="mb-12 md:flex md:gap-x-[90px]">
      <div class="mx-auto mb-5 max-w-[278px]">
        <div class="w-full rounded-md bg-[#888] pb-[100%]"></div>
      </div>
      <div class="text-center">
        <h2 class="mb-3 px-9 text-[32px]">永世傳承黃金版NFT - 首波賦能</h2>
        <span class="mb-5 block text-left">
          1. 持黃金版NFT，購買喜悅帝寶靈骨塔位，總金額可折抵NT $27,000<br />
          2.
          代為祭拜：持黃金版NFT並完成簽約，立即享有三年期的誦經法會暨拜飯服務與初一、十五、八大節日、忌日、冥誕代為祭祀。<br />
          3.
          三年期清明節專車接送服務，讓您更便利的緬懷先人（定點制，如台北車站至喜悅帝寶園區來回接送）<br />
          4. 賦能四：永世傳承NFT持有者，未來將可直接升級為本NFT的VIP
        </span>
      </div>
    </div>

    <Separator class="mt-6 mb-8"></Separator>
    <Title class="mb-8">NFT</Title>
    <div class="mb-[100px] grid grid-cols-2 gap-8 px-[11px]">
      <div v-for="i of 4" :key="i">
        <div class="mb-6 w-full rounded-md bg-[#888] pb-[100%]"></div>
        <button
          type="button"
          class="rounded-full border border-lightblue px-[18px] py-2 text-lightblue"
          @click="openModal"
        >
          Redeem
        </button>
      </div>
    </div>
    <Modal :show.sync="show"></Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
      show: false,
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
    openModal() {
      this.show = true
    },
  },
}
</script>

<style></style>
