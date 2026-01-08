import { useState } from 'react'
import '../assets/css/big-button.css'
import '../assets/css/game.css'

import ButtonLink from "../Components/ButtonLink"
import GameWindow from "../Components/GameWindow"

function Game() {
    const [active, setActive] = useState(false)

     function startInterval() {
        setActive(true)
    }
    
    return (
        <div> 
            <h1>
                Game Page
            </h1>

            <div className='game-box'>
                <GameWindow active={active} endFunction={() => setActive(false)}/>
            </div>

            <div className='game-panel'>
                <div className='game-nav-panel'>
                    <ButtonLink routeTo="/" text="Exit!" className='game-btn-panel' />
                </div>
                <div>
                    <button type='button' className='game-btn-panel' onClick={startInterval}>btn 1</button>
                </div>
                <div>
                    <button type='button' className='game-btn-panel' onClick={startInterval}>btn 2</button>
                </div>
                <div>
                    <button type='button' className='game-btn-panel' onClick={startInterval}>btn 3</button>
                </div>
                <div>
                    <button type='button' className='game-btn-panel' onClick={startInterval}>btn 4</button>
                </div>
            </div>
        </div>
    )
}

export default Game;