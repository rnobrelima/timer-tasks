import React from 'react'; 
import IndexStyle from '../Button/index.module.scss';
import { type } from 'os';

class Button extends React.Component <{buttonLabel: string, type?: "button" | "submit" | "reset" | undefined }> {
    // TODO: is a better way to use props?

    render() {
        // const {type = "button"} = this.props.type;
        return (
            <button type={this.props.type} className= {IndexStyle.button}>
                {this.props.buttonLabel}
            </button>
        )
    }
}

export default Button;