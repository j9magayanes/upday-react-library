import React, { Children } from 'react';
import './articlePage.css';
import { Ad } from '../Ad/Ad';
import { CategoryDetail } from '../CategoryDetail/CategoryDetail';
import { Title } from '../Title/Title';
import { Source } from '../Source/Source';
import { RelativeTimestamp } from '../RelativeTimestamp/RelativeTimestamp';
import { HeroImage } from '../HeroImage/HeroImage';
import { ImageCredits } from '../ImageCredits/ImageCredits'
import { ReadMore } from '../ReadMore/ReadMore'
import { ArticleDetail } from '../ArticleDetail/ArticleDetail'

export const ArticlePage = ({
  primary,
  backgroundColor,
  size,
  label,
  title,
  appName,
  src, 
  args,
}) => {
  return (
    <>
      <Ad args={args}  src={src}></Ad>
      <CategoryDetail args={args}></CategoryDetail>
      <Title args={args} />
      <Source args={args}/>
      <RelativeTimestamp args={args}/>
      <HeroImage args={args}></HeroImage>
      <ImageCredits args={args}></ImageCredits>
      <ArticleDetail args={args} size={size} title={title}></ArticleDetail >
      <ReadMore args={args}></ReadMore>
      <Ad args={args} src={src} ></Ad>
    </>
  );
};
