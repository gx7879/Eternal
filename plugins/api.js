import Index from '@/api'

export default ({ $axios }, inject) => {
  const request = $axios.create({
    baseURL: 'http://phoenix.un05.com',
  })
  const factories = {
    index: Index(request),
  }

  inject('api', factories)
}
