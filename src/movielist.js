import React, { Component } from 'react';
import MovieItem from './movieItem';
import Loading from './loading';
import {connect} from 'react-redux'

import {InputGroup, InputGroupText, InputGroupAddon, Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
      modal: false,
      title:'',
      rating: 2,
      image:'',
      
        } 
    } 

    toggle=()=> {
        this.setState({
        modal: !this.state.modal }
        );}
      
            

        
        handleChange=(e)=>{
            this.setState({ [e.target.name]: e.target.value });

        }
   
        add = () => {
            this.props.add({id: Math.random(),...this.state})
            this.setState({ modal: false });
        }

    render() 
    
    { const {items}=this.props
        return ( <div>
            <ul>
                <li><MovieItem item={items}/></li>
                <li className='add' onClick={this.toggle}>+</li>
            </ul>
            
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><h2>Add a film</h2></ModalHeader>
          <ModalBody>
          <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Add movie name!</InputGroupText>
        </InputGroupAddon>
        <Input name='title' onChange={this.handleChange} value={this.state.title} />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>Add movie photo source!</InputGroupText>
        </InputGroupAddon>
        <Input name='image' onChange={this.handleChange} value={this.state.image} />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText >Add the number of rating stars !</InputGroupText>
        </InputGroupAddon>
        <input name='rating' type="number" onChange={this.handleChange} value={this.state.rating}/>
      </InputGroup>
      <br />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.add}>Add the movie</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
            </div>
         );
    }
}

 
export default Loading ( connect (MovieList));