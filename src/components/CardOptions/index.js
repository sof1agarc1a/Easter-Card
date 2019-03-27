import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import { CirclePicker } from 'react-color';
import './CardOptions.css';

class CardOptions extends Component {

    // constructor(props) {

      state = {
        // isClicked: false,
        color: this.props.color,
        disableAlpha: true
      }

      changeColor = (color) => {
        this.setState({
          // isClicked: true,
          color: color.hex,

        })
      }

      render() {
        return(
          <div>
            <p className="fontoption-text"> Change Font Color </p>
            <ChromePicker disableAlpha color={this.state.color} onChangeComplete={this.changeColor}/>
            <p className="fontoption-text"> Color Options </p>
            <CirclePicker color={this.state.color} onChangeComplete={this.changeColor}/>
             <div className="text-input">
               <form>
                 <input style={{color: this.state.color}} type="text" placeholder="Write something here..." />
               </form>
             </div>
          </div>
        )
      }
    }

export default CardOptions;
