import Colors from "./Components/colors";
import ResetButton from "./Components/resetButton";
import { ColorProvider } from "./contexts/Context";

function App() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <ColorProvider>
        <Colors />
        <ResetButton />
      </ColorProvider>
    </div>
  );
}

export default App;
