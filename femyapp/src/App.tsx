import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import TileSet from "./components/TileSet";

function App() {
  const [alertFlag, setAlertFlag] = useState(false);

  return (
    <>
      <TileSet/>
      {alertFlag && <Alert onClose={() => setAlertFlag(false)} />}
      <Button onClick={() => setAlertFlag(true)} />
    </>
  );
}

export default App;
