import React from "react";
import ReactDOM from "react-dom/client";
import { compose, createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { App } from "./components/App/App";
import { rootReducer } from "./services/rootReducer";
import { socketMiddleware } from "./services/middleware/socketMiddleware";
import { wsActions } from "./services/actions/wsActions";

// const composeEnhancers =
//   typeof window === "object" && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//     : compose;

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, socketMiddleware(wsActions))
);
export const store = createStore(rootReducer, enhancer);

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
