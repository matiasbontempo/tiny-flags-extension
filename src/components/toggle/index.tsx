import { useId } from 'react';
import { StyledLabel, StyledInput, ToggleElement } from './styles';

import type { Props } from './types';

const referenceId = 'checkbox';

const Toggle = ({ value, onClick }: Props) => {
  const id = useId();
  return (
    <StyledLabel htmlFor={`${referenceId}-${id}`}>
      <StyledInput
        checked={value}
        id={`${referenceId}-${id}`}
        onChange={(e) => onClick?.(e.target.checked)}
        type="checkbox"
      />
      <ToggleElement value={value} />
    </StyledLabel>
  );
};

export default Toggle;
