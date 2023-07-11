import React, { Children } from 'react';
import './articlePage.css';
import { ArticlePage } from './ArticlePage';

export default {
    title: 'Form/ArticlePage',
    component: ArticlePage,
  };
  
  const Template = (args) =><ArticlePage   {...args} />;
  
  export const Meinestadt = Template.bind({});
  Meinestadt.args = {
    label: 'meinestadt',
    title: 'meinestadt',
    args:{   src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFYE7C4Uz5vuWSQUmIsny2oz4A9WFbSrJaQ&usqp=CAU', appName: 'meinestadt', category: 'Politics', title: 'Selenskyj fordert EU-Beitrittsverhandlungen', source: 'Meinestadt', detail: '> 1 day',  fulltext: 'Mehr als 16 Monate nach Beginn des russischen Angriffskriegs hat der ukrainische Präsident Wolodymyr Selenskyj die Forderung nach einer baldigen konkreten EU-Beitrittsperspektive für sein Land erneuert. „Die Ukraine hat Einfluss auf die Stärke Europas. Das ist ein Fakt“, sagte Selenskyj am Donnerstag in seiner abendlichen Videoansprache. „Und dieses Jahr ist es an der Zeit, diesen und andere Fakten zu nutzen, um die Einheit in Europa zu stärken – angefangen beim Start von Verhandlungen über die EU-Mitgliedschaft der Ukraine.“',  text: 'Read More',  id: 'meinestadt'}

  };
  
  export const Web = Template.bind({});
  Web.args = {
    title: 'Web',
    size: 'web',
    args:{   src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFYE7C4Uz5vuWSQUmIsny2oz4A9WFbSrJaQ&usqp=CAU', appName: 'web', category: 'Business', title: 'Selenskyj fordert EU-Beitrittsverhandlungen', source: 'Upday Web', detail: '> 1 day',  fulltext: 'Mehr als 16 Monate nach Beginn des russischen Angriffskriegs hat der ukrainische Präsident Wolodymyr Selenskyj die Forderung nach einer baldigen konkreten EU-Beitrittsperspektive für sein Land erneuert. „Die Ukraine hat Einfluss auf die Stärke Europas. Das ist ein Fakt“, sagte Selenskyj am Donnerstag in seiner abendlichen Videoansprache. „Und dieses Jahr ist es an der Zeit, diesen und andere Fakten zu nutzen, um die Einheit in Europa zu stärken – angefangen beim Start von Verhandlungen über die EU-Mitgliedschaft der Ukraine.“',  text: 'Read More', id: 'web' }

  };
  
 