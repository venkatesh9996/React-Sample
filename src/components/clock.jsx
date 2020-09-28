
import React, { Component } from 'react';


class Clock extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = { date: new Date() }
    }

    componentDidMount() {
        this.timeId = setInterval(
            () => this.tick(),
            1000)
    }
    componentWillUnmount() {
        clearInterval(this.timeId)
    }
    tick() {
        this.setState({ date: new Date() });
    }
    render() {
        return (
            <div>
                <h5>Hello, world!</h5>
                <h6>{this.state.date.toLocaleTimeString()}</h6>
            </div>
        );
    }
}
export default Clock;