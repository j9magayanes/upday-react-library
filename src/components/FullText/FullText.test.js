// Footer.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {FullText} from './FullText';

describe('FullText Component', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<FullText args={{ label: 'meinestadt', title: 'meinestadt',   fulltext: 'Mehr als 16 Monate nach Beginn des russischen Angriffskriegs hat der ukrainische Präsident Wolodymyr Selenskyj die Forderung nach einer baldigen konkreten EU-Beitrittsperspektive für sein Land erneuert. „Die Ukraine hat Einfluss auf die Stärke Europas. Das ist ein Fakt“, sagte Selenskyj am Donnerstag in seiner abendlichen Videoansprache. „Und dieses Jahr ist es an der Zeit, diesen und andere Fakten zu nutzen, um die Einheit in Europa zu stärken – angefangen beim Start von Verhandlungen über die EU-Mitgliedschaft der Ukraine.“'
    }} />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText('Mehr als 16 Monate nach Beginn des russischen Angriffskriegs hat der ukrainische Präsident Wolodymyr Selenskyj die Forderung nach einer baldigen konkreten EU-Beitrittsperspektive für sein Land erneuert. „Die Ukraine hat Einfluss auf die Stärke Europas. Das ist ein Fakt“, sagte Selenskyj am Donnerstag in seiner abendlichen Videoansprache. „Und dieses Jahr ist es an der Zeit, diesen und andere Fakten zu nutzen, um die Einheit in Europa zu stärken – angefangen beim Start von Verhandlungen über die EU-Mitgliedschaft der Ukraine.“')).toBeInTheDocument();
  });
});
