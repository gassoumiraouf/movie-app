import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';


import {
    Card, CardImg,  CardBody,
    CardTitle, CardSubtitle,Button
  } from 'reactstrap';
class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
    
        return ( <div className='d-flex justify-content-around flex-wrap'>
             {this.props.item.map((el, index) =>(
      <div className='card' key={index}>
             <Card >
        <CardImg className='image'  src={el.image} alt="Card image cap" />
        <CardBody>
          <CardTitle><h3>{el.title}</h3></CardTitle>
          <CardSubtitle>
            <StarRatingComponent 
            name="rating" 
            starCount={5}
            value={el.rating}
            />
            <Button color="danger" className='delete'>delete</Button>
            </CardSubtitle>
          </CardBody>
      </Card>
      </div>))}
        </div> );
    }
}
 
export default MovieItem;