<template>
  <div class="flex">
    <div class="flex items-center border border-lightblue mx-auto px-16 py-3">
      <picture class="mr-2">
        <source
          srcset="~/assets/images/ic_dec_blue_web.png"
          media="(min-width: 768px)"
        />
        <img src="~/assets/images/ic_dec_blue_phone.png" alt="" />
      </picture>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
