import React, {Component} from 'react';
import ParentComponent from './parent-component';

export default class ParentChildComponent extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='parent-container'>
                <ParentComponent />
            </div>
        )
    }
}