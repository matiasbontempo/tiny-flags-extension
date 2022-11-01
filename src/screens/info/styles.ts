import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px 12px 0;
`;

export const StyledImage = styled.img`
  display: block;
  margin-bottom: 24px;
  width: 80px;
`;

export const StyledParagraph = styled.p`
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Titillium Web', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.md};
  line-height: 1.4em;
`;
