import { createStore } from "redux";
import rootReducer from "./components/reducers/rootReducer.js";

const store = createStore(rootReducer);

export default store;