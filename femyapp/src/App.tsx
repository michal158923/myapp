import { useState } from 'react';
import Alert from './components/Alert'
import Button from './components/Button'

function App() {

  const [alertFlag, setAlertFlag] = useState(false);

  return (
    <>
      {alertFlag &&<Alert onClose={() => setAlertFlag(false)}/>}
      <Button onClick={() => setAlertFlag(true)}/>

    </>
  );
}

export default App;
