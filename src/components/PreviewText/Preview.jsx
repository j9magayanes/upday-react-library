import React from 'react';
import './preview.css';


export const Preview= ({args}) => {
        return (
            <div className="page">
            <article>
            <div className="padded-lr legal">
                <h1 id="imprint">{args.detail}</h1>
            </div>
            </article>
            </div>)}