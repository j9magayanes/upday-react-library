// ImageComponent.test.js
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import  'upday-web-components/components/articleDetail'
import { ArticleDetail } from './ArticleDetail';
import { JSDOM } from 'jsdom';

// Import your custom web component class
// Assuming the web component file is in the same directory

describe('ImageComponent', () => {
  test('renders with default attributes', () => {
    // Create a virtual DOM
    const dom = new JSDOM('<!DOCTYPE html>');
    global.document = dom.window.document;

    // Instantiate your web component

    const articleDetail = <ArticleDetail />;

    // Perform assertions based on the default state
    expect(articleDetail.shadowRoot).toBeDefined();
    //expect(imageComponent.imgElement).toBeDefined();
    //expect(imageComponent.imgElement.getAttribute('src')).toBeNull(); // No 'src' attribute initially
    // Add more assertions as needed for other default attributes
  });

  test('updates attributes', () => {
    // Create a virtual DOM
    const dom = new JSDOM('<!DOCTYPE html>');
    global.document = dom.window.document;

    // Instantiate your web component
    const articleDetail= document.createElement(<ArticleDetail/>);
    document.body.appendChild(articleDetail);

    // Update attributes
    //imageComponent.setAttribute('src', 'example.jpg');
 
    // Perform assertions after attribute updates
    //expect(imageComponent.imgElement.getAttribute('src')).toBe('example.jpg');
    //expect(imageComponent.imgElement.getAttribute('title')).toBe('Example Title');
    //expect(imageComponent.imgElement.getAttribute('label')).toBe('Example Label');
    //expect(imageComponent.imgElement.getAttribute('size')).toBe('large');
    //expect(imageComponent.contentElement.className).toBe('custom-class');
  });

  // Add more test cases as needed
});

test('ImageComponent renders correctly', () => {
  const props = {
    label: 'Example Label',
    src: 'example.jpg',
    title: 'Example Title',
    size: 'large',
  };

  const component = renderer.create(<ArticleDetail {...props} />);
  const tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});