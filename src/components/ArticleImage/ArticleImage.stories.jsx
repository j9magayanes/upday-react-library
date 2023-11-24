import React from 'react';

import { ArticleImage } from './ArticleImage';


export default {
  title: 'Form/ArticleImage',
  component:ArticleImage,
};

const Template = (args) =><ArticleImage {...args} />;



export const Web = Template.bind({});
Web.args = {
    src: "https://img-staging.yana.asideas.de/image/fetch/w_700,h_394,c_fill,f_webp,q_auto:eco/https%3A%2F%2Fcdn-images.rtp.pt%2Fnoticias%2Fimages%2Fdefault_noticias.png%3Fw%3D860%26q%3D90%26auto%3Dformat",
    alt: "test"

};