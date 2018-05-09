/*eslint-disable*/

import React from 'react';
import { Route, Link, withRouter } from "react-router-dom";

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
  	}

  	handleSubmit(event){
  		event.preventDefault();
  		this.setState({search:this.state.input});
  		event.target.value = '';
  		this.props.history.push('/results');
  	}

	render(){
		return(
		  <div>
		  	<nav>
	          <h1>- Navbar -</h1>
	          <Link to="/">Home</Link>
	          <span>&nbsp;&nbsp;</span>
	          <Link to="/search">Search</Link>
	          <span>&nbsp;&nbsp;</span>
	          <Link to="/results">Results</Link>
	        </nav>
	        <main>
	          <Route
	            path='/search'
	            render={() => (
	              <Search updateInput = {(e) => this.updateInput(e)} handleSubmit = {(e) => this.handleSubmit(e)} input = {this.state.input} search = {this.state.search}/>
	            )}/>
	          <Route
	            path='/results'
	            render={() => (
	              <Results search={this.state.search}/>
	            )}
	          />
	        </main>
		    {/*<Search updateInput = {(e) => this.updateInput(e)} handleSubmit = {(e) => this.handleSubmit(e)} input = {this.state.input} search = {this.state.search}/>
		    {this.state.search.length > 0  &&
        		<Results search={this.state.search}/>
      		}*/}
		  </div>			
		);
	}
}

export default withRouter(App);
