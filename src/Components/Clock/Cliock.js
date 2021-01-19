import React, { Component } from 'react';

class Clock extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.timerID = SetInterval(
            () => this.tick(),
            1000
        )

    }

    componentWillUnmount() {
        clearInterval(this.timerID)

    }

    tick() {
        this.setState({
            date: new Date()
        })
    }
    render() {
        return (
            <div className ="Clock">
                {this.state.date.toLocalTimeString()}
                Clock
            </div>
        )
    }
}



export default Clock;