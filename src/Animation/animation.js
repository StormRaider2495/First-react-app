import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import './animation.css';

const Home = () => {
    return (
    	<div>
        <ReactCSSTransitionGroup
          transitionName="anim"
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnter={true}
          transitionEnterTimeout ={500}
          transitionLeave={false}>
    		  <h2>{'Welcome to React Animations'}</h2>
    		</ReactCSSTransitionGroup>
        
    	</div>
        
    );
};

export default class Animation extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      data: [],
      name:''
    };
  }
  add(){
    var arr = this.state.data.slice();
    arr.push({'id':(new Date()).getTime(),'name':this.state.name})
    this.setState({data:arr})
  }
  handleChange(e){
    this.setState({name:e.target.value})
  }
  render() {
    return (
      <div className="animation-container">
        <div>{Home()}</div>
        <ul className="item-container">
        <ReactCSSTransitionGroup transitionName="anim" transitionAppear={false} transitionEnterTimeout={3000} transitionEnter={true} transitionLeave={false}>
        {
          this.state.data.map(function(player) {
             return <li key={player.id}>{player.name}</li>
          })
        }
        </ReactCSSTransitionGroup>
        </ul>

        Enter Name <input onChange={this.handleChange} type="text" /> <input onClick={this.add} type="button" value="Add" />        
        
      </div>
    )
  }
}