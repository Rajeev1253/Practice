import { configureStore, combineReducers } from "@reduxjs/toolkit";
import expenseReducer from "../features/expenseSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
const persistConfig = {
  key: "root",
  version:1,
  storage,
  // stateReconciler: autoMergeLevel2
};
// const rootReducer = combineReducers({
//   expense: expenseReducer,
// });
const persistedReducer = persistReducer(persistConfig, expenseReducer);
const store = configureStore({
  reducer: {
    root: persistedReducer,
  },
});
export const persistor = persistStore(store);
export default store;
