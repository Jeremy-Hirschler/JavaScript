import './App.css';
import { Transition } from 'react-transition-group';
import {useState, useRef} from 'react';


function App() {

  const [inProp, setInProp] = useState(false);
  const nodeRef=useRef(null)

  return (
    <div className="App">
      <Transition nodeRef={nodeRef}
      timeout={500}
      in={inProp}
      >
        <h3>hello</h3>

      </Transition>
      <button onClick={()=> setInProp(true)}>Click here</button>
    </div>
  );
}

export default App;
