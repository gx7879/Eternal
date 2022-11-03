<template>
  <div
    class="flex flex-col items-center bg-cover text-white text-[22px] text-center mb-[23px] pt-[60px]"
    :class="bg"
  >
    <button
      type="button"
      class="flex items-center bg-secondaryblack text-lightblue border border-lightblue rounded-full px-[22px] mb-2.5 py-[13px]"
    >
      連接錢包
      <img class="ml-[7px]" src="~/assets/images/ic_wallet.png" alt="" />
    </button>
    <template v-if="$route.name === 'index'">
      <img src="~/assets/images/vision_phone.png" alt="" />
    </template>
    <template v-else>
      <img src="~/assets/images/ic_logo_phone.png" alt="" />
    </template>
    <h1 v-if="$route.name === 'index'" class="-mb-[23px]">
      ETERNAL NFT<br />▪ 永世住宅▪全球首發 ▪
    </h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    bg() {
      if (this.$route.name === 'index') {
        return ['bg-[url(~/assets/images/bg_phone.png)]']
      } else {
        return []
      }
    },
  },
}
</script>

<style></style>
