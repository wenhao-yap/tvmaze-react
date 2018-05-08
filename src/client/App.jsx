import React from 'react';

import Search from './components/search';
import Results from './components/results';

class App extends React.Component{
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
  	}

	render(){
		return(
		  <div>
		    <Search updateInput = {(e) => this.updateInput(e)} handleSubmit = {(e) => this.handleSubmit(e)} input = {this.state.input} search = {this.state.search}/>
		    <Results search={this.state.search}/>
		  </div>			
		);
	}
}

export default App;
