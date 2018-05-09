/*eslint-disable*/
import PropTypes from 'prop-types';
import React from 'react';
import {queryTVMazeAPI,fullTVMazeAPI} from '../Util';
import classes from'./components.css';

class Results extends React.Component{
	  constructor(){
      super();
  		this.state = {
  			data:[],
  			output:'',
        page: 1
  		}
  	}

    componentDidMount(){
      // queryTVMazeAPI(this.props.search.toLowerCase(), (res) => {
      //   this.setState({data: res})
      // })
      fullTVMazeAPI(this.state.page, (res) => {
        this.setState({data:res})
      })
    }

    loadMore(e){
      let nextPage = this.state.page + 1;
      fullTVMazeAPI(nextPage, (res) => {
        console.log("new data received");
        let currentData = this.state.data;
        Array.from(res).forEach((item) => {
          currentData.push(item);
        });
        this.setState({
          data:currentData,
          page:nextPage
        })
      })      
    }

  	render(){
      if(this.state.data.length > 0){
    		this.state.output = this.state.data.map(item => {
          if(item.name.toUpperCase().includes(this.props.search.toUpperCase())){
            return (
              <div key={item.id} className={`${classes.eachResult} eachResult`}>
                {item.image != null ? (<img src={item.image.medium} />):(<h2>NO IMAGE FOUND</h2>)}
                <p>Name: {item.name}</p>
                <p>Type: {item.type}</p>
                <p>Language: {item.language}</p>
                <p>Genres: {item.genres}</p>              
              </div>
            )
          } 

  				// return (
  				// 	<div key={item.show.id} className={`${classes.eachResult} eachResult`}>
      //         {item.show.image != null ? (<img src={item.show.image.medium} />):(<h2>NO IMAGE FOUND</h2>)}
	  			// 		<p>Name: {item.show.name}</p>
	  			// 		<p>Type: {item.show.type}</p>
	  			// 		<p>Language: {item.show.language}</p>
	  			// 		<p>Genres: {item.show.genres}</p>
  				// 	</div>
  				// )

    		});
      }

  		return(
  			<div className = "results">
          {this.state.output}
          <p><button onClick={(e) => this.loadMore(e)}>Load More</button></p>
  			</div>
  		);
  	}
}

Results.propTypes = {
  search: PropTypes.string
}

export default Results;