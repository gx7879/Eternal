<template>
  <div class="fixed top-0 left-0 h-full w-full bg-[rgba(0,0,0,0.3)]">
    <div
      class="absolute top-[200px] left-0 right-0 mx-auto w-80 bg-modalgray px-[60px] pt-[72px] pb-[60px]"
    >
      <h3 class="mb-[43px] text-2xl">NFT賦能兌換</h3>
      <client-only>
        <vue-qr text="123" :size="288"></vue-qr>
      </client-only>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
