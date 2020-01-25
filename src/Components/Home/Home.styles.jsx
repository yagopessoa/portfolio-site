import styled, { css } from 'styled-components';

export const Title = styled.p`
  font: 600 32px/38px Roboto;
  color: #009dff;
  padding: 8px 2px;
  border-bottom: 5px solid #009dff;
  border-radius: 4px;
  width: fit-content;
  margin: 8px 2px;
`;

export const Subtitle = styled.div`
  font: 600 24px/29px Roboto;
  color: #4e4e4e;
  width: fit-content;
  margin: 16px 2px;
`;

export const Text = styled.div`
  font: 400 20px/24px Roboto;
  color: #a4a4a4;
  width: fit-content;
  margin: 8px 2px;

  & > a {
    color: #a4a4a4;
  }

  ${props =>
    props.caption &&
    css`
      font-size: 12px;
    `};
`;

export const Footer = styled(Text)`
  position: absolute;
  bottom: 16px;
`;
