<template>
  <!-- refer to: https://hackmd.io/@yuna9068/HJgG-gh0w -->
  <div
    v-if="showVal"
    class="fixed left-0 top-0 right-0 bottom-0 z-50 flex flex-col items-center justify-center bg-[rgba(0,0,0,1)]"
  >
    <img src="/loading.gif" alt="loading..." />
    <p v-if="text.length !== 0" class="text-white">{{ text }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      text: '',
    }
  },
  computed: {
    showVal: {
      get() {
        return this.show
      },
      set(val) {
        console.log(val)
        this.$emit('update:show', val)
      },
    },
  },
}
</script>

<style></style>
