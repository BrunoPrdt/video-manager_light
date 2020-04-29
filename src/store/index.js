/**
 * src/store/index.js
 * @author Bruno Prdt
 */
import { createStore } from "redux";
import routeReducer from '../reducers'

const store = createStore(routeReducer, {});
export default store;