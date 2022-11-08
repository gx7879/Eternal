<template>
  <div
    v-show="show"
    class="fixed top-[200px] left-0 h-full w-full bg-[rgba(0,0,0,0.3)]"
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
      <slot></slot>
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
