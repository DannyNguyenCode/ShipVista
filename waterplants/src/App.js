import React from 'react';
import {hot, setConfig} from 'react-hot-loader';
import PlantList from './plants/PlantList';
import './App.css';

setConfig({
    showReactDomPatchNotification: false
})
const App = ()=>(
    <div className="App">
        <PlantList/>
    </div>
)

export default hot(module)(App);