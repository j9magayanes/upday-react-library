import React from 'react';
import './image.css';
import 'upday-web-components/components/imageComponent'

export const Image = ({label, src, ...args}) => {
    return (


        <figure>
          <image-component src={src} label={ args.title } size={args.size} class={"meinestadt"}/>
      </figure>
    ) 
}