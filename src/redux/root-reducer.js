// Base reducer object that represents all of the state of our application so this root reducer will end
import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
// the same of localstorage
import storage from "redux-persist/lib/storage";

import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducer";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cart"], // all of reducers that we'd want to persist
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
});

/*now with persistence capabilities */
export default persistReducer(persistConfig, rootReducer);