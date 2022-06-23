import { Screen } from "./components/Screen";
import { Button } from "./components/Button";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(5.2);

  return (
    <div className="App">
      <Screen currency="dolar" value={value} />
      <div className="d-flex justify-content-evenly">
        <Button setValue={setValue}>Dolar</Button>
        <Button setValue={setValue}>Euro</Button>
        <Button setValue={setValue}>Libra</Button>
      </div>
    </div>
  );
}

export default App;
