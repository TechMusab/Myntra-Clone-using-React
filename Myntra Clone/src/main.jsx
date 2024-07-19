import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";
import Bag from "./routes/bag.jsx";
import Home from "./routes/home.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import store from "./store/index.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path:"/home", element: <Home />},
      { path: "/bag", element: <Bag /> }],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
