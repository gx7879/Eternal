/* eslint-disable camelcase */
export const state = () => ({
  walletObj: {},
  fetching: false,
  web3: null,
  allData: {},
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
  SETDATA(state, payload) {
    state.allData = payload
  },
}

export const actions = {
  async nuxtServerInit({ commit }, { $api }) {
    try {
      const { data } = await $api.index.init()
      commit('SETDATA', data.response)
    } catch (error) {
      console.log(error)
    }
  },
}

export const getters = {
  metaData(state) {
    const { meta_title, meta_description, meta_keywords, fb_og } = state.allData
    return {
      meta_title,
      meta_description,
      meta_keywords,
      fb_og,
    }
  },
  contractSetting(state) {
    return state.allData.contract_settings
  },
}
