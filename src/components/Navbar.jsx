import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../images/japan-logo.jpg'

function Navbar(){

    // const [hidden, setHidden] = useState(false)


    


    return <div>

    
    
    <div className='navbar'>

        <div className='abs-left'>
            <div className='nav-inline'>
            <NavLink className='link' exact to='/home' activeClassName="active">
            <img src={logo} alt='logo' className='navbar-logo'></img>
            </NavLink>
            </div>
        </div>
        


        <div className='abs-right'> 
            {/* <div class='nav-inline'>
            <button onMouseOver={()=> setHidden(false)} onMouseOut={()=> setHidden(true)}>Click ME</button>
            </div> */}
            
            

            {/* <div id={hidden ? 'hidden' : ''} onMouseOver={()=> setHidden(false)} onMouseOut={()=> setHidden(true)}> */}
            {/* <div class='nav-inline'>
                <NavLink className='link' exact to='/table' activeClassName="active">Table</NavLink>
            </div>      */}
            <div class='nav-inline'>
                <NavLink className='link' exact to='/kana' activeClassName="active">Kana</NavLink>
            </div>   
            <div class='nav-inline'>
                <NavLink className='link' exact to='/pos' activeClassName="active">PartsOfSpeech</NavLink>
            </div>  
            {/* <div class='nav-inline'>
                <NavLink className='link' exact to='/verb' activeClassName="active">Verb</NavLink>
            </div>
            <div class='nav-inline' >
                <NavLink className='link' exact to='/adjective' activeClassName="active">Adjective</NavLink>
            </div>
            <div class='nav-inline'>
                <NavLink className='link' exact to='/adverb' activeClassName="active">Adverb</NavLink>
            </div> */}
            <div class='nav-inline'>
                <NavLink className='link' exact to='/flashcard' activeClassName="active">Cards</NavLink>
            </div>
            <div class='nav-inline'>
                <NavLink className='link' exact to='/random' activeClassName="active">PracticeVerb</NavLink>          
            </div>  
            <div class='nav-inline'>
                <NavLink className='link' exact to='/reading' activeClassName="active">Reading</NavLink>          
            </div>  
            <div class='nav-inline'>
                <NavLink className='link' exact to='/challenge' activeClassName="active">Challenge</NavLink>          
            </div>  
            <div class='nav-inline'>
                <NavLink className='link' exact to='/kanji' activeClassName="active">Kanji</NavLink>          
            </div>  
            {/* </div> */}
           
        </div>         
    </div>



            <div className='space'>
               
            </div>

    </div>
}


export default Navbar;