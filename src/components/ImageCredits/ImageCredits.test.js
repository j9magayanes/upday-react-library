// ImageComponent.test.js
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import ImageCredits  from 'upday-web-components/components/imageCredits';
import { ImageCredits as Image } from './ImageCredits';
import { JSDOM } from 'jsdom';

// Import your custom web component class
// Assuming the web component file is in the same directory

describe('ImageComponent', () => {
  test('renders with default attributes', () => {
    // Create a virtual DOM
    const dom = new JSDOM('<!DOCTYPE html>');
    global.document = dom.window.document;

    // Instantiate your web component
    const imageCredits = <image-credits />;
  

    // Perform assertions based on the default state
    //expect(imageCredits.shadowRoot).toBeDefined();
    //expect(imageComponent.imgElement).toBeDefined();
    //expect(imageComponent.imgElement.getAttribute('src')).toBeNull(); // No 'src' attribute initially
    // Add more assertions as needed for other default attributes
  });

  // test('updates attributes', () => {
  //   // Create a virtual DOM
  //   const dom = new JSDOM('<!DOCTYPE html>');
  //   global.document = dom.window.document;

  //   // Instantiate your web component
  //   const imageComponent = document.createElement('image-component');
  //   document.body.appendChild(imageComponent);

  //   // Update attributes
  //   imageComponent.setAttribute('src', 'example.jpg');
  //   imageComponent.setAttribute('title', 'Example Title');
  //   imageComponent.setAttribute('label', 'Example Label');
  //   imageComponent.setAttribute('size', 'large');
  //   imageComponent.setAttribute('class-prop', 'custom-class');

  //   // Perform assertions after attribute updates
  //   //expect(imageComponent.imgElement.getAttribute('src')).toBe('example.jpg');
  //   //expect(imageComponent.imgElement.getAttribute('title')).toBe('Example Title');
  //   //expect(imageComponent.imgElement.getAttribute('label')).toBe('Example Label');
    //expect(imageComponent.imgElement.getAttribute('size')).toBe('large');
    //expect(imageComponent.contentElement.className).toBe('custom-class');
  //});

  // Add more test cases as needed
});

// test('ImageComponent renders correctly', () => {
//   const props = {
//     label: 'Example Label',
//     src: 'example.jpg',
//     title: 'Example Title',
//     size: 'large',
//   };

//   const component = renderer.create(<Image {...props} />);
//   const tree = component.toJSON();

//   expect(tree).toMatchSnapshot();
// });