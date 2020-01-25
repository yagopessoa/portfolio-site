import styled, { css } from 'styled-components';

export const Title = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSize.xxlarge};
  padding: ${({ theme: { space } }) => `${space.medium} ${space.xsmall}`};
  margin: ${({ theme: { space } }) => `${space.medium} ${space.xsmall}`};
  width: fit-content;
`;

export const Subtitle = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.large};
  margin: ${({ theme: { space } }) => `${space.small} 0px`};
  width: fit-content;
`;

export const Text = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.medium};
  margin: ${({ theme: { space } }) => `${space.small} 0px`};
  width: fit-content;

  & > a {
    color: ${({ theme }) => theme.color.body};
  }

  ${props =>
    props.caption &&
    css`
      font-size: ${({ theme }) => theme.fontSize.small};
    `};
`;

export const Footer = styled(Text)`
  position: relative;
  bottom: ${({ theme: { space } }) => space.medium};
  margin-top: ${({ theme: { space } }) => space.large};
  color: ${({ theme }) => theme.color.bodyDimmed};

  & > a {
    color: ${({ theme }) => theme.color.bodyDimmed};
  }
`;

export const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.2px;
  text-transform: capitalize;
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSize.large};
  padding: ${({ theme: { space } }) => `${space.small} ${space.medium}`};
  margin-top: ${({ theme: { space } }) => space.medium};
  border-radius: ${({ theme: { radius } }) => radius.medium};
  background: ${({ theme: { color } }) => color.primary};
  color: ${({ theme: { color } }) => color.white};
  text-align: center;
  width: fit-content;
  border: none;
  cursor: pointer;
  :focus {
    outline: 0;
  }
  :active {
    background: ${({ theme: { color } }) => color.focusRing};
  }

  & > svg {
    width: ${({ theme }) => theme.fontSize.xlarge};
    height: ${({ theme }) => theme.fontSize.xlarge};
    margin-right: ${({ theme: { space } }) => space.small};
    fill: ${({ theme: { color } }) => color.white};
  }

  ${props =>
    props.disabled &&
    css`
      cursor: auto;
      background-color: ${({ theme: { color } }) => color.grey2};
    `};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${({ theme: { space } }) => space.medium};
  width: 60vw;

  @media (max-width: 1600px) {
    width: 70vw;
  }
  @media (max-width: 1440px) {
    width: 80vw;
  }
  @media (max-width: 1280px) {
    ${({ theme: { space } }) => css`
      width: calc(90vw - ${space.medium} - ${space.medium});
    `};
  }
  @media (max-width: 768px) {
    ${({ theme: { space } }) => css`
      padding: 0px;
      width: calc(100vw - ${space.large} - ${space.large});
    `};
  }
`;

export const Card = styled.div`
  ${({ theme: { space } }) => css`
    width: calc(100% - ${space.large} - ${space.large});
  `};
  min-height: 200px;
  border: 2px solid ${({ theme: { color } }) => color.border};
  border-radius: ${({ theme: { radius } }) => radius.large};
  padding: ${({ theme: { space } }) => space.large};
  margin: ${({ theme: { space } }) => `${space.small} 0px`};
  display: flex;
  flex-direction: column;
`;

export const CardTitle = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSize.xlarge};
  padding-bottom: ${({ theme: { space } }) => space.small};
`;

export const ImageContainer = styled.div`
  margin: ${({ theme: { space } }) => `${space.medium} 0px`};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Image = styled.img`
  width: calc(
    (100% / ${({ perRow }) => perRow}) - ${({ theme: { space } }) => space.large});
  margin-top: ${({ theme: { space } }) => space.large};

  @media (max-width: 768px) {
    width: calc(
      (100% / ${({ perRow }) => perRow / 2}) - ${({ theme: { space } }) => space.small});
    margin-top: ${({ theme: { space } }) => space.medium};
  }
`;

export const SocialContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme: { space } }) => space.large};
`;

export const CircularButtonLink = styled(ButtonLink)`
  padding: ${({ theme: { space } }) => space.xsmall};
  margin: ${({ theme: { space } }) => space.small};
  border-radius: 50px;
  cursor: pointer;

  & > svg {
    width: ${({ theme }) => theme.fontSize.xlarge};
    height: ${({ theme }) => theme.fontSize.xlarge};
    margin: ${({ theme: { space } }) => space.medium};
    fill: ${({ theme: { color } }) => color.white};
  }
`;
