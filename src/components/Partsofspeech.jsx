import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

function Partsofspeech() {

  let navigate = useNavigate()

  return (
    <div className='inner-background'>
        <Navbar />
        <div className='pos-parent'>
            
                <div className='pos-category'>
                  <div className='pos-div pos-noun'>
                  <h2>NOUNS</h2>
                  <button onClick={()=> navigate('/noun')}>Introduction</button>
                  <button>Noun Conjugation</button>
                  <button>Verbal Nouns</button>
                  <button>Personal Pronouns</button>
                  <button>Demonstrative Pronouns</button>
                  <button>Relational Nouns</button>
                  </div>

                  <div className='pos-div pos-verb'>
                  <h2>VERBS</h2>
                  <button onClick={()=> navigate('/verb')}>Introduction</button>
                  <button>Verb Conjugation</button>
                  </div>

                  <div className='pos-div pos-adj'>
                  <h2>ADJECTIVES</h2>
                  <button onClick={()=> navigate('/adjective')}>Introduction</button>
                  <button>Adjective Conjugation</button>
                  </div>

                  <div className='pos-div pos-adv'>
                  <h2>ADVERBS</h2>
                  <button onClick={()=> navigate('/adverb')}>Introduction</button>
                

                  </div>
                    
                
                    
                    
                </div>
          
            



        </div>

        <Footer />
    </div>
  )
}

export default Partsofspeech