export default (axios) => ({
  nonce(data) {
    return axios({
      method: 'GET',
      url: '/api/v1/auth/nonce',
      params: data,
    })
  },
  login(data) {
    return axios({
      method: 'POST',
      url: '/api/v1/auth/login',
      data,
    })
  },
  campaigns() {
    return axios({
      method: 'GET',
      url: '/api/v1/passport/eth/campaigns',
    })
  },
})
