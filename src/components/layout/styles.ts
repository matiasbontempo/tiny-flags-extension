import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.background};
  height: 100%;
  position: relative;
  display: grid;
  grid-template-rows: 1fr auto;
`;

export const Content = styled.div`
  overflow-y: auto;
  padding-bottom: 12px;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.disabled}66;
    opacity: 0.5;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.colors.disabled};
  }
`;
