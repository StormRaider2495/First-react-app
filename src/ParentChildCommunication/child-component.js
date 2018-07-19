import React, {Component} from 'react';

export default class ChildComponent extends Component {

    constructor(props) {
        super(props);
        this.data = props.data;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ data: nextProps.data });  
      }
    render() {
        return (
            <div className='inChild-button-container container-fluid'>
                <p>isDisable: {`${this.data.isEnable} `}</p>
                <button className={`btn btn-${this.data.class}`} disabled={!this.data.isEnable}>{this.data.text}</button>
                <p>noOfClicks:  {this.data.noOfClicks}</p>
            </div>
        );
    }
}