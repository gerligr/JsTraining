import React from 'react';
import './App.css';
import ButtonFunction from './components/widgets/ButtonFunction.jsx';
import ButtonCmp from './components/widgets/ButtonCmp';
import ButtonClass from './components/widgets/ButtonClass.jsx';

function App() {
  return (
    <div className="default-text">
        Hello from react! <br/>
        ButtonFunction <ButtonFunction btnLabel="click me" size="100"/><br/>
        ButtonCmp <ButtonCmp btnLabel="click me" /> <br/>
        ButtonClass <ButtonClass btnLabel="click me" /> <br/>
    </div>
  );
}

export default App;
