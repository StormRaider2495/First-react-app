import React, {Component} from 'react';
import ParentComponent from './parent-component';
import './parent-child.css';

export default class ParentChildComponent extends Component {
    constructor(props) {
        super(props);
        this.data = [
            {
                'id': '1',
                'text': 'Danger',
                'class': 'danger',
                'isEnable': true,
                'noOfClicks': 0
            },
            {
                'id': '2',
                'text': 'warning',
                'class': 'warning',
                'isEnable': true,
                'noOfClicks': 0
            },
            {
                'id': '3',
                'text': 'primary',
                'class': 'primary',
                'isEnable': true,
                'noOfClicks': 0
            }
        ]
    }
    render() {
        return (
            <div className='container parent-container'>
                <ParentComponent  data={this.data}/>
            </div>
        )
    }
}