import React, { Component } from 'react';
import ChildComponent from './child-component';

export default class ParentComponent extends Component {

    render() {
        return (
            <div>
                <div className='child-container'>
                    <ChildComponent />
                </div>
                <div className='child-container'>
                    <ChildComponent />
                </div>
                <div className='child-container'>
                    <ChildComponent />
                </div>
            </div>
        )
    }
}