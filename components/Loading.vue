<template>
  <!-- refer to: https://hackmd.io/@yuna9068/HJgG-gh0w -->
  <div
    v-if="show"
    class="fixed left-0 top-0 right-0 bottom-0 bg-[rgba(0,0,0,0.3)]"
  >
    <div class="text-2xl text-white">loading...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
}
</script>

<style></style>
