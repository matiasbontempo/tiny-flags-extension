import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  margin: 0;

  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background: ${({ theme }) => theme.colors.light};
    
    opacity: 0;
    transform: scale(0);

    transition: all 200ms ease-in-out;
  }

  :hover::before {
    opacity: 0.15;
    transform: scale(1);
  }
`;
