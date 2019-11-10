import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';

import MovieList from './movielist';
import {connect} from 'react-redux'


import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      minRating: 1,
      keyword: '',
      loading: true
    }
  
  componentDidMount=()=> {
    setTimeout(()=>
    {this.setState({ loading:false})
  },1
    )
      
  }


render() {
    return (<div className='all'>
      <div className='container movie-container'>
        <section className='header'>
          <h1>movie app</h1>
          <Header name={(x) => this.filtername(x)} rating={(x)=>this.filterrating(x)} />
        </section>
        <section>

          <MovieList/>
            add={(newMovie) => this.add(newMovie)} loading={this.state.loading}
          />
        </section>
      </div>
    </div>);
  }
}


}

export default connect (null, null) (App);
