import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { Image } from '../Image/Image';
import './articleDetail.css';

export const ArticleDetail = ({
  children,
  imageUrl,
  previewText,
  ...props
}) => {
  return (
    <article className=''>
      <a href='https://www.google.com/' className=''>
        <div className=''>
          <div className=''>
            <div className=''>
              <h3>Test</h3>
              <cite>
                Test
                <span></span>
                <span></span>
              </cite>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
};
