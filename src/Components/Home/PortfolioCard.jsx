import React from 'react';
import PropTypes from 'prop-types';
import {
  Subtitle,
  Card,
  CardTitle,
  ButtonLink,
  Image,
  ImageContainer,
  ButtonRow,
} from './Home.styles';
import MdOpenInNew from '../Icons/MdOpenInNew';

const PortfolioCard = ({ title, description, url, imageList, isMobile }) => {
  const isNullOrEmpty = str => str && str !== '';
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <Subtitle>{description}</Subtitle>
      <ImageContainer>
        {imageList.map(image => (
          <Image
            key={image}
            src={image}
            perRow={isMobile ? imageList.length : 2}
          ></Image>
        ))}
      </ImageContainer>
      {isNullOrEmpty(url) && (
        <ButtonRow>
          <ButtonLink href={url} target="_blank" rel="noopener noreferrer" title="Abrir site em nova guia">
            <MdOpenInNew />
            Ver
          </ButtonLink>
        </ButtonRow>
      )}
    </Card>
  );
};

PortfolioCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  imageList: PropTypes.arrayOf(PropTypes.string)
};

PortfolioCard.defaultProps = {
  title: 'Título',
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti eligendi natus, consectetur, 
    numquam repellat itaque perspiciatis deserunt iusto minus assumenda exercitationem accusantium, debitis similique?
    Fuga itaque quas corrupti omnis facere.`,
  url: '',
  imageList: []
};

export default PortfolioCard;
