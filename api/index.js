export default (axios) => ({
  init() {
    return axios({
      method: 'GET',
      url: '/api/init',
      baseURL: process.env.baseUrl,
    })
  },
  nftRefresh(data) {
    return axios({
      method: 'GET',
      url: `/tokens/${data.id}`,
    })
  },
})
