import '../assets/css/big-button.css'
import '../assets/css/game.css'
import ButtonLink from "../Components/ButtonLink"

function Game() {
    return (
        <div> 
            <h1>
                Game Page
            </h1>

            <div className='game-box'>

            </div>

            <div className='game-panel'>
                <div className='game-nav-panel'>
                    <ButtonLink routeTo="/" text="Exit!" className='game-btn-panel' />
                </div>
                <div>
                    <button type='button' className='game-btn-panel'>btn 1</button>
                </div>
                <div>
                    <button type='button' className='game-btn-panel'>btn 2</button>
                </div>
                <div>
                    <button type='button' className='game-btn-panel'>btn 3</button>
                </div>
                <div>
                    <button type='button' className='game-btn-panel'>btn 4</button>
                </div>
            </div>
        </div>
    )
}

export default Game;