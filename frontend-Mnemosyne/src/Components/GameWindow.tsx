import { useState, useEffect } from 'react';

type GameWindowProp = {
    active: boolean
    wordBankLst: string[] 
    toggleBtnsFunction: (status: boolean) => void
    endFunction: () => void 
    btnList:  React.RefObject<HTMLButtonElement | null>[]
}

function GameWindow({ active, wordBankLst, toggleBtnsFunction, endFunction, btnList} : GameWindowProp) {
    
    const [index, setIndex] = useState(-1)

    const [boxText, setBoxText] = useState("Hello")



    // let lst = ["Banana", "Orange", "Apple", "Mango","Pineapple", "Kiwi", "Grape", "Tomatoe","Seed"]
    let intervalTime = 0.5
    let intervalLength = 4

    async function askQuestion(range : number) {

        await new Promise(res => setTimeout(res, 1500))

        toggleBtnsFunction(false)

        if ((index + range) > wordBankLst.length) {
                setBoxText("Done")
                return
            }
    
        const chosenNum = Math.floor(Math.random() * range)

        switch (chosenNum + 1) {
            case 1:
                setBoxText("What was the 1st word shown?")
                break
            case 2:
                setBoxText("What was the 2nd word shown?")
                break
            case 3:
                setBoxText("What was the 3rd word shown?")
                break
            case (range):
                setBoxText("What was the last word shown?")
                break    
            default:
                setBoxText(`What was the ${chosenNum}th word shown?`)    
        }
        
        console.log(`index: ${index + range}, seq: ${range}`)

        // Randomly pick a correct btn
        const correctBtn = btnList[Math.floor(Math.random() * 4)]

        // Make inner fail() and correct()
        function correct() {
            setBoxText("Correct")
        }

        function incorrect() {
            setBoxText("Incorrect")
        
        }

        function setBtnWord(isCorrectButton: boolean) {
            if (isCorrectButton) {
                return wordBankLst[chosenNum + index + 1]
            }
            else {
                let offset = Math.floor(Math.random() * (range + index + 1)) + 1
                console.log((chosenNum + index + 1) - offset)
                console.log(wordBankLst[(chosenNum + index + 1) - offset])
                return wordBankLst[Math.abs((chosenNum + index + 1) - offset)]
            }
        }

        // Create a loop to go btn list and assign text and scripts to each btn
        btnList.forEach((btn) => {
            if (btn.current! == correctBtn.current!) {
                btn.current!.textContent = setBtnWord(true)
                btn.current!.onclick = correct
            }
            else {
                btn.current!.textContent = setBtnWord(false)
                btn.current!.onclick = incorrect
            }
        })
        
        
        // console.log("this happened 2") 

       
    }

    
    useEffect(() => {
        if (!active) { return }

        const intervalId = setInterval(() => {
            toggleBtnsFunction(true)
            setIndex(prev => {
                // console.log(prev + 1)
                const next = prev + 1
                setBoxText(wordBankLst[next])
                return next})
                
            

        }, intervalTime * 1000)

        const timeoutId = setTimeout(() => {
            clearInterval(intervalId)
            endFunction()
            
        }, (intervalTime * 1000 * intervalLength) + 50)        

        return () => {
            clearInterval(intervalId)
            clearTimeout(timeoutId)   
            askQuestion(intervalLength)
            // setUpBtnsForQuestion(index + intervalLength, intervalLength)
        }
    }, [active]);
    

    
    return (
    <div>
      <div>
        {boxText}
      </div>
    </div>
    )
}

export default GameWindow;