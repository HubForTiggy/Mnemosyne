import ButtonLink from "../Components/ButtonLink"
import "../Assets/css/wellcome.css";
import '../assets/css/big-button.css'

function Wellcome() {
    return (
        <div>
            <h1 className="wellcome-title-text">
                Wellcome To Mnemosyne
            </h1>
            <ButtonLink routeTo="/Setup" text="Start!" className="big-button"/>
            <div className="read-the-docs">
                log in
            </div>
        </div>
    )

}

export default Wellcome;