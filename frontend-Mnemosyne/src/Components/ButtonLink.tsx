import '../assets/css/big-button.css'
import { Link } from "react-router-dom";


type ButtonLinkProp = {
    routeTo: string;        // where the button navigates to
    text: string;           // text on the button
    className?: string      // optional styling
};

function ButtonLink({ routeTo, text, className } : ButtonLinkProp ) {
    return (
        <Link to={routeTo}> 
            <button className={className}>
                {text}
            </button> 
        </Link>
    )
   
}

export default ButtonLink