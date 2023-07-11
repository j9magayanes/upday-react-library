import React from 'react';

import { Image } from './Image';


export default {
  title: 'Form/Image',
  component: Image,
};

const Template = (args) =><Image {...args} />;


export const Default = Template.bind({});

export const Meinestadt = Template.bind({});
Meinestadt.args = {
  label: 'Meinestadt',
  title: 'Mehr als 16 Monate nach Beginn des russischen Angriffskriegs hat der ukrainische Präsident Wolodymyr Selenskyj die Forderung nach einer baldigen konkreten EU-Beitrittsperspektive für sein Land erneuert. „Die Ukraine hat Einfluss auf die Stärke Europas. Das ist ein Fakt“, sagte Selenskyj am Donnerstag in seiner abendlichen Videoansprache. „Und dieses Jahr ist es an der Zeit, diesen und andere Fakten zu nutzen, um die Einheit in Europa zu stärken – angefangen beim Start von Verhandlungen über die EU-Mitgliedschaft der Ukraine.“ Unterdessen reiste der frühere US-Vizepräsident Mike Pence in die Ukraine. Von Selenskyj in Kiew empfangen wurde zudem die schwedische Umweltaktivistin Greta Thunberg.',
  size: 'meinestadt',
  args:{   src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFYE7C4Uz5vuWSQUmIsny2oz4A9WFbSrJaQ&usqp=CAU',}
};

export const Web = Template.bind({});
Web.args = {
  title: 'Mehr als 16 Monate nach Beginn des russischen Angriffskriegs hat der ukrainische Präsident Wolodymyr Selenskyj die Forderung nach einer baldigen konkreten EU-Beitrittsperspektive für sein Land erneuert. „Die Ukraine hat Einfluss auf die Stärke Europas. Das ist ein Fakt“, sagte Selenskyj am Donnerstag in seiner abendlichen Videoansprache. „Und dieses Jahr ist es an der Zeit, diesen und andere Fakten zu nutzen, um die Einheit in Europa zu stärken – angefangen beim Start von Verhandlungen über die EU-Mitgliedschaft der Ukraine.“ Unterdessen reiste der frühere US-Vizepräsident Mike Pence in die Ukraine. Von Selenskyj in Kiew empfangen wurde zudem die schwedische Umweltaktivistin Greta Thunberg.',
  label: 'Web',
  size: 'web',
  args:{   src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFYE7C4Uz5vuWSQUmIsny2oz4A9WFbSrJaQ&usqp=CAU',}
};