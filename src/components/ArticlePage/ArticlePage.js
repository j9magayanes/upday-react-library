import React, { Children } from 'react';
import './articlePage.css';
import { Ad } from '../Ad/Ad';
import { CategoryDetail } from '../CategoryDetail/CategoryDetail';
import { Title } from '../Title/Title';
import { Source } from '../Source/Source';
import { RelativeTimestamp } from '../RelativeTimestamp/RelativeTimestamp';
import { FullText } from '../FullText/FullText';
import { HeroImage } from '../HeroImage/HeroImage';
import { ImageCredits } from '../ImageCredits/ImageCredits'
import { ReadMore } from '../ReadMore/ReadMore'

export const ArticlePage = ({
  primary,
  backgroundColor,
  size,
  label,
  title,
  args,
}) => {
  return (
    <>
      <Ad args={args}></Ad>
      <CategoryDetail args={args}></CategoryDetail>
      <Title args={args}/>
      <Source args={args}/>
      <RelativeTimestamp args={args}/>
      <HeroImage args={args}></HeroImage>
      <ImageCredits args={args}></ImageCredits>
      <FullText  args={args}></FullText>
      <ReadMore args={args}></ReadMore>
      <Ad args={args}></Ad>
    </>
  );
};
