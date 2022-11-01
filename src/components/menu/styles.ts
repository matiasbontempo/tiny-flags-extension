import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  z-index: 1;

  ::before {
    content: '';
    width: 100%;
    height: 32px;
    position: absolute;
    top: -100%;
    pointer-events: none;

    background: linear-gradient(0deg, ${({ theme }) => theme.colors.background} 0%, rgba(0,0,0,0) 100%);
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`;

export const MenuItem = styled.li<{ active?: boolean }>`
  width: 32px;
  height: 32px;
  background: ${({ theme, active }) => active && theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  
  border-radius: 0 0 8px 8px;

  :first-of-type {
    border-radius: 0 0 8px 0;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 12px;
  font-weight: 600;

  a {
    color: ${({ theme }) => theme.colors.light};
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
`;
