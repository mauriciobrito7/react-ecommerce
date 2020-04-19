// Base reducer object that represents all of the state of our application so this root reducer will end
import { combineReducers } from 'redux'

import userReducer from './user/user.reducer'

export default combineReducers({
    user: userReducer
})