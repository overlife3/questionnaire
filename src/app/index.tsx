import React from "react";
import { Routing } from "pages";
import { Provider } from "./providers";
import "./index.scss";

const App = () => {
  return (
    <Provider>
      <div className="app">
        <Routing />
      </div>
    </Provider>
  );
};

export default App;
