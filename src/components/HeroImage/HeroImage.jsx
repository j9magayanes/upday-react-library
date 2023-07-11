import React from 'react';
import './heroImage.css';

export const HeroImage = ({ ...props}) => {
    return (
        <figure>
        <img src="https://cdn.pixabay.com/photo/2014/06/03/19/38/board-361516__340.jpg" alt={ props.shortTitle } ref={ ref => (props.imageRef = ref) }/>
        {
          props.photoCredits && props.photoCredits !== ' ' && <figcaption>{props.photoCredits}</figcaption>
        }
      </figure>
    )
}