export default (axios) => ({
  init() {
    return axios({
      method: 'GET',
      url: '/api/init',
    })
  },
})
