import React from 'react'
import Verify from './Verify';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Display from './Display';
import Noun from './Noun';
import Verb from './Verb';
import Adjective from './Adjective';
import Adverb from './Adverb';
import Flashcard from './Flashcard'
import Card from './Card'
import Random from './Random';
import Reading from './Reading'
import Home from './Home';
import Challenge from './Challenge';
import Quotes from './Quotes'
import Kana from './Kana'
import Partsofspeech from './Partsofspeech';
import ScrollToTop from './ScrollToTop';




function App(){
    return(
        <Router>
            <ScrollToTop />
            <Routes>

            
                <Route path='/' element={<Verify />}></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/table' element={<Display />}></Route>
                <Route path='/noun' element={<Noun />}></Route>
                <Route path='/verb' element={<Verb />}></Route>
                <Route path='/adjective' element={<Adjective />}></Route>
                <Route path='/adverb' element={<Adverb />}></Route>
                <Route path='/flashcard' element={<Flashcard />}></Route>
                <Route path='/card' element={<Card />}></Route>
                <Route path='/random' element={<Random />}></Route>
                <Route path='/reading' element={<Reading />}></Route>
                <Route path='/challenge' element={<Challenge />}></Route>
                <Route path='/kana' element={<Kana />}></Route>
                <Route path='/quotes' element={<Quotes />}></Route>
                <Route path='/pos' element={<Partsofspeech />}></Route>

            </Routes>         
           
        </Router>
            
    )
}


export default App;