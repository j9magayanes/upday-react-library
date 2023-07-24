
import React from 'react';
import { Image } from '../Image/Image'
import { AdWrapper } from '../AdWrapper/AdWrapper'
import './ad.css';

export const Ad = ({ src, label, args, }) => {
    return (
        <figure>
          <AdWrapper>
            <h3>Story continues below advertisement</h3>
        <Image args={args} src={src}/>
        </AdWrapper>
      </figure>
    )
}