import React from 'react';
import Flat from './flat';

const FlatList = (props) => {
  const renderList = () => {
    return props.flats.map((flat, index) => {
      return (
        <Flat
          flat={flat}
          key={flat.lat}
          selected={flat.name === props.selectedFlat.name}
          index={index}
          selectFlat={props.selectFlat}
        />
      );
    });
  };

  return (
    <div className="flat-list col-sm-7 ">
      {renderList()}
    </div>
  );
};

export default FlatList;







// import React, { Component } from 'react';
// import Flat from './flat'


// class FlatList extends Component{
//   	// static defaultProps = {
//   	//  	flats: [{
// 		 //  	"name": "Charm at the Steps of Montmartre",
// 		 //  	"imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat1.jpg",
// 		 //  	"price": 164,
// 		 //  	"priceCurrency": "EUR"
//   	//  	}]
//   	// }

//   render() {
//     return (
//       <div className="col-sm-7 flat-list">
//       	{this.props.flats.map((flat, index) => 
//       		<Flat
// 		         flat={flat}
// 		         key={flat.lat}
// 		         selected={flat.name === props.selectedFlat.name}
// 		         index={index}
// 		         selectFlat={props.selectFlat}
// 	       />
//       	)}
//       </div>
//     );
//   }

// }

// export default FlatList;