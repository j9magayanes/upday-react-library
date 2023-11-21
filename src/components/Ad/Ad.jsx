
import React from 'react';
import { Image } from '../Image/Image'
import  'upday-web-components/components/adWrapper'
import './ad.css';

export const Ad = ({ src, label, args, }) => {
    return (
        <figure>
          <ad-wrapper class="ad-block grow">
              <h3>Story continues below advertisement</h3>
              <image-component args={args} src={src}/>
          </ad-wrapper>
      </figure>
    )
}