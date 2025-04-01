import { useContext } from 'react';
import MessageContext from './context/MessageContext';
import './App.css';

function App() {
  const message = 'Hello World';

  return (
    <MessageContext.Provider value={message}>
      <ComponentA></ComponentA>
    </MessageContext.Provider>
    
  );
}

function ComponentA() {
  return (
    <div>
      <ComponentB></ComponentB>
    </div>
  );
}

function ComponentB() {
  return (
    <div>
      <ComponentC></ComponentC>
    </div>
  );
}

function ComponentC() {
  const message = useContext(MessageContext)
  return(
    <div>
      <h1>Message: {message}</h1>
    </div>
  );
}

export default App;
