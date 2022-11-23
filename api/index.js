export default (axios) => ({
  init() {
    return axios({
      method: 'GET',
      url: '/api/init',
    })
  },
  nftRefresh(data) {
    return axios({
      method: 'GET',
      url: `/token/${data.id}`,
    })
  },
})
