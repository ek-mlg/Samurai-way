import React from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Pages} from "./Pages/Pages";
import {store} from "./Redux/state";


const App = () => {

    return (
        <div className="App-wrapper">
            <Header />
            <Pages store={store}/>
        </div>

    );
}

export default App;
