import React from "react";

const orderSupp = WrappedComponent => {

    class OrderSupp extends React.Component {
        state = {
            value: ""
        };
        handleChange = e => {
            this.setState({
                value: e.target.value
            })
        };
        render() {
            return (
                <WrappedComponent
                    {...this.props}
                    state={this.state}
                    handleChange={this.handleChange}
                />
                )
        }
    }
    return OrderSupp
}

export default orderSupp