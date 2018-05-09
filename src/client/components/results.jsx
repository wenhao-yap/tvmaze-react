/*eslint-disable*/
import PropTypes from 'prop-types';
import React from 'react';
import {queryTVMazeAPI,fullTVMazeAPI} from '../Util';
import classes from'./components.css';
import { withRouter } from 'react-router-dom';

class Results extends React.Component{
	  constructor(){
      super();
  		this.state = {
  			data:[],
  			output:'',
        page: 1,
        requestSent: false
  		};
      this.handleOnScroll = this.handleOnScroll.bind(this);
  	}

    componentDidMount(){
      // queryTVMazeAPI(this.props.search.toLowerCase(), (res) => {
      //   this.setState({data: res})
      // })
      fullTVMazeAPI(this.state.page, (res) => {
        this.setState({data:res})
      })
      window.addEventListener('scroll', this.handleOnScroll);
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleOnScroll);
    }


    loadMore(){
      if (this.state.requestSent) {
        return;
      }      
      this.setState({requestSent: true});

      let nextPage = this.state.page + 1;
      fullTVMazeAPI(nextPage, (res) => {
        console.log("new data received");
        let currentData = this.state.data;
        Array.from(res).forEach((item) => {
          currentData.push(item);
        });
        this.setState({
          data:currentData,
          page:nextPage,
          requestSent: false
        })
      })      
    }

    handleOnScroll(){
      const scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
      const scrollHeight =
        (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;
      const scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
      if (scrolledToBottom) {this.loadMore();}      
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
        <div className = "resultsContainer">
    			<div className = "results">
            <div>{this.state.output}</div>
    			</div>
          <div className = "loader">
            {(() => {
              if (this.state.requestSent) {
                return (
                  <div className={`${classes.dataLoading} dataLoading`}>
                    <i className="fa fa-refresh fa-spin" />
                  </div>
                );
              }
              return <div className={`${classes.dataLoading} dataLoading`} />;
            })()}
          </div>
        </div>
  		);
  	}
}

Results.propTypes = {
  search: PropTypes.string
}

// export default Results;
export default withRouter(Results);