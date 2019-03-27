import React, { Component } from 'react';
import CardImage from "../CardImage";
import CardOptions from "../CardOptions";
import Title from "../Title";
import Button from '../Button'
import './CardContainer.css';


class CardContainer extends Component {
  state = {
    card: "",
    url: ""
  }

  componentDidMount(){
    this.fetchProduct();
  }

  fetchProduct = () => {
    fetch("https://api.unsplash.com/photos/random?query=easter&client_id=f761c684394c261b59f294b58c4835348c6045d3c027d917f7eda1625a4ba720")
      .then(response => response.json())
      .then(response => {
      this.setState({
        card: response,
        url: response.urls.regular
      })
    })
  }

  render(props) {
    return (
      <div className="display">
        <div className="all-options">
          <CardOptions />
          <p className="fontoption-text"> Ugly Pic? Np </p>
          <Button change={this.fetchProduct}/>
        </div>

        <div className="card-container">
          <Title text={"Create Your EASTER Card B)"} />
          <CardImage url={this.state.url} description={this.state.card}/>
        </div>
      </div>
    );
  }
}

export default CardContainer;
