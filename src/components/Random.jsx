import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import {dictionaryJapanese, dictionaryEnglish, tense, simplePast, politeForm, teForm, simpleNegative} from '../verb-contents'
import Navbar from './Navbar';



function Random(){



  let randomTense = Math.floor(Math.random()*tense.length)
  let random = Math.floor(Math.random()*dictionaryJapanese.length)

  const [japaneseWord, setJapaneseWord] = useState(dictionaryJapanese[random])
  const [englishWord, setEnglishWord] = useState(dictionaryEnglish[random])

  const [input, setInput] = useState('')
  const [wrong, setWrong] = useState()
  const [correct, setCorrect] = useState()
//   const [correct, setCorrect] = useState()
  const [tenseDisplay, setTenseDisplay] = useState(tense[randomTense])
  
  const [polite, setPolite] = useState(politeForm[random])
  const [simplePasts, setSimplePasts] = useState(simplePast[random])
  const [teForms, setTeForms] = useState(teForm[random])
  const [simpleNegatives, setSimpleNegatives] = useState(simpleNegative[random])
  



  function dictionaryForm(event){
    
    console.log(japaneseWord)
    if(tenseDisplay === 'polite'){
      checker(polite)
    }
    if(tenseDisplay === 'simple Past'){
      checker(simplePasts)
    }
    if(tenseDisplay === 'Te-form'){
      checker(teForms)
    }
    if(tenseDisplay === 'simple Negative'){
      checker(simpleNegatives)
    }
   

   
   



   setInput('')
   event.preventDefault() 
  }



  function backToDefault(){
    setWrong(false)
    setCorrect(false)
  }

  

  function checker(tenseParam){
    
    if(input === tenseParam){
      
     
      setCorrect(true)
      setTimeout(backToDefault, 700)

    
        setTenseDisplay(tense(randomTense))
        setJapaneseWord(dictionaryJapanese(random))
        setEnglishWord(dictionaryEnglish(random))
      

      

      
      

      
      
      
      
        
    }else{
      setWrong(true)
      setTimeout(backToDefault, 400)
    }
  }
 


  function onChange(e){
    setInput(e.target.value)

    
    
  }
 


  return (
    <div className='inner-background'>
        
      <Navbar />

        
      <div className='main-body'>
        <h1 style={{color: wrong ? '#B10046' : correct && 'green'}}>Verb Conjugation Practice</h1>
        <div className='random' 
        style={{border: wrong ? '5px #B10046 solid' : correct && '5px green solid'}}>
          <h1>{japaneseWord}</h1>
          <h3>{englishWord}</h3>
          <h2>{tenseDisplay}</h2>
          
          <form>
            <input onChange={onChange} autoFocus='autofocus' value={input}></input> <br></br>
            <button onClick={dictionaryForm} >submit</button>
          </form>
          
        </div>
      </div>
      

      <Footer />
    </div>
  )
}



export default Random;