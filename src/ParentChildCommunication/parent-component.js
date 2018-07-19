import React, { Component } from 'react';
import ChildComponent from './child-component';

export default class ParentComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data : props.data
        }
    }

    createComponentFixture(data) {
        return data.map(item => this.createChildFixture(item));
    }

    createChildFixture(data) {
        return (
            <div className='child-container col-sm-4'  key={data.id}>
                <div>
                    <button id={data.id} className='btn btn-default' onClick={this.updateStatus.bind(this)}>Change Button Status</button>
                    <div>
                        <button id={data.id} className='btn btn-default' onClick={this.increaseClickCounts.bind(this)}>Increase Count</button>
                        <button id={data.id} className='btn btn-default' onClick={this.decreaseClickCounts.bind(this)}>Decrease Count</button>
                    </div>
                </div>
                <ChildComponent data={data} />
            </div>
        )
    }

    updateStatus(event) {
        let index = parseInt(event.target.id,10) - 1;
        let updatedData = this.state.data;
        updatedData[index].noOfClicks++;
        updatedData[index].isEnable = !updatedData[index].isEnable ;
        this.setState((prevState) => ({ data: updatedData }))
    }

    increaseClickCounts(event) {
        let index = parseInt(event.target.id,10) - 1;
        let updatedData = this.state.data;
        updatedData[index].noOfClicks++;
        this.setState((prevState) => ({ data: updatedData }))
    }

    decreaseClickCounts(event) {
        let index = parseInt(event.target.id,10) - 1;
        let updatedData = this.state.data;
        updatedData[index].noOfClicks = updatedData[index].noOfClicks > 0 ? updatedData[index].noOfClicks-1 : updatedData[index].noOfClicks;
        this.setState((prevState) => ({ data: updatedData }))
    }

    render() {
        return (
            <div className="container">
                {this.createComponentFixture(this.state.data)}
            </div>
        )
    }
}