import "../assets/css/setup.css";
import ButtonLink from "../Components/ButtonLink"
import '../assets/css/big-button.css'

import { useRef, useState } from 'react'

type SetUpProp = {
    wordBankLst : React.RefObject<string[]>
}

function SetUp( {wordBankLst} : SetUpProp) {

    const [sentenceBoxVal, setSentence] = useState("")

    const sentenceBox = useRef<HTMLInputElement>(null)
    

    const fiilWordBank = (e: React.ChangeEvent<HTMLInputElement> ) => {
        console.log(e.currentTarget.value)
        setSentence(e.currentTarget.value)
    }

    const undateSentence = ()  => {
        const words = sentenceBoxVal.split(" ")
        wordBankLst.current = words

        sentenceBox.current!.value = ""
        setSentence("")
    }

    return (
        <div>
            <h1 className="setup-title-text">
                Set Up Game 
            </h1>
            <div className="setup-box">
                <div>
                    <h2>Game Mode</h2>
                    <p>Recall</p>
                    <input type="checkbox"/>
                    <p>Reasoning</p>
                    <input type="checkbox"/>

                    <h2>Duration of Card Shown</h2>
                    <input type="text"/>

                    <h2>Cards Shown Per Sequence</h2>
                    <input type="text"/>

                    <h2>Words/Sentence to Practice</h2>
                    <input type="text" ref={sentenceBox} onChange={fiilWordBank}/>
                </div>
                <button type="button" onClick={undateSentence}>Save</button>
            </div>
            <ButtonLink routeTo="/Game" text="Continue" className="big-button"/>
            <ButtonLink routeTo="/" text="Go Back!" className="big-button"/>


        </div>
    )

}

export default SetUp;