import React, { Component } from 'react';
import CounterButton from './CounterButton';

class Header extends Component {
    //  shouldComponentUpdate(nextProps, nextState) {
    //     return true;
    // }
    // if false, wont update the component

    render() {
        return (
            <div>
                <h1 className="f1">Robofriends</h1>
                <CounterButton color={'red'} />
            </div>
        )
    }
}

export default Header;