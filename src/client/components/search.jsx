/*eslint-disable*/

import React from 'react';
import classes from'./components.css';

class Search extends React.Component{
  	render(){
  		return(
  			<div className={`${classes.wrapper} wrapper`}>
  				<h1>TV MAZE SEARCH</h1>
              <form onSubmit={this.props.handleSubmit}>
                  <input type='text' value={this.props.input} onChange={this.props.updateInput} placeholder='Enter a Movie Title...'/><br/>
                  <input type='submit' value="Search"/>
              </form>
              <h3>Showing results for {this.props.search}</h3>                
  			</div>
  		);
  	}
}

export default Search;