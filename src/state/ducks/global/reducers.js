import * as types from './types'
import createReducer from '../../utils/createReducer'
import theme from '../../../components/styles/theme'

const initialState = {
  currentTheme: theme
};

const actionBarReducer = createReducer(initialState)({
  [types.SET_CURRENT_THEME]: (state, action) => ({
      ...state,
      currentTheme: action.val
    })
});

export default actionBarReducer;

