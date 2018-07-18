import React, {Component} from 'react';

export default class ChildComponent extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='inChild-button-container'>
                <button>1</button>
                <button>2</button>
            </div>
        );
    }
}