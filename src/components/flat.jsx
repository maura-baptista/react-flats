import React, { Component } from 'react';

class Flat extends Component{

  handleClick = () =>{
      this.props.selectFlat(this.props.index);
  }
  
  render() {
    const style = { 
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${this.props.flat.imageUrl}')`
    }

    // let classes = "card";
    //   if (this.props.flat === this.props.selectedFlat){
    //     classes += "selected";
    //   }
    

    return (
      <div className={`card${this.props.selected ? ' selected' : ''}`} style={style} onClick={this.handleClick} >
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h2>{this.props.flat.name}</h2>
          <a className="card-link" href="#" ></a>
        </div>
      </div>
    );
  }

}

export default Flat;