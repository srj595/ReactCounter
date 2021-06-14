import React from 'react';
import Counter from './Counter';


class CounterCounter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0

        }
    }

    incCounter = () => {


        console.log("button clicked", this.state.count)
        this.setState({
            count: this.state.count + 1

        });
    }
    decCounter = () => {
        this.setState({
            count: this.state.count - 1

        });
    }
    conReset = () => {
        this.setState({
            count: 0

        });

    }

    render() {
        return <Counter count={this.state.count} incCounter={this.incCounter} decCounter={this.decCounter} conReset={this.conReset} />;
    }

};
export default CounterCounter;