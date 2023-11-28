import React from 'react'; 
import IndexStyle from '../Button/index.module.scss';

class Button extends React.Component <{buttonLabel: string }> {
    // TODO: is a better way to use props?
    render() {
        return (
            <button className= {IndexStyle.button}>
                {this.props.buttonLabel}
            </button>
        )
    }
}

export default Button;