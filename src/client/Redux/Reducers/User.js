export default (state = {}, action) => {
  switch (action.type) {
    case 'SET_USER':
      return state = {
        me: action.user,
        ...state
      }
    case 'ALL_USER':
      return state = {
        all: action.users,
        ...state
      }
    case 'UPDATE_USER':
      const updated = state.all.filter((user) => {
        if(user.username === action.data) {
          return user.status = 1
        }
      })
      return state = {
        all: updated,
        ...state
      }
    case 'CLEAR_USER': 
      return {}
    default:
      return state;
  }
}
