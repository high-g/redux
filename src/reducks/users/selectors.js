import { createSelectors } from 'reselect'

const usersSelector = (state) => state.users

export const getUserId = createSelectors(
  [usersSelector],
  (state) => state.uid,
)
