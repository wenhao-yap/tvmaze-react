/*eslint-disable*/
import PropTypes from 'prop-types';
import React from 'react';
// import {results} from '../../../results';
import {queryTVMazeAPI} from '../Util';
import classes from'./components.css';

class Results extends React.Component{
	  constructor(){
      super();
  		this.state = {
  			data:[],
  			output:''
  		}
  	}

    componentDidMount(){
      queryTVMazeAPI(this.props.search.toLowerCase(), (res) => {
        this.setState({data: res})
      })
    }

  	render(){
      if(this.state.data.length > 0){
    		this.state.output = this.state.data.map(item => {
  				return (
  					<div key={item.show.id} className={`${classes.eachResult} eachResult`}>
              {item.show.image != null ? (<img src={item.show.image.medium} />):(<h2>NO IMAGE FOUND</h2>)}
	  					<p>Name: {item.show.name}</p>
	  					<p>Type: {item.show.type}</p>
	  					<p>Language: {item.show.language}</p>
	  					<p>Genres: {item.show.genres}</p>
  					</div>
  				)
    		});
      }

  		return(
  			<div className = "results">
            	{this.state.output}
  			</div>
  		);
  	}
}

Results.propTypes = {
  search: PropTypes.string
}

export default Results;