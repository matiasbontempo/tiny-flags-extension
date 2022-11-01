export type Icons = 'flag' | 'info';

export interface Props {
  icon: Icons;
  onClick?: () => void;
}
