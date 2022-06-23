import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import hiragana from '../images/hiragana_chart.jpg'
import katakana from '../images/katakana_chart.jpg'

function Kana() {
  return (
    <div className='inner-background'>
        <Navbar />
            <div className='kana-parent'>
                <div className='kana-div'>
                    <h1>LEARN YOUR HIRAGANA</h1>   

                    <iframe width="800" height="454" src="https://www.youtube.com/embed/6p9Il_j0zjc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>

                    <img src={hiragana} width='800' alt='hiragana'></img>
                </div>

                <div className='kana-div'>
                    <h1>LEARN YOUR KATAKANA</h1>   

                    <iframe width="800" height="454" src="https://www.youtube.com/embed/s6DKRgtVLGA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>

                    <img src={katakana} width='800' alt='katakana'></img>
                </div>
                






            </div>
           











        <Footer />

    </div>
  )
}

export default Kana