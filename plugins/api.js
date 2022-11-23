import Index from '@/api'

export default ({ $axios }, inject) => {
  const request = $axios.create({
    baseURL:
      process.env.NODE_ENV === 'development' ? 'http://phoenix.un05.com' : '/',
  })
  const factories = {
    index: Index(request),
  }

  inject('api', factories)
}
