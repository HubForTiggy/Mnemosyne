import { useState, useEffect } from 'react';

type GameWindowProp = {
    active: boolean 
    endFunction: () => void 
}

function GameWindow({ active, endFunction} : GameWindowProp) {
    //const [active, setActive] = useState(false)
    const [index, setIndex] = useState(-1)

    let lst = ["Banana", "Orange", "Apple", "Mango","Pineapple", "Kiwi", "Grape", "Tomatoe","Seed"]

    let intervalTime = 2
    let intervalLength = 4

    function getWord() {
        if (index < 0) {
            return "Hello"
        }
        else if (index >= lst.length ) {
            return "Done"
        }
        else {
            return lst[index]
        }
    }

    useEffect(() => {
        if (!active) { return }

        const intervalId = setInterval(() => {
            setIndex(prev => {
                // console.log(prev + 1)
                return prev + 1})

        }, intervalTime * 1000)

        const timeoutId = setTimeout(() => {
            clearInterval(intervalId)
            endFunction()
        }, (intervalTime * 1000 * intervalLength) + 0.1)        

        return () => {
            clearInterval(intervalId)
            clearTimeout(timeoutId)
        }
    }, [active]);

    
    return (
    <div>
      <div>
        {getWord()}
      </div>
    </div>
    )
}

export default GameWindow;