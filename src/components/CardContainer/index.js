import React, { Component } from 'react';
import CardImage from "../CardImage";
import CardOptions from "../CardOptions";
import Title from "../Title";
import Button from '../Button'
import './CardContainer.css';


class CardContainer extends Component {

  constructor() {
    super()
    this.state = {
      card: []
    }
  }

  componentDidMount(){
    this.fetchProduct();
  }

  fetchProduct = () => {
    fetch("https://picsum.photos/list/")
      .then(response => response.json())
      .then(response => {
        console.log(response[0])
      this.setState({
        card: response[0]
      })
    })
  }

  render(props) {

    return (
      <div className="display">
        <div className="all-options">
          <CardOptions />
          <Button change={this.fetchProduct}/>
        </div>
        <div className="card-container">
          {/**<CardImage img={this.state.card} src={this.state.card} />*/}

          <div className="card-align">
            <Title text={"CREATE YOUR EASTER-CARD B)"} />
            <img className="card-image" src="https://i.ytimg.com/vi/PM9_rjuvfwM/maxresdefault.jpg" alt="hej" />
          </div>

        </div>
      </div>
    );
  }
}

export default CardContainer;
