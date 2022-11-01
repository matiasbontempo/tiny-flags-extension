import ButtonIcon from '@components/button-icon';

import { pages } from './constants';

import {
  Container, StyledList, MenuItem, Logo,
} from './styles';

import { Props } from './types';

const Menu = ({ activeItem, onItemClick }: Props) => (
  <Container>
    <StyledList>
      {pages.map((p) => (
        <MenuItem key={p} active={activeItem === p}>
          <ButtonIcon icon={p} onClick={() => onItemClick(p)} />
        </MenuItem>
      ))}
    </StyledList>
    <Logo><a href="https://github.com/matiasbontempo/tiny-flags" target="_blank" rel="noreferrer">Tiny Flags</a></Logo>
  </Container>
);

export default Menu;
