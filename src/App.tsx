import React from 'react';
import './App.css';
import StopWatchScreen from "./stopwatch/StopWatchScreen";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div style={{width:'100%',flex:1, backgroundColor: "gray", justifyContent:"center",alignItems:'center'}}>
                    <StopWatchScreen/>
                </div>
            </header>
        </div>
    );
}

export default App;
