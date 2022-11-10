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
export default {
  name: 'Header',
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
  },
}
</script>

<style></style>
