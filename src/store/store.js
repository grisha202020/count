import {createStore} from "redux";
import { reducerCounter } from "../reducer/reducerCounter";


 const store = createStore(reducerCounter);

 export default store;