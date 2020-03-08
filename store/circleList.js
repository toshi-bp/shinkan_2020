export const state = () => ({
  isMoreVisible: {
    physical: false,
    musical: false,
    cultual: false
  }
})

export const mutations = {
  setVisible(state, type) {
    state.isMoreVisible = {
      ...state.isMoreVisible,
      [type]: true
    }
  }
}
