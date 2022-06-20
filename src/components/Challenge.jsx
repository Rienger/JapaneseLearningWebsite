import card from '../challenge-card'
import Navbar from './Navbar';
import Footer from './Footer';

import React, { useState, useEffect } from 'react'
// import Monitor from './Monitor';
import ChallengeModal from './ChallengeModal';
import ChallengeCardDisplay from './ChallengeCardDisplay';
import rightArrow from '../images/right-arrow.png'
import leftArrow from '../images/left-arrow.png'
import completionImage from '../images/areyousure.jpeg'
import restartImage from '../images/itachi.jpg'
import congratsAudio from '../audio/congrats.mp3'
import restartAudio from '../audio/restart.mp3'
import video from '../video/yowai.mkv'

function App() {

  const audio = new Audio(congratsAudio)
  const audioRestart = new Audio(restartAudio)

  const data = JSON.parse(localStorage.getItem('card'))
  
//   const [input, setInput] = useState(0)
  const [dayCounter, setDayCounter] = useState(1)
  const [cardNumber, setCardNumber] = useState(data)
  const [modal, setModal] = useState(false) 
  const [complete, setComplete] = useState()
  const [restart, setRestart] = useState()
  const [playVideo, setPlayVideo] = useState()

  
  useEffect(() => {
    setDayCounter(data)
  },[])

  useEffect(()=> {
    localStorage.setItem('card', JSON.stringify(dayCounter))
  })


 
  let confirmModal = () => {   
    if(complete){
      // setComplete(false)
      setDayCounter(dayCounter + 1)
      setModal(false)  
      setCardNumber(card[dayCounter].day)
      audio.play()
      audio.volume = 0.3
    }
    
    if(restart){
      setDayCounter(1)
      setCardNumber(1)
      setRestart(false)
      setModal(false)
      audioRestart.play()
      audioRestart.volume = 0.4
      setPlayVideo(true)
      setTimeout(()=>{
        setPlayVideo(false)
      },18000)
      
    }
  }

  let completeModal = () => {
    setComplete(true)
    setRestart(false)
    setModal(true)
   }

  let restartModal = () => {
    setRestart(true) 
    setComplete(false)
    setModal(true)
  }

 
  let previous = () => {   
    if(cardNumber<2){
      setCardNumber(dayCounter)
    }else {
      setCardNumber(cardNumber -1)
    }
  }

  let next = () => {
    if(cardNumber>dayCounter-1){
      setCardNumber(1)
    }else {
      setCardNumber(cardNumber +1)
    } 
  }

//   let filter = (e) => {
//     setInput(e.target.value) 
//     console.log(e.target.value)
//   }


  const filteredCards = card.filter(item => {
    return item.day === cardNumber 
    // if(input){
    //   return item.number == input
    // }    
  })

//   const filteredSearch = card.filter((item)=> {
//   return item.number.toLowerCase().includes(input.toLowerCase())  
// })

  // function showIndex(index){
  //   setCardNumber(index+1)
  //   console.log('mabuhay')
  // }



  ///////////// KEYBOARD PRESS //////////////////////////////////

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return() => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })  

  const handleKeyDown = (event) => {
    if(event.keyCode === 39){
      next()
    }
    if(event.keyCode === 37){
      previous()
    }
  }

  return (
    <div className="challenge-parent">
      <Navbar/>
    <div className='challenge-intro'>
        <h1>Challenge</h1>
        <h2>This is called the 100 day Challenge the goal is to memorize 10 words per day for a total span of a 100 days</h2>
    </div>
      

    <div >
    {playVideo && 
    <div className='video-overlay' >
      <video style={{borderRadius: '100%', paddig: '0', marginTop: '50px', }}
      autoPlay src={video} muted height='auto' width='900px'></video>
    </div>
    }
    </div>

      
    <div className='monitor-parent'>
       <div className='monitor-display'>
          {card.map((item, index) => {
              return <div className='monitor-item' 
              onClick={()=>{
                        if(index+1<=dayCounter){
                          setCardNumber(index+1)
                        } else {
                          alert('you have to finish the previous level')
                        }
                        
                      }}
              style={{backgroundColor: index  < dayCounter-1 && 'darkgreen', 
                      color: index === dayCounter-1  && 'red',  
                      transform: index === dayCounter-1 && 'rotate(360deg)',
                                         
                      }}>{item.day}</div>
          })}
      </div>
    </div>

      <div className='monitor-button'>
        <div className='complete-box'>
          <label>CURRENT GOAL: </label>
          <button className='complete-button' onClick={completeModal}>Day {dayCounter} complete</button>         
        </div>
        
        <button className='restart-button' onClick={restartModal}>restart</button>
      </div>

      
      {/* FOR COMPLETING A DAY */}
      <div className='modal-parent'>
        {modal && <ChallengeModal 
        close={setModal}
        confirm={confirmModal}
        background={complete ? completionImage : restartImage}
        japaneseText={restart && '進み続けてさえいれば、遅くとも関係ない。　ーイタチ'}
        englishText={restart && `It does not matter how slowly you go as long as you do not stop.`}
        questionText={restart && 'Sure ka na ba dyan?'}
        restartPosition={!restart}
        />}
      </div>  

      {/* <input placeholder='search Day...' type='number' onChange={filter} value={input}></input> */}


      <div className='card-container'>  
        <img src={leftArrow} onClick={previous} alt='left'></img>   
        
        <div>
        {filteredCards.map(item => {
          
          return <ChallengeCardDisplay 
           
            day = {item.day}

                nihongo1 = {item.nihongo1}
                nihongo2 = {item.nihongo2}
                nihongo3 = {item.nihongo3}
                nihongo4 = {item.nihongo4}
                nihongo5 = {item.nihongo5}
                nihongo6 = {item.nihongo6}
                nihongo7 = {item.nihongo7}
                nihongo8 = {item.nihongo8}
                nihongo9 = {item.nihongo9}
                nihongo10 = {item.nihongo10}

                english1 = {item.english1}
                english2 = {item.english2}
                english3 = {item.english3}
                english4 = {item.english4}
                english5 = {item.english5}
                english6 = {item.english6}
                english7 = {item.english7}
                english8 = {item.english8}
                english9 = {item.english9}
                english10 = {item.english10}

            
          />
        })}
        </div>
       
        <img src={rightArrow} onClick={next} alt='right'></img>
      </div>
      <Footer />
    </div>
  );
}

export default App;
