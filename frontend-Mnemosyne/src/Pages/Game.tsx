import { useState, useRef, useEffect } from 'react'
import '../assets/css/big-button.css'
import '../assets/css/game.css'

import ButtonLink from "../Components/ButtonLink"
import GameWindow from "../Components/GameWindow"

type GameProp = {
    wordBankLst : React.RefObject<string[]>
}

function Game( {wordBankLst} : GameProp) {
    const [active, setActive] = useState(false)
    

    const btn1Ref = useRef<HTMLButtonElement>(null)
    const btn2Ref = useRef<HTMLButtonElement>(null)
    const btn3Ref = useRef<HTMLButtonElement>(null)
    const btn4Ref = useRef<HTMLButtonElement>(null)

    const btnsLst = [btn1Ref, btn2Ref, btn3Ref, btn4Ref]
    

    function startInterval() {
        setActive(true)
    }

    function toggleBtns(status : boolean) {
        if (btn1Ref.current == null || btn2Ref.current == null 
            || btn3Ref.current == null || btn4Ref.current == null) {
            return;
        }
        
        btn1Ref.current.disabled = status
        btn2Ref.current.disabled = status
        btn3Ref.current.disabled = status
        btn4Ref.current.disabled = status
    }

    function test() {
        console.log(wordBankLst.current)
    }

    function question(index : number, lenOfSequence : number) {
        console.log(`index: ${index}, seq: ${lenOfSequence}`)

        // Randomly pick a correct btn
        const correctBtn = btnsLst[Math.floor(Math.random() * 4)]

        // Make inner fail() and correct()

        // Create a loop to go btn list and assign text and scripts to each btn
        correctBtn.current!.textContent = wordBankLst.current[index]

    }

    
    return (
        <div> 
            <h1>
                Game Page
            </h1>

            <div className='game-box'>
                <GameWindow active={active} wordBankLst={wordBankLst.current} 
                toggleBtnsFunction={(status: boolean) => toggleBtns(status)}
                endFunction={() => setActive(false)}
                setUpBtnsForQuestion={(index: number, len: number) => question(index, len)}
                btnList={btnsLst!}/>

                
            </div>
            <button type='button' className='game-btn-panel' onClick={startInterval}>Start Next Sequence</button>
            <div className='game-panel'>
                <div className='game-nav-panel'>
                    <ButtonLink routeTo="/" text="Exit!" className='game-btn-panel' />
                </div>
                <div>
                    <button type='button' ref={btn1Ref} className='game-btn-panel' >btn 1</button>
                </div>
                <div>
                    <button type='button' ref={btn2Ref} className='game-btn-panel' >btn 2</button>
                </div>
                <div>
                    <button type='button' ref={btn3Ref} className='game-btn-panel' >btn 3</button>
                </div>
                <div>
                    <button type='button' ref={btn4Ref} className='game-btn-panel'>btn 4</button>
                </div>
            </div>
        </div>
    )
}

export default Game;