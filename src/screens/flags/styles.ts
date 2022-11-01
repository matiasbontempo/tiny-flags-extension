import styled from 'styled-components';

export const Container = styled.div`
  padding: 12px;
  min-height: 90%;
`;

export const StyledEmptyFlags = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 48px;
`;

export const StyledImage = styled.img`
  width: 160px;
  margin-bottom: 24px;
`;

export const StyledText = styled.span`
  color: ${({ theme }) => theme.colors.disabled};
  font-size: ${({ theme }) => theme.fontSize.lg};
`;
