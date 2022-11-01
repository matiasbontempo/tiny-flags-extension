import styled from 'styled-components';

export const Container = styled.div`
  padding: 4px 0;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 16px;
  align-items: center;
`;

export const Details = styled.div`
  height: 48px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  white-space: pre;
  overflow: hidden;
`;

export const StyledLabel = styled.div`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.text};
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const StyledId = styled.div`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
`;
