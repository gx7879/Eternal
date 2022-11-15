import Redreamer from '@/api/redreamer'

export default ({ $axios, store, $config }, inject) => {
  const request = $axios.create({
    headers: { 'X-API-Key': 'jbQkUPiI3qj_l822cffdHfNklJ0ueXhvORYUAzc92Oo=' },
    baseURL: $config.redreamerApiUrl,
  })
  const factories = {
    redreamer: Redreamer(request),
  }
  request.onRequest((config) => {
    if (store.state.token) {
      config.headers.Authorization = `Bearer ${store.state.token}`
    }
  })

  inject('redreamerApi', factories)
}
