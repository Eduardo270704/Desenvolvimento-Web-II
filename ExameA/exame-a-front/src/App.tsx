import React, { useState } from "react";
import Form from "./components/Form/Form";
import { Provider } from "./context";
import List from "./components/List/List";

const App: React.FC = () => {
  return (
    <div>
      <Provider>
        <Form />
        <List />
      </Provider>
    </div>
  );
};

export default App;
