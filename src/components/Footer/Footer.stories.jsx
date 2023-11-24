import React from 'react';

import { Footer } from './Footer';


export default {
  title: 'Form/Footer',
  component: Footer,
};

const Template = () =><Footer args= {{
  items: '[{"name": "Privacy Policy", "href": "http://localhost:3000/privacy_policy#26fc5702-5d0a-4b14-8135-4bc49ff2fa49"}, {"name": "Privacy Settings", "callback": ""}, {"name": "Imprint", "href": "http://localhost:3000/imprint"}]',
}}/>;


export const Default = Template.bind({
});