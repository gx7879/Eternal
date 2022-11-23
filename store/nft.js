export const actions = {
  async refreshNft(context, activity) {
    if (activity.length === 0) return
    this._vm.$loading.open()
    const activityCopy = [...activity]
    const idCollect = activityCopy.map((item) => item.token_id).join(',')
    try {
      const { data } = await this.$api.index.nftRefresh({ id: idCollect })
      data.response.forEach((nft) => {
        activityCopy.forEach((item, index) => {
          if (item.token_id === nft.token_id) {
            activityCopy[index] = Object.assign({}, item, nft)
          }
        })
      })
      return activityCopy
    } catch (error) {
      console.log(error)
      return []
    } finally {
      this._vm.$loading.hide()
    }
  },
}
