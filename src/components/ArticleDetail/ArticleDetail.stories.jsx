import React from 'react';

import { ArticleDetail } from './ArticleDetail';


export default {
  title: 'Form/ArticleDetail',
  component: ArticleDetail,
};

const Template = (args) =><ArticleDetail  {...args}/>;

export const Meinestadt = Template.bind({});
Meinestadt.args = {
  label: 'Meinestadt',
  title: 'Mehr als 16 Monate nach Beginn des russischen Angriffskriegs hat der ukrainische Präsident Wolodymyr Selenskyj die Forderung nach einer baldigen konkreten EU-Beitrittsperspektive für sein Land erneuert. „Die Ukraine hat Einfluss auf die Stärke Europas. Das ist ein Fakt“, sagte Selenskyj am Donnerstag in seiner abendlichen Videoansprache. „Und dieses Jahr ist es an der Zeit, diesen und andere Fakten zu nutzen, um die Einheit in Europa zu stärken – angefangen beim Start von Verhandlungen über die EU-Mitgliedschaft der Ukraine.“ Unterdessen reiste der frühere US-Vizepräsident Mike Pence in die Ukraine. Von Selenskyj in Kiew empfangen wurde zudem die schwedische Umweltaktivistin Greta Thunberg.',
  size: 'meinestadt'
};

export const Web = Template.bind({});
Web.args = {
  title: 'Mehr als 16 Monate nach Beginn des russischen Angriffskriegs hat der ukrainische Präsident Wolodymyr Selenskyj die Forderung nach einer baldigen konkreten EU-Beitrittsperspektive für sein Land erneuert. „Die Ukraine hat Einfluss auf die Stärke Europas. Das ist ein Fakt“, sagte Selenskyj am Donnerstag in seiner abendlichen Videoansprache. „Und dieses Jahr ist es an der Zeit, diesen und andere Fakten zu nutzen, um die Einheit in Europa zu stärken – angefangen beim Start von Verhandlungen über die EU-Mitgliedschaft der Ukraine.“ Unterdessen reiste der frühere US-Vizepräsident Mike Pence in die Ukraine. Von Selenskyj in Kiew empfangen wurde zudem die schwedische Umweltaktivistin Greta Thunberg.',
  label: 'Web',
  size: 'web'
};

