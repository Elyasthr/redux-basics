import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";
import { getPost } from "./action/post.action";
import { getUser } from "./action/user.action";
//redux 
import rootReducer from './reducers'
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)) //a retirer en version prod
)

store.dispatch(getPost())
store.dispatch(getUser())

ReactDOM.render(

  <Provider store={store}>
    <App />
  </Provider>

  , document.getElementById("root"));
