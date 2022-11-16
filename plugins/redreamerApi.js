import Redreamer from '@/api/redreamer'

export default ({ $axios, store, $config }, inject) => {
  const request = $axios.create({
    headers: { 'X-API-Key': 'lxX8iZPOxPgMP8asNprTiN4U8cvx5aBjw2kEj8xEVQY=' },
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
