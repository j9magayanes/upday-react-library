import React from 'react';
import './image.css';

export const Image = ({args}) => {
    return (
        <figure>
        <img src={ args.src } alt={ args.shortTitle } ref={ ref => (args.imageRef = ref) }/>

      </figure>
    )
}