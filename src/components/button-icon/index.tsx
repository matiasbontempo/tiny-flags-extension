import type { ReactNode } from 'react';

import FlagIcon from '@components/icons/flag-icon';
import InfoIcon from '@components/icons/info-icon';

import { StyledButton } from './styles';

import type { Props, Icons } from './types';

const iconMapper: Record<Icons, ReactNode> = {
  flag: <FlagIcon />,
  info: <InfoIcon />,
};

const ButtonIcon = ({ icon, onClick }: Props) => (
  <StyledButton onClick={onClick}>{iconMapper[icon]}</StyledButton>
);

export default ButtonIcon;
