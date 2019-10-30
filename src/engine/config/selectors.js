import { getIn } from 'immutable';

// Store keys
const ui = Object.freeze({
  isLoading: (state) => getIn(state, ['ui', 'loading'], false),
});

const user = Object.freeze({
  user: (state) => getIn(state, ['user', 'data'], false),
});

export const selectors = Object.freeze({
  ui,
  user,
});
