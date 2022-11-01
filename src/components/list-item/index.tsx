import Toggle from '../toggle';

import {
  Container, Details, StyledLabel, StyledId,
} from './styles';

import type { Props } from './types';

const ListItem = ({
  label, id, value, onClick,
}: Props) => (
  <Container>
    <Details>
      <StyledLabel>{ label || id }</StyledLabel>
      { label && <StyledId>{ id }</StyledId> }
    </Details>
    <Toggle value={value} onClick={(state) => onClick(state, id)} />
  </Container>
);

export default ListItem;
