import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import studyImage from '../images/study.jpg'


function Home() {
  return (
    <div className='home-component'>
        <Navbar />
        <div className='home-body'>

        
       
            <h1>Yana Nihongo</h1>
            <p style={{color: 'darkgreen', fontWeight: 'bold', textAlign: 'center'}}>The goal of Yana Nihongo is to be able to provide study resources and introduce challenges to make learning more fun and interactive. We want to lay the main foundation of your study material and also impart guides on how to start as a beginner.</p>

            <h2>I WANT TO LEARN JAPANESE!</h2>

            <p>
            If you follow the instructions in this over the top, step-by-step guide, you will reach your goal of Japanese fluency.
            </p>

            <p>
            However, this journey is going to take a lot of effort and hard work on your part. Anyone who tells you learning a language is going to be easy is either misinformed or trying to sell you something. And eventually, after the honeymoon phase of learning wears off, progress feels slower. You burn out. Sh*t hits the fan. If you've ever tried learning something new, you know exactly what I'm talking about.
            </p>

            <p>
            Instead, you need to do things the hard way (i.e. the correct way) right from the start. 
            </p>


            <img src={studyImage} alt='benkyou'></img>


            <h2>JUST BECAUSE WE'RE DOING IT RIGHT DOESN'T MEAN IT HAS TO BE INEFFICIENT.</h2>

            <p>
            This method for learning Japanese starts at the very beginning. I assume you have zero knowledge of the Japanese language and guide you through each step. I'll cover reading, writing, speaking, and listening. And we explain what you should use, when, and why.
            </p>

            <p>
            This should be everything you need to progress, that way you don't use all of that fresh enthusiasm you're feeling on planning how to learn, and instead spend it on actual learning.
            </p>

            <p>
            Our goal is to reach Japanese fluency as directly as possible. Unlike a teacher or a textbook, we have the freedom to be ruthless in the path we take to get there.
            </p>


            <h2>ZERO KNOWLEDGE OF JAPANESE</h2>

            <p>
            Welcome to learning Japanese! This section is for the true beginner. You know little-to-no Japanese. Maybe a "konnichiwa" here and a "baka" there. These first steps you take are especially important because they're going to set a foundation you can build off of.
            </p>

            <p>
            The more deliberate your steps, the easier everything that follows will be.
            </p>

            <p>
            Carefully completing this section is going to be necessary if you want to avoid the thing that takes down most learners: the intermediate wall. Instead, take your time on these foundational steps. What feels slow now is actually speed later on.
            </p>

         

            <div className='home-summary'>

              <h2>Hiragana</h2>
                <p>
                The ability to read hiragana is going to be a prerequisite for most beginner Japanese textbooks and resources. It's the first thing you learn in a traditional classroom. Surprisingly, I agree with everyone else. This is a good place to start.
                </p>

             

              <h2>Katakana</h2>
                <p>
                Katakana tends to give learners more trouble than hiragana. This is because it seems to be used less than hiragana and kanji, especially at the beginning stages. Later on, katakana will appear more frequently, but for now simply being able to read katakana is enough.
                </p>

              <h2>5000 Vocabulary</h2>
                <p>
                What Is The Magic Vocabulary Number?
                When you think about the rather small amount of words that are needed on a day to day basis for communication, you begin to realize that fluency is vastly different from an adult level command of a native language.

                Think about a four year old kid who can communicate with friends and family with few problems.

                They know approximately 5,000 words [source] and even though they still make the occasional grammar mistake, for all intents and purposes they are fluent!
                </p>

              <h2>Parts of Speech</h2>
                <p>
                Most people go into a textbook with zero knowledge and wind up spending a large chunk of their time looking up words they don't know. How much of a sentence is vocabulary? Depending on the length, it's easy to answer "more than 80%."

                So when you're learning grammar with a textbook, coming into it with prior vocabulary knowledge knowing <span>nouns</span>, <span>verbs</span>, <span>adjectives</span>, <span>adverbs</span> and its <span>conjugation</span> brings you to that 80%.
                </p>

              <h2>Sentence Structure</h2>
                <p>
                Most people find Japanese sentence structure to be difficult and confusing.

This is completely understandable considering how fundamentally different it is to other languages, but the truth is that Japanese grammar is actually incredibly logical, it just needs to be looked at from the right angle.
                </p>

              <h2>2000 Kanji</h2>
                <p>
                The most difficult thing about learning Japanese is kanji. At least, that's what people say. But trying to save it or brush it off until later isn't going to help you learn Japanese. Almost everything uses kanji, making it one of the most important aspects of learning this language. Your learning quality of life will drop drastically if you choose to ignore it.
                </p>

              <h2>Reading & Listening</h2>
                <p>
                As the old saying goes: If you can’t go to Japan, you’ll just have to bring Japan to you. I cannot emphasize of how important reading and listening is in learning a new language as it greatly expands your knowledge of the language faster. Either by listening to your favorite Japanese music or watching the latest anime. Make sure to make your learning journey interesting so it doesn't feel like a chore.
                </p>

              <h2>Talking</h2>
                <p>
                By finding opportunities to speak Japanese every day, you can make sure that you’re able to reach or retain a high standard of fluency. Of course, you might think that it’s easier said than done—if so, good news! With a bit of careful planning, you can still have an active Japanese-speaking life, no matter where you are in the world from Australia to Zimbabwe. Thanks to today's technological advancement there are applications that lets you talk with native speakers for free, you heard it right <span>FOR FREE!</span>I present to you <span>Hello Talk</span>.
                </p>
            </div>
            

 

        
        </div>
        <Footer />
    </div>
  )
}

export default Home