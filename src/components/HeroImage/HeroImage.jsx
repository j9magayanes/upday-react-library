import React from 'react';


export const HeroImage = ({ args}) => {
    return (
        <figure>
        <img className={args.class}src={args.src} alt={ args.shortTitle } ref={ ref => (args.imageRef = ref) }/>
        {
          args.photoCredits && args.photoCredits !== ' ' && <figcaption>{args.photoCredits}</figcaption>
        }
      </figure>
    )
}