import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {connect} from 'react-redux';

import {
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
   
   } from 'reactstrap';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyword:'',
            rating: 1
          }
    }
    handlechange=(e)=>{  
        this.setState({keyword:e.target.value},()=>this.props.name(this.state.keyword))
        }
    onStarClick(nextValue, prevValue, name) {
        this.setState({rating: nextValue},()=>this.props.rating(this.state.rating));
        }
    render() { 
        return ( <div className='container'>
        <InputGroup>
            <Input onChange={this.handlechange}/>
                <InputGroupAddon addonType="prepend" > <Button color="success">Search</Button></InputGroupAddon>
              </InputGroup>
              <StarRatingComponent
                name="rate1" 
                starCount={5}
                value={this.state.rating}
                onStarClick={this.onStarClick.bind(this)}
                />
              </div>)
              
    }
}

export default connect (null,null) (Header) ;