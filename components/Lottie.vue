<template>
  <div ref="lavContainer" :style="style"></div>
</template>

<script>
import lottie from 'lottie-web'
export default {
  props: {
    options: {
      type: Object,
      required: true,
    },
    height: {
      type: Number,
      default: 0,
    },
    width: {
      type: Number,
      default: 0,
    },
    render: {
      type: String,
      default: 'svg',
    },
  },
  data() {
    return {
      style: {
        width: this.width ? `${this.width}px` : '100%',
        height: this.height ? `${this.height}px` : '100%',
        overflow: 'hidden',
        margin: '0 auto',
      },
    }
  },
  mounted() {
    const anim = lottie.loadAnimation({
      container: this.$refs.lavContainer,
      renderer: this.render,
      loop: this.options.loop !== false,
      autoplay: this.options.autoplay !== false,
      animationData: this.options.animationData,
      rendererSettings: this.options.rendererSettings,
    })
    anim.frameRate = 24
    anim.setSubframe(false)
    this.$emit('animCreated', anim)
  },
}
</script>

<style></style>
