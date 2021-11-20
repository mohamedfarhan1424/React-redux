import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import persistReducer from "redux-persist/es/persistReducer";
import { reducer } from "./reducer";
import storage from 'redux-persist/lib/storage';
import persistStore from "redux-persist/es/persistStore";

const persist=persistReducer({key:'root',storage},reducer)
export const store=createStore(persist,applyMiddleware(logger));

export const persistor=persistStore(store);