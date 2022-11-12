export const state = () => ({
  walletObj: {},
  fetching: false,
  web3: null,
})

export const mutations = {
  SETWALLET(state, payload) {
    // state.walletObj = payload
    Object.keys(payload).forEach((item) => {
      state.walletObj[item] = payload[item]
    })
  },
  SETWEB3(state, payload) {
    state.web3 = payload
  },
  SETFETCHING(state, payload) {
    state.fetching = payload
  },
}

export const actions = {}
