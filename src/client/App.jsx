import React from 'react';
import {hot} from 'react-hot-loader';

import Search from './components/search';
import Results from './components/results';

class App extends React.component{
	constructor(){
		super();
		this.state = {
			input: '',
			search: ''
		}
	}

	updateInput(event){
  		this.setState({input:event.target.value});
  		console.log("currently inputing: " + this.state.input);  		
  	}

  	handleSubmit(event){
  		event.preventDefault();
  		this.setState({search:this.state.input});
  		event.target.value = '';
  		console.log("Following query has been made: " + this.state.search);
  	}

	render(){
		return(
		  <div>
		    <Search updateInput = {this.updateInput} handleSubmit = {this.handleSubmit(event)} input = {this.state.input} search = {this.state.search}/>
		    <Results search={this.state.input}/>
		  </div>			
		);
	}
}

export default App;
