import React from 'react'

function ChallengeModal(props) {
  return (
    <div>
      <div className='modal-overlay'></div>
      <div className='modal-container' style={{backgroundImage: `url(${props.background})`, 
      backgroundPosition: props.restartPosition ? 'center -10px' : 'center'}}>
        <h1>{props.japaneseText}</h1>
        <h1>{props.englishText}</h1>
        <h1>{props.questionText}</h1>
        {/* <h1>Are you sure you've memorized those shits?</h1> */}
        
        <div className='modalButton-container'>
          <button className='cancel-button' onClick={()=> props.close(false)} >cancel</button>
          <button className='confirm-button' onClick={props.confirm}>confirm</button>
        </div>

      </div>

    </div>
  )
}

export default ChallengeModal