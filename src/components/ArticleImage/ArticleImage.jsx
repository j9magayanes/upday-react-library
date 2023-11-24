import React from 'react';
import  'upday-web-components/components/articleImage'

export const ArticleImage = ({ src, alt, imageRef, photoCaption, figureRef}) => {
    return (
        <article-image src={src} alt={alt} imageRef={imageRef ? imageRef: null } photoCaption={photoCaption} figureRef={figureRef}/>
    )
}