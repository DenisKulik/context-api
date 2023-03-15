import './App.css';
import { useState } from 'react';
import User from './components/User';

function App() {
    const [ user ] = useState('Denis');

    return (
        <div className="App">
            <User user={user}/>
        </div>
    );
}

export default App;
