<template>
  <div
    v-show="show"
    class="fixed top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.3)]"
    @click.self="closeModal"
  >
    <div
      class="absolute top-[200px] left-0 right-0 mx-auto w-80 bg-modalgray px-[60px] pt-[72px] pb-[60px] md:top-1/2 md:w-[480px] md:-translate-y-1/2 md:pt-[78px] md:pb-[98px]"
    >
      <img
        class="absolute top-6 right-[26px] cursor-pointer"
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
