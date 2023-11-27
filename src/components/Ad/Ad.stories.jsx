import React from 'react';
import { Ad } from './Ad';

export default {
  title: 'Form/Ad',
  component: Ad,
};

const Template = (args) => <Ad {...args} />;

export const Meinestadt = Template.bind({});
Meinestadt.args = {
  label: 'Meinestadt',
  title: 'Mehr als 16 Monate nach Beginn des russischen Angriffskriegs ...',
  size: 'meinestadt',
  src: 'https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg',
  args: { src: 'https://lineardesign.com/wp-content/uploads/2019/12/Google-Ads-Display-Ads-MailChimp-Example-1-1.jpg' },
};

export const Web = Template.bind({});
Web.args = {
  title: 'Mehr als 16 Monate nach Beginn des russischen Angriffskriegs ...',
  label: 'Web',
  size: 'web',
  src: 'https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg',
  args: { src: 'https://lineardesign.com/wp-content/uploads/2019/12/Google-Ads-Display-Ads-MailChimp-Example-1-1.jpg' },
};
