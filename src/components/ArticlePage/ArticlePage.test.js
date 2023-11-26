import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ArticlePage } from './ArticlePage';

describe('Article Page', () => {
  it('renders an article page with article-image tag', () => {
    const { container } = render(<ArticlePage args={{src: 'https://img.yana.asideas.de/image/upload/w_700,h_394,c_fill,f_webp,q_auto:eco/v1689066061/cms-cropped/hesgy7puvocvswz5pxw6.jpg', appName: 'meinestadt', category: 'Politics', title: 'Selenskyj fordert EU-Beitrittsverhandlungen', source: 'Meinestadt', detail: '> 1 day',  fulltext: 'Mehr als 16 Monate nach Beginn des russischen Angriffskriegs hat der ukrainische Präsident Wolodymyr Selenskyj die Forderung nach einer baldigen konkreten EU-Beitrittsperspektive für sein Land erneuert. „Die Ukraine hat Einfluss auf die Stärke Europas. Das ist ein Fakt“, sagte Selenskyj am Donnerstag in seiner abendlichen Videoansprache. „Und dieses Jahr ist es an der Zeit, diesen und andere Fakten zu nutzen, um die Einheit in Europa zu stärken – angefangen beim Start von Verhandlungen über die EU-Mitgliedschaft der Ukraine.“',  text: 'Read More',  id: 'meinestadt', class: 'hero'}}/>);
    const adElement = container.getElementsByClassName('ad-block grow');
      
    // Assert that at least one element with the class is found
    expect(adElement.length).toBeGreaterThan(0);
    // ... add more assertions as needed
    const titleElement = container.getElementsByClassName('title meinestadt')
    expect(titleElement.length).toBeGreaterThan(0);

    const sourceElement = container.getElementsByClassName('source meinestadt')
    expect(sourceElement.length).toBeGreaterThan(0);

    const timeStampElement = container.getElementsByClassName('timestamp')
    expect(timeStampElement.length).toBeGreaterThan(0);

    const imageCredits = container.getElementsByClassName('imageCredits')
    expect(imageCredits.length).toBeGreaterThan(0);

    const articleDetailTag = container.querySelector('article-detail');
  
    expect(articleDetailTag).toBeInTheDocument();
    const readMoreElement = container.querySelector('#storybook-read-more-meinestadt');

  });
});
