import React from 'react';
import './image.css';

export const Image = ({label, src, ...args}) => {
    return (
        <figure>
        <img src={ src } alt={ label } ref={ ref => (label = ref) }/>

      </figure>
    ) 
}