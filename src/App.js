import React from 'react'
import './App.css';
import Header from './components/Header';
import { Language } from './components/Language';
import { Photo } from './components/Photo';
function App() {
    return (
        <div>
            <Header></Header>
            <Language></Language>
            <div className='pht'>
            <Photo></Photo>
            </div>
        </div>
    );

}
export default App;