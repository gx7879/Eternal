import Index from '@/api'

export default (context, inject) => {
  const factories = {
    index: Index(context.$axios),
  }

  inject('api', factories)
}
