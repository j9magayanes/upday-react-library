import React from 'react';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';

import * as stories from './ArticleDetail.stories';

const { Meinestadt } = composeStories(stories);

test('renders ArticleDetail component with correct class and text', () => {
    render(<Meinestadt />);
  
    // Check for the class
    const articleDetailElement = screen.getByTestId('articleDetail');
    expect(articleDetailElement).toHaveClass('articleDetail__clampedPreviewText');
    // Check for the text content
    const textAttribute = articleDetailElement.getAttribute('text');
    const expectedText =
      'Mehr als 16 Monate nach Beginn des russischen Angriffskriegs hat der ukrainische Präsident Wolodymyr Selenskyj die Forderung nach einer baldigen konkreten EU-Beitrittsperspektive für sein Land erneuert. „Die Ukraine hat Einfluss auf die Stärke Europas. Das ist ein Fakt“, sagte Selenskyj am Donnerstag in seiner abendlichen Videoansprache. „Und dieses Jahr ist es an der Zeit, diesen und andere Fakten zu nutzen, um die Einheit in Europa zu stärken – angefangen beim Start von Verhandlungen über die EU-Mitgliedschaft der Ukraine.“ Unterdessen reiste der frühere US-Vizepräsident Mike Pence in die Ukraine. Von Selenskyj in Kiew empfangen wurde zudem die schwedische Umweltaktivistin Greta Thunberg.';
  
    expect(textAttribute).toBe(expectedText);

  });
  