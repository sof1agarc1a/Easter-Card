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
          <ChromePicker
          disableAlpha
          color={ this.state.color }
          onChangeComplete={ this.changeColor }/>
          <CirclePicker
          color={ this.state.color }
          onChangeComplete={ this.changeColor }/>

            <p style={{color: this.state.color }}> TEXTT </p>
            <p> Font Color: </p>


             <div className="text-input">
               <form>
                 <input style={{color: this.state.color }}
                  type="text" placeholder="write something like Hepi Easter..." />
               </form>
             </div>

          </div>
          )
        }
      }

export default CardOptions;
