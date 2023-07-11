import React from 'react';
import './readmore.css';


export const ReadMore= ({args}) => {
    console.log(args)
        return (
            <span id={`storybook-read-more-${args.id}`}>{args.text}</span>
           )}