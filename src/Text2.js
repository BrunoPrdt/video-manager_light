import React, { Component } from "react";
import ordersupp from './orderSupp'

class Text2 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {state, handleChange, placeholder} = this.props;
        return (
            <input
                value={state.value}
                onChange={handleChange}
                placeholder={placeholder}
            />
        )
    };
}

export default ordersupp(Text2);
