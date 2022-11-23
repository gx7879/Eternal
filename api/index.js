export default (axios) => ({
  init() {
    return axios({
      method: 'GET',
      url: '/api/init',
      baseURL: 'http://phoenix.un05.com',
    })
  },
  nftRefresh(data) {
    return axios({
      method: 'GET',
      url: `/tokens/${data.id}`,
    })
  },
})
