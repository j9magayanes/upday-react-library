import React from 'react';
import './previewText.css';


export const PreviewText = ({args}) => {
        return (
            <div className="page">
            <article>
            <div className="padded-lr legal">
                <h1 id="imprint">{args.preview}</h1>
            </div>
            </article>
            </div>)}