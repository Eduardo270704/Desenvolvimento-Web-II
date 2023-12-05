import Form from "./components/Form";
import List from "./components/List";
import { Provider } from "./contexts";

function App() {
  return (
    <div>
      <Provider>
        <Form />
        <List />
      </Provider>
    </div>
  );
}

export default App;
