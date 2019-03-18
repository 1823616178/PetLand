import { getToken } from '@/utils/auth'
const user = {
  state: {
    token: getToken()
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      window.console.log(state)
      window.console.log(token)
      state.token = token
    }
  }
}

export default user
