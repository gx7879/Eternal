<template>
  <div
    v-show="show"
    class="fixed top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.3)]"
  >
    <div
      class="absolute top-[200px] left-0 right-0 mx-auto w-80 bg-modalgray px-[60px] pt-[72px] pb-[60px]"
    >
      <img
        class="absolute top-6 right-[26px]"
        src="~/assets/images/ic_cancel.png"
        alt=""
        @click="closeModal"
      />
      <h3 class="mb-[43px] text-2xl">NFT賦能兌換</h3>
      <client-only placeholder="loading...">
        <vue-qr text="123" :size="288"></vue-qr>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit('update:show', false)
    },
  },
}
</script>

<style></style>
