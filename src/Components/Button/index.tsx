import React from 'react'; 
import IndexStyle from '../Button/index.module.scss';
import { type } from 'os';

class Button extends React.Component <{buttonLabel: string, type?: "button" | "submit" | "reset" | undefined, onClick?: () => void }> {
    // TODO: is a better way to use props?

    render() {
        // const {type = "button"} = this.props.type;
        return (
            <button onClick={this.props.onClick} type={this.props.type} className= {IndexStyle.button}>
                {this.props.buttonLabel}
            </button>
        )
    }
}

export default Button;