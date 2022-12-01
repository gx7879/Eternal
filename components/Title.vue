<template>
  <div class="flex">
    <div
      class="relative mx-auto flex items-center border border-lightblue bg-secondaryblack px-16 py-3 md:px-[76px] md:py-3.5 md:text-2xl"
    >
      <picture class="mr-2 h-5 w-5 md:h-[30px] md:w-[29px]">
        <source
          srcset="~/assets/images/ic_dec_blue_web.png"
          media="(min-width: 780px)"
        />
        <img src="~/assets/images/ic_dec_blue_phone.png" alt="" />
      </picture>
      <slot></slot>
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
