/*eslint-disable*/
import PropTypes from 'prop-types';
import React from 'react';
import classes from'./components.css';
import { withRouter } from 'react-router-dom';

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

Search.propTypes = {
  input: PropTypes.string,
  search: PropTypes.string
}

// export default Search;
export default withRouter(Search);