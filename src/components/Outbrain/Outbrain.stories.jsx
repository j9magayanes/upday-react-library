
import React from 'react';

import { Outbrain } from './Outbrain';


export default {
  title: 'Form/Outbrain',
  component: Outbrain,
};

const Template = (args) =><Outbrain  {...args}/>;

const resolveUrl = (url) =>
window.location.href.replace(
  'http://localhost:3000',
  url,
);

export const Web = Template.bind({});
    Web.args = {
        widgetId: "MB_30",
        contentUrl: resolveUrl( 'https://newsfeed.upday.com/'),
        installationKey: "DEUPD1KDIH66FLLBKJM3C0O1E"

};

export const Huawei = Template.bind({});
Huawei.args = {
    widgetId: "MB_30",
    contentUrl: resolveUrl( 'https://newsfeed.upday.com/'),
    installationKey: "DEUPD1KDIH66FLLBKJM3C0O1E"
};

