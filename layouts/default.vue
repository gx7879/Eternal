<template>
  <div>
    <Header></Header>
    <Nuxt></Nuxt>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Footer,
  },
}
</script>

<style></style>
