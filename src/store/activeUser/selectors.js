export function selectActiveUser(state) {
  return state.activeUser.user;
}

export function selectIsAuthenticated(state) {
  console.log('Select token', state);
  return !!state.activeUser.token;
}