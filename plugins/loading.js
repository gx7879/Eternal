import Vue from 'vue'
import myLoading from '@/components/Loading'
const loading = {
  install(Vue, options) {
    const Loading = Vue.extend(myLoading)
    // const profile = new Loading({
    //   el: document.createElement('div')
    // })
    const profile = new Loading()
    const vm = profile.$mount(document.createElement('div'))
    document.body.appendChild(vm.$el)

    const myLoadingMethod = {
      open(text = '') {
        profile.show = true
        profile.text = text
      },
      hide() {
        profile.show = false
      },
    }
    Vue.prototype.$loading = myLoadingMethod
  },
}

Vue.use(loading)
