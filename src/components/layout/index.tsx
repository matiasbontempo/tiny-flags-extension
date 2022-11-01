import { ThemeProvider } from 'styled-components';
import type { FC } from 'react';

import Menu from '@components/menu';

import theme from '@utils/themes';

import { Container, Content } from './styles';

import type { Props } from './types';

const Layout: FC<Props> = ({ activeTab, onTabChange, children }) => (
  <ThemeProvider theme={theme}>
    <Container>
      <Content>{children}</Content>
      <Menu activeItem={activeTab} onItemClick={onTabChange} />
    </Container>
  </ThemeProvider>
);

export default Layout;
