import React from 'react';

class Search extends React.Component{
  	render(){
  		return(
  			<div className = "wrapper">
  				<h1>TV MAZE SEARCH</h1>
              <form onSubmit={this.props.handleSubmit.bind(this)}>
                  <input type='text' value={this.props.input} onChange={e => this.props.updateInput(e.target.value)this.props.updateInput.bind(this)} placeholder='Enter a Movie Title...'/><br/>
                  <input type='submit' value="Search"/>
              </form>
              <h3>Showing results for {this.props.search}</h3>                
  			</div>
  		);
  	}
}

export default Search;