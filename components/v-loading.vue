<template>
  <!-- refer to: https://hackmd.io/@yuna9068/HJgG-gh0w -->
  <div
    v-if="show"
    class="fixed left-0 top-0 right-0 bottom-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,1)]"
  >
    <!-- <div class="text-2xl text-white">loading...</div> -->
    <img src="@/assets/images/loading.gif" alt="loading..." />
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
}
</script>

<style></style>
