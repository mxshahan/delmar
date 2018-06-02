export const SetUser = (user) => ({
  type: 'SET_USER',
  user
});
export const SetAllUser = (users) => ({
  type: 'ALL_USER',
  users
});

export const updateUser = (data) => ({
  type: 'UPDATE_USER',
  data
})

export const ClearUser = () => ({
  type: 'CLEAR_USER'
})