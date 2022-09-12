import React, {useState} from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom'

function Partsofspeech() {

  let navigate = useNavigate()
  const [posType, setPosType] = useState()

 

  return (
    <div className='inner-background'>
        <Navbar />
        <div className='pos-parent'>
            
                <div className='pos-category'>

                  <div id='noun' className='pos-div pos-noun' onClick={()=> navigate('/pos/noun/intro')} onMouseEnter={()=>{setPosType('noun')}}>
                    <h2>NOUNS</h2>
                    <div className='pos-div-icon'><ion-icon name="body-outline"></ion-icon>  </div>   
                    <h3 className={''}>Liana</h3>
                  </div>

                  <div id='verb' className='pos-div pos-verb' onClick={()=> navigate('/pos/verb')}>
                    <h2>VERBS</h2>
                    <div className='pos-div-icon'> <ion-icon name="bicycle-outline"></ion-icon></div>   
                    <h3>Rose</h3>
                  </div>

                  <div id='adj' className='pos-div pos-adj' onClick={()=> navigate('/pos/adjective')}>
                    <h2>ADJECTIVES</h2>
                    <div className='pos-div-icon'><ion-icon name="color-palette-outline"></ion-icon></div>   
                    <h3>Manalanzan</h3>
                  </div>

                  <div id='adv' className='pos-div pos-adv' onClick={()=> navigate('/pos/adverb')}>
                    <h2>ADVERBS</h2>
                    <div className='pos-div-icon'><ion-icon name="library-outline"></ion-icon></div>   
                    <h3>Rienger</h3>
                  </div>
                    
                
                    
                    
                </div>



                <div className='sentence-structure'>
                
                  <div><h2>SENTENCE STRUCTURE</h2></div>
                  
                  <div className='pos-div-icon'><ion-icon name="analytics-outline"></ion-icon></div>
                </div>
          
            



        </div>

        <Footer />
    </div>
  )
}

export default Partsofspeech