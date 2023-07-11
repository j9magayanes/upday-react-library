
import React from 'react';
import { Image } from '../Image/Image'
import { AdWrapper } from '../AdWrapper/AdWrapper'
import './ad.css';

export const Ad = ({ args}) => {
    return (
        <figure>
          <AdWrapper>
        <Image args={args} />
        </AdWrapper>
      </figure>
    )
}