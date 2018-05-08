import React from 'react';
import {results} from '../../../results';

class Results extends React.Component{
	constructor(){
      super();
  		this.state = {
  			data:{},
  			output:''
  		}
  	}

  	componentWillMount(){
        this.setState({
           	data:{results}.results
        })
    }

  	render(){
  		let query = this.props.query.toUpperCase();
  		if(query){
	  		this.state.output = this.state.data.map(item => {
	  			if(item.show.name.toUpperCase().includes(query)){
	  				return (
	  					<div key={item.show.id}>
	  						<img src={item.show.image.medium} />
		  					<p>Name: {item.show.name}</p>
		  					<p>Type: {item.show.type}</p>
		  					<p>Language: {item.show.language}</p>
		  					<p>Genres: {item.show.genres}</p>
	  					</div>
	  				)
	  			}
	  		});
	  	}

  		return(
  			<div className = "results">
            	{this.state.output}
  			</div>
  		);
  	}
}

export default Results;