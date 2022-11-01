import styled from 'styled-components';

export const StyledLabel = styled.label`
  cursor: pointer;
`;

export const StyledInput = styled.input`
  display: none;
`;

export const ToggleElement = styled.div<{ value: boolean | undefined }>`
  width: 44px;
  height: 24px;
  background-color: ${({ value, theme }) => (value ? theme.colors.primary : theme.colors.disabled)};
  border-radius: 12px;
  position: relative;

  :before {
    content: "";
    width: 20px;
    height: 20px;
    position: absolute;
    top: 2px;
    left: 2px;
    background-color: ${({ theme }) => theme.colors.light};
    border-radius: 100%;
    transform: translateX(${({ value }) => (value ? '20px' : '0')});
    transition: transform 50ms ease-out;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.4);
  }
`;
