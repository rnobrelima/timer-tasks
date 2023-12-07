import IndexStyle from '../Button/button.module.scss';

interface Props {
    type?: "button" | "submit" | "reset" | undefined, 
    onClick?: () => void 
    buttonLabel?: string
}

function Button ( {onClick, type, buttonLabel} : Props) {
    return (
        <button onClick={onClick} type={type} className= {IndexStyle.button}>
            { buttonLabel }
        </button>
    )
}

export default Button;