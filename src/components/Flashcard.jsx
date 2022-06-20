import React, { useState } from 'react'
import Footer from './Footer'
// import { useNavigate } from 'react-router-dom'
import Card from './Card'
import {arrayEnglish, arrayNihongo} from '../card-content'
import Navbar from './Navbar'




function Flashcard(){
   
   
  
    let arrayValues = arrayEnglish.length

    const [random, setRandom] = useState(Math.floor(Math.random()*arrayValues))
    const [active, setActive] = useState(false)  
    const [counter, setCounter] = useState(0)
    const [back, setBack] = useState(arrayEnglish[counter])
    const [front, setFront] = useState(arrayNihongo[counter])

    
    function transform(){
        return setActive(!active)
        
    }


    
    function previousCard(){
        
        
        if (active === true){
            if (counter > 0) { 
                setCounter(counter - 1)   
                setBack(arrayNihongo[counter-1])      
                setFront(arrayEnglish[counter-1])     
                    
            }  else if (counter <= 0) {
                setCounter(arrayValues-1)
                setBack(arrayNihongo[arrayValues-1])      
                setFront(arrayEnglish[arrayValues-1])
            }
    
        } else {
            if (counter > 0) { 
                setCounter(counter - 1)   
                setBack(arrayEnglish[counter-1])      
                setFront(arrayNihongo[counter-1])     
                    
            }  else if (counter <= 0) {
                setCounter(arrayValues-1)
                setBack(arrayEnglish[arrayValues-1])      
                setFront(arrayNihongo[arrayValues-1])
            }
        }
                
    }
   
    function nextCard(){
       

        if (active === true){
            if (counter < arrayValues-1){
                setCounter(counter + 1)  
                setBack(arrayNihongo[counter+1])      
                setFront(arrayEnglish[counter+1])
                
            } else if (counter >= arrayValues -1){
                setCounter(0)
                setBack(arrayNihongo[0])      
                setFront(arrayEnglish[0])
            }
        } else if (active === false){
            if (counter < arrayValues-1){
                setCounter(counter + 1)  
                setBack(arrayEnglish[counter+1])      
                setFront(arrayNihongo[counter+1])
                
            } else if (counter >= arrayValues -1){
                setCounter(0)
                setBack(arrayEnglish[0])      
                setFront(arrayNihongo[0])
            }
        }          
    }



    
        function generateRandomNumber(){
             
            setRandom(Math.floor(Math.random()*arrayValues))
            setCounter(random)        
            setFront(arrayNihongo[random])
            setBack(arrayEnglish[random]) 

            if (active === true){
               
                    setBack(arrayNihongo[random])      
                    setFront(arrayEnglish[random])              
                }
             else if (active === false){
                        
                    setBack(arrayEnglish[random])      
                    setFront(arrayNihongo[random])          
                }                         
            console.log(random)
        }




       


        const handleKeyDown = (event) => {
            // right arrow 
            if(event.keyCode === 39){
                console.log('A key was pressed', event.keyCode);
                nextCard()
            } 
            // left arrow
            if(event.keyCode === 37){
                previousCard()
            }
            // enter key
            if(event.keyCode === 13){
                transform()
            }
            // R key
            if(event.keyCode === 82){
                generateRandomNumber()
            }
            
          };
        
          React.useEffect(() => {
            window.addEventListener('keydown', handleKeyDown);

            // cleanup this component
            return () => {
              window.removeEventListener('keydown', handleKeyDown);
            };
          },);
    
    return (
        
        <div className='inner-background'>
            
            <Navbar />

            <div className='shortcut-key'>
                <h2>Shortcut Key</h2>
                <p><span className='keyboard'>R</span> <span>Start Random</span></p>
                <p><span className='keyboard'>enter</span><span>Card Flip</span></p>
                <p><span className='keyboard'>left arrow</span>/<span className='keyboard'>right arrow</span><span>Next or Previous</span></p>
            </div>

            <div className='flashcard-body'>
            
                {/* <h1 className={`flashcard-display ${defaultNihongo ? 'flip' : ''}`} onClick={transform}> {active ? back : front}</h1>   */}
                <div className='flashcard-random-button'>
                    <button onClick={generateRandomNumber}>Start Random</button>
                </div>
                
                <Card 
                back={back}
                front={front} 
                flip={transform}
                activating={active}                             
                />


            <div className='span'>
                <span className='arrow' onClick={previousCard}>ᐊ</span>
                <span> {counter+1}/{arrayEnglish.length} </span>
                <span className='arrow' onClick={nextCard}>ᐅ</span>
            </div>
                
            </div>
            

            

            <Footer />
            
        </div>
        
    )
}



export default Flashcard;

