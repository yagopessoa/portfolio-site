import styled, { css } from 'styled-components';

export const Title = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSize.xxlarge};
  padding: 8px 2px;
  width: fit-content;
  margin: 8px 2px;
`;

export const Subtitle = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  font-size: ${({ theme }) => theme.fontSize.medium};
  width: fit-content;
  margin: ${({ theme: { space } }) => `${space.medium} ${space.xsmall}`};
`;

export const Text = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.medium};
  width: fit-content;
  margin: ${({ theme: { space } }) => `${space.small} ${space.xsmall}`};

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
  position: absolute;
  bottom: ${({ theme: { space } }) => space.medium};
  color: ${({ theme }) => theme.color.bodyDimmed};

  & > a {
    color: ${({ theme }) => theme.color.bodyDimmed};
  }
`;
