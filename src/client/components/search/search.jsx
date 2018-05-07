import React from 'react';
import Results from './results'

class Search extends React.Component{
  	constructor(){
  		super();
  		this.state = {
  			input:'',
  			search:''
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
  			<div className = "wrapper">
  				<h1>TV MAZE SEARCH</h1>
              <form onSubmit={this.handleSubmit.bind(this)}>
                  <input type='text' value={this.state.input} onChange={this.updateInput.bind(this)} placeholder='Enter a Movie Title...'/><br/>
                  <input type='submit' value="Search"/>
              </form>
              <h3>Showing results for {this.state.search}</h3>
              <Results search={this.state.search}/>                
  			</div>
  		);
  	}
}

export default Search;