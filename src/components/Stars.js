import React from 'react';
import StarRatings from './react-star-ratings';
 
class Stars extends React.Component {
    changeRating( newRating, name ) {
      this.setState({
        rating: newRating
      });
    }
 
    render() {
      // rating = 2;
      return (
        <StarRatings
          rating={this.state.rating}
          starRatedColor="blue"
          changeRating={this.changeRating}
          numberOfStars={6}
          name='rating'
        />
      );
    }
}

export default Stars;