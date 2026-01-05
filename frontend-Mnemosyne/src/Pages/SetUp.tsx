import "../Assets/css/setup.css";
import ButtonLink from "../Components/ButtonLink"
import '../assets/css/big-button.css'

function SetUp() {
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
                    <input type="text"/>
                </div>
                <button type="button">Save</button>
            </div>
            <ButtonLink routeTo="/Game" text="Continue" className="big-button"/>
            <ButtonLink routeTo="/" text="Go Back!" className="big-button"/>


        </div>
    )

}

export default SetUp;