import { combineReducers } from 'redux';
import { reducer as form} from 'redux-form';

import HeaderNavBar from './headernavbarReducer';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  form,
  HeaderNavBar
});

export default rootReducer;